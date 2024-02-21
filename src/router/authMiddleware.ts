import { PageName, Role } from "@/common/contant/contants";
import localStorageAuthService from "@/common/storages/authStorage";
import dayjs from "@/plugins/dayjs";
import { get } from "lodash";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { showWarningsNotification } from '@/common/helper/helpers';
export default async (
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> => {
    const role = localStorageAuthService.getUserRole();
    const IS_PUBLIC = to?.meta?.public || false;
    // const onlyWhenLoggedOut = to?.meta?.onlyWhenLoggedOut || false;
    const hasToken = localStorageAuthService.getAccessToken() ? true : false;
    const tokenExpiredAt = localStorageAuthService.getAccessTokenExpiredAt();
    const isExpired = dayjs().isAfter(dayjs(tokenExpiredAt), 'second');
    const isExpiredRefresh=dayjs().isAfter(dayjs(localStorageAuthService.getRefresh_TokenExpiredAt()),'second')
    const RoleRouter=to?.meta?.role || Role.USER
    const IS_AUTHENTICATED = tokenExpiredAt && !isExpired && hasToken;

  if(to.name === PageName.LOGIN_PAGE)
  {
    localStorageAuthService.removeAll()
  }
  if(IS_PUBLIC)
  {
    return next()
  }
  if (!IS_AUTHENTICATED && to.name !== PageName.LOGIN_PAGE && !IS_PUBLIC) {
    // alert(1)
    // sessionStorage.setItem('redirect', to.fullPath);
    if(isExpiredRefresh)
    {
      showWarningsNotification("Hết phiên đăng nhập. Vui lòng đăng nhập lại")
      return next({ name: PageName.LOGIN_PAGE });
    }
    else
    {
      return next()
    }
  }
  if (!IS_PUBLIC) {
    alert(2)
    if (IS_AUTHENTICATED) {
      if (role===RoleRouter) {
        return next();
      } else {
        // alert("không có quyền vào")
        return next({ name: PageName.NOT_FOUND_PAGE });
      }
    }
  }
  if (!IS_PUBLIC && !IS_AUTHENTICATED) {
    alert(3)
    return next({
      name: PageName.LOGIN_PAGE,
    });
  }
  alert(5)
  return next();
};