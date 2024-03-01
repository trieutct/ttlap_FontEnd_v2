<template>
    
</template>
<script setup>
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import router from '@/router';
import { authServiceApi } from '@/service/auth.api';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useLoadingStore } from '@/store/loading';
const loading=useLoadingStore()
const route = useRoute();

onMounted(() => {
    vertify()
});


const vertify=async()=>{
    loading.setLoading(true)
    const res=await authServiceApi.vertify(route.params.token)
    loading.setLoading(false)
    if(res.success){
        showSuccessNotification("Xác thực thành công. Vui lòng bạn đăng nhập")
        router.push('/login')
    }
    else{
        showWarningsNotification(res.message)
    }
}
</script>