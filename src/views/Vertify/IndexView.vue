<template>
    
</template>
<script setup>
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import router from '@/router';
import { authServiceApi } from '@/service/auth.api';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
    vertify()
});


const vertify=async()=>{
    const res=await authServiceApi.vertify(route.params.token)
    console.log(res)
    if(res.success)
    {
        showSuccessNotification("Xác thực thành công. Vui lòng bạn đăng nhập")
        router.push('/login')
    }
    else
    {
        showWarningsNotification(res.message)
    }
}
</script>