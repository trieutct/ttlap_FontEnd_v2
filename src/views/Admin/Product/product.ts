import { computed, onMounted, reactive, ref } from "vue";
import { productServiceApi } from "@/service/product.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IProduct } from "./interfaces";
import { useLoadingStore } from "@/store/loading";
import { logout } from "@/plugins/axios";
export const useProduct = () => {
    const loading=useLoadingStore()
    const products = ref<IProduct[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const fetchProducts = async () => {
      try {
        loading.setLoading(true)
        const res = await productServiceApi._getList<IProduct>(query);
        if(res.status===419)
          logout()
        if(res.success)
          return {
            data:res.items,
            totalItems:res.totalItems
          }
        return null
      } catch (error) {
        console.error('Error fetching products:', error);
        return null
      }finally{
        loading.setLoading(false)
      }
    };
    const searchProducts = async () => {
      try {
        loading.setLoading(true)
        const res = await productServiceApi._getList<IProduct>(query);
        if(res.status===419)
          logout()
        if(res.success)
            return {
              data:res.items,
              totalItems:res.totalItems
            }
        return null
      } catch (error) {
        console.error('Error fetching products:', error);
        return null
      }finally{
        loading.setLoading(false)
      }
    };
  return {
    products,
    fetchProducts,
    query,
    searchProducts,
  };
};
