import { HttpStatus, PageName } from '@/common/contant/contants';
import localStorageAuthService from '@/common/storages/authStorage';
import axios from 'axios';
import router from '@/router';

export const logout = (redirectToLogin = true) => {
  localStorageAuthService.resetAll();
  const currentPage = router.currentRoute;
  if (redirectToLogin && currentPage.value.name !== PageName.LOGIN_PAGE) {
    sessionStorage.setItem('redirect', currentPage.value.fullPath);
    router
      .push({ name: PageName.LOGIN_PAGE })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {});
  }
};

export const sendRefreshToken = async () => {
  let response;
  try {
    const API_URL = process.env.VUE_APP_API_URL;
    response = await axios.get(`${API_URL}/auth/token`, { withCredentials: true });
    if (response?.status === HttpStatus.OK) {
      localStorageAuthService.setAccessToken(response.data?.data.accessToken);
      localStorageAuthService.setAccessTokenExpiredAt(response.data?.data.expiresIn);
      return;
    }
    logout(true);
    return;
  } catch (error) {
    logout(true);
    return;
  }
};
