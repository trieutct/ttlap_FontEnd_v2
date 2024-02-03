import type { IBodyResponse } from '@/common/interface/interfaces';
import axiosInstance from '@/plugins/axios';
import { ApiService } from '@/plugins/axios/api';
// import { IBodyUser } from '@/views/Admin/Product/interfaces';

class UserApiService extends ApiService {
  async getAll(): Promise<IBodyResponse<any>> {
    return this.client.get(`${this.baseUrl}`);
  }
}

export const userServiceApi = new UserApiService({ baseUrl: '/user' }, axiosInstance);
