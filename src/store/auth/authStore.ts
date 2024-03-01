import localStorageAuthService from '@/common/storages/authStorage';
import { defineStore } from 'pinia';
import { authServiceApi } from '@/service/auth.api';
import type { IBodyLogin, IBodyRegister } from '@/views/Login/interfaces';
import { computed } from 'vue';
import dayjs from '@/plugins/dayjs';
import { logout } from '@/plugins/axios/utils';
import { showErrorNotification, showWarningsNotification } from '@/common/helper/helpers';

export const AuthStore = defineStore('authStore', () => {

  async function logoutAction() {
    await authServiceApi.logout();
    logout();
  }

  async function register(body: IBodyRegister)
  {
    const res=await authServiceApi.register(body)
    // console.log(res)
    if(!res.success)
    {
      showWarningsNotification(res.message)
      return false
    }
    return true
  }


  async function login(body: IBodyLogin) {
    const res = await authServiceApi.login(body);
    console.log(res)
    if (res.success && res.data!=null) {
      localStorageAuthService.setAccessToken(res.data.accessToken.token);
      localStorageAuthService.setAccessTokenExpiredAt(res.data.accessToken.expiresIn);

      localStorageAuthService.setRefreshToken(res.data.refreshToken.token);
      localStorageAuthService.setRefresh_TokenExpiredAt(res.data.refreshToken.expiresIn);
      
      localStorageAuthService.setUserRole(res.data.profile?.role || "");

      localStorageAuthService.setAvatarUrl(res.data.profile?.avatar || "")

      return true
    }
    showErrorNotification(res.message)
    return false;
  }

  const isAuthenticated = computed(() => {
    const token = localStorageAuthService.getAccessToken();
    const expiredAt = localStorageAuthService.getAccessTokenExpiredAt();
    return Boolean(token && expiredAt && !dayjs(dayjs(expiredAt)).isBefore());
  });
  const hasToken = computed(() => {
    return !!localStorageAuthService.getAccessToken();
  });
  return {
    login,
    logoutAction,
    hasToken,
    isAuthenticated,
    register
  };
});
