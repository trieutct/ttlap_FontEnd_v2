import { computed, onMounted, reactive, ref } from "vue";
import { productServiceApi } from "@/service/product.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { IProduct } from "./interfaces";
export const useProduct = () => {
    const products = ref<IProduct[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const fetchProducts = async () => {
      try {
        const res = await productServiceApi._getList<IProduct>(query);
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
