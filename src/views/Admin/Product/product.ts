// useProduct.js
import { computed, reactive, ref } from "vue";
import { productServiceApi } from "@/service/product.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
export const useProduct = () => {
  const products = ref([]);

    const fetchProducts = async () => {
      try {
        const res = await productServiceApi._getList(DEFAULT_COMMON_LIST_QUERY);
        if(res.success)
        {
            return res.items
        }
        return null
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
  return {
    products,
    fetchProducts,
  };
};
