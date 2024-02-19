import type {
  IBodyResponse,
  ICommonListQuery,
} from "@/common/interface/interfaces";
import axiosInstance from "@/plugins/axios";
import { ApiService } from "@/plugins/axios/api";

class ProductApiService extends ApiService {
  async createProduct(formData: FormData): Promise<IBodyResponse<any>> {
    return await this.client.post(`${this.baseUrl}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  async updateProduct(
    id: string,
    formData: FormData
  ): Promise<IBodyResponse<any>> {
    return await this.client.put(`${this.baseUrl}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
 
}
export const productServiceApi = new ProductApiService(
  { baseUrl: "/product" },
  axiosInstance
);
