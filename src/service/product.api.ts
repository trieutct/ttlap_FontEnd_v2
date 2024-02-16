import type { IBodyResponse, ICommonListQuery } from '@/common/interface/interfaces';
import axiosInstance from '@/plugins/axios';
import { ApiService } from '@/plugins/axios/api';
import { IProduct } from '@/views/Admin/Product/interfaces';

class ProductApiService extends ApiService {
  // async getAll(queryString: ICommonListQuery): Promise<[]> {
  //   return await this.client.get(`${this.baseUrl}`, {
  //     params: queryString,
  //   })
  // }
  async createProduct(formData: FormData): Promise<IBodyResponse<any>> {
    return await this.client.post(`${this.baseUrl}`, formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}
export const productServiceApi = new ProductApiService({ baseUrl: '/product' }, axiosInstance);
