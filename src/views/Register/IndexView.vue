<template>
    <div>
        <v-card class="mx-auto pa-5 pb-8" variant="flat" max-width="500" rounded="lg">
            <v-img class="mx-auto my-6" max-width="100"
                src="https://tse4.mm.bing.net/th?id=OIP.fv5DeUz-OmV84NOdioiodgHaEc&pid=Api&P=0&h=220"></v-img>
            <div style="font-weight: 600;" class="text-h4 text-center">
                Đăng Ký
            </div>
            <v-form @submit.prevent="registerform.handleLogin" @keyup.enter="registerform.handleLogin">
                <div class="text-subtitle-1 text-medium-emphasis">Email</div>
                <v-text-field v-model="registerform.email" :error-messages="registerform.emailError" :type="registerform.emailError"  required
                    density="compact" placeholder="Nhập email" variant="outlined"></v-text-field>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Mật khẩu
                </div>
                <v-text-field v-model="registerform.password" :error-messages="registerform.passwordError" required
                    :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'" :type="visible ? 'text' : 'password'"
                    density="compact" placeholder="Nhập mật khẩu" variant="outlined"
                    @click:append-inner="visible = !visible"></v-text-field>
                <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                    Nhập lại mật khẩu
                </div>
                <v-text-field v-model="registerform.cfpassword" :error-messages="registerform.cfpasswordError"  required
                :append-inner-icon="visible1 ? 'mdi-eye' : 'mdi-eye-off'" :type="visible1 ? 'text' : 'password'"
                density="compact" placeholder="Nhập lại mật khẩu" variant="outlined"
                @click:append-inner="visible1 = !visible1"></v-text-field>
                <v-btn @click="registerform.handleLogin" @keyup.enter="registerform.handleLogin" style="font-size: 16px;" class="text-capitalize mb-8 mt-2" block color="#0F60FF"
                    size="large">
                    Đăng<span style="margin-left: 2px;" class="text-lowercase">Ký</span>
                </v-btn>
            </v-form>
            <div class="text-center">
                Bạn đã có tài khoản ?
                <router-link to="/login" class="text-decoration-none text-center" style="color:#0F60FF;">
                    Đăng nhập ?
                </router-link>
            </div>
        </v-card>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
const visible = ref(false)
const visible1 = ref(false)
const terms = ref('')

import {userRegisterForm} from '@/views/Register/register_form'
const registerform = reactive(userRegisterForm());

</script>