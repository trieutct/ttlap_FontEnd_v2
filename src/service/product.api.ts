import type { IBodyResponse, ICommonListQuery } from '@/common/interface/interfaces';
import axiosInstance from '@/plugins/axios';
import { ApiService } from '@/plugins/axios/api';

class ProductApiService extends ApiService {
  // async getAll(queryString: ICommonListQuery): Promise<[]> {
  //   return await this.client.get(`${this.baseUrl}`, {
  //     params: queryString,
  //   })
  // }
}
export const productServiceApi = new ProductApiService({ baseUrl: '/product' }, axiosInstance);
