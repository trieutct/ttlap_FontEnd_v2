import { PageName, Role } from "@/common/contant/contants";
import localStorageAuthService from "@/common/storages/authStorage";
import dayjs from "@/plugins/dayjs";
import { get } from "lodash";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default async (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> => {
    const role = localStorageAuthService.getUserRole();
    // console.log("role:"+role)
    const IS_PUBLIC = to?.meta?.public || false;
    // console.log("IS_PUBLIC: "+IS_PUBLIC)
    const onlyWhenLoggedOut = to?.meta?.onlyWhenLoggedOut || false;
    // console.log("onlyWhenLoggedOut: "+onlyWhenLoggedOut)

    const hasToken = localStorageAuthService.getAccessToken() ? true : false;
    // console.log("hasToken: "+hasToken)

    const tokenExpiredAt = localStorageAuthService.getAccessTokenExpiredAt();
    // const refreshTokenExpiredAt = localStorageAuthService.getRefresh_TokenExpiredAt();
    // console.log("tokenExpiredAt: "+tokenExpiredAt)

    const isExpired = dayjs().isAfter(dayjs(tokenExpiredAt), 'second');
    // console.log("isExpired: "+isExpired)
    const RoleRouter=to?.meta?.role || Role.USER
    const IS_AUTHENTICATED = tokenExpiredAt && !isExpired && hasToken;
    // console.log("IS_AUTHENTICATED: "+IS_AUTHENTICATED)
    if(to.name===PageName.LOGIN_PAGE)
    {
      return next()
    }
    
    if (!IS_AUTHENTICATED && to.name !== PageName.LOGIN_PAGE) {
      // sessionStorage.setItem('redirect', to.fullPath);
      return next({ name: PageName.LOGIN_PAGE });
    }
    if (role===RoleRouter) {
      if (!IS_PUBLIC && !IS_AUTHENTICATED) {
        return next({
          name: PageName.LOGIN_PAGE,
        });
      }
      return next()
    }
    else
    {
      // alert("Bạn ko có quyền")
      //tạm thời là vào trang 404
      return next({ name: PageName.NOT_FOUND_PAGE });
    }
};
