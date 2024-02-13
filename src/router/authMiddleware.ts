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
    // console.log("tokenExpiredAt: "+tokenExpiredAt)

    const isExpired = dayjs().isAfter(dayjs(tokenExpiredAt), 'second');
    // console.log("isExpired: "+isExpired)

    const IS_AUTHENTICATED = tokenExpiredAt && !isExpired && hasToken;
    // console.log("IS_AUTHENTICATED: "+IS_AUTHENTICATED)

    if (!IS_AUTHENTICATED && to.name !== PageName.LOGIN_PAGE && !IS_PUBLIC) {
      sessionStorage.setItem('redirect', to.fullPath);
      return next({ name: PageName.LOGIN_PAGE });
    }
    if (IS_PUBLIC) {
      // Do not allow user to visit entry page if they are logged in
      if (IS_AUTHENTICATED && onlyWhenLoggedOut) {
        return next({ name: PageName.DASHBOARD_PAGE });
      }
      return next();
    }
    if (!IS_PUBLIC && !IS_AUTHENTICATED) {
      return next({
        name: PageName.LOGIN_PAGE,
      });
    }
    // if (IS_AUTHENTICATED) {
    //   const metaRole = to?.meta?.role || [];
    //   let hasPermission = false;
    //   if (typeof metaRole === 'string') {
    //     hasPermission = get(role, metaRole, false);
    //   } else if (Array.isArray(metaRole)) {
    //     hasPermission = metaRole.length
    //       ? metaRole.some((permission) => get(role, permission, false))
    //       : true;
    //   }
    //   if (hasPermission) {
    //     return next();
    //   } else {
    //     return next({ name: PageName.DASHBOARD_PAGE });
    //   }
    // }
    return next();

  // const role = localStorageAuthService.getUserRole();
  // alert(role);
  // if (to.name === PageName.LOGIN_PAGE) {
  //   return next();
  // }
  // if (role === Role.ADMIN && to.name !== PageName.LOGIN_PAGE) {
  //   return next();
  // } else {
  //   return next({
  //     name: PageName.LOGIN_PAGE,
  //   });
  // }
};
