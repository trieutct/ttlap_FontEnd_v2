import { computed, onMounted, reactive, ref } from "vue";
import { productServiceApi } from "@/service/product.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IProduct } from "./interfaces";
import { useLoadingStore } from "@/store/loading";
export const useProduct = () => {
    const loading=useLoadingStore()

    const products = ref<IProduct[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const fetchProducts = async () => {
      try {
        loading.setLoading(true)
        const res = await productServiceApi._getList<IProduct>(query);
        loading.setLoading(false)
        if(res.success)
            return res.items
        return null
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  return {
    products,
    fetchProducts,
    query
  };
};
