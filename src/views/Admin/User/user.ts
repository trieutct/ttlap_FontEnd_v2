import { computed, onMounted, reactive, ref } from "vue";
import { userServiceApi } from "@/service/user.api";
import { DEFAULT_COMMON_LIST_QUERY } from "@/common/contant/contants";
import { useLoadingStore } from "@/store/loading";
import { IUser } from "./interface";
import { logout } from "@/plugins/axios";
export const useUser=()=>{
    const loading=useLoadingStore()
    const users = ref<IUser[]>([])
    const query=DEFAULT_COMMON_LIST_QUERY
    const fetchUsers = async () => {
        try {
          loading.setLoading(true)
          const res = await userServiceApi._getList<IUser>(query);
          loading.setLoading(false)
          if(res.status===419)
            logout()
          if(res.success)
          {
            return {
              data:res.items,
              totalItems:res.totalItems
            }
          }
          return null
        } catch (error) {
          console.error('Error fetching user:', error);
          return null
        }
      };
      const searchUsers = async () => {
        try {
          loading.setLoading(true)
          const res = await userServiceApi._getList<IUser>(query);
          loading.setLoading(false)
          if(res.status===419)
            logout()
          if(res.success)
          {
            return {
              data:res.items,
              totalItems:res.totalItems
            }
          }
          return null
        } catch (error) {
          console.error('Error fetching products:', error);
          return null
        }
      };
    return{
        users,
        fetchUsers,
        query,
        searchUsers
    }
}