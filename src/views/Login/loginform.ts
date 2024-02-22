import { useField, useForm } from 'vee-validate';
import { loginWithPasswordSchema } from './schema';
import { computed } from 'vue';
// import { useAuthUserStore } from '@/store/auth/useAuthUserStore';
import { showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
import router from '@/router';
// const {login} =useAuthUserStore()
import { AuthStore } from '@/store/auth/authStore';
import { useLoadingStore } from '@/store/loading';
export const userLoginForm=()=>{
  const loading=useLoadingStore()
  const authStore=AuthStore()
    const {
        handleSubmit,
        values: formValue,
        setValues,
        meta,
        validate,
      } = useForm({
        validationSchema: loginWithPasswordSchema,
      });
      const {
        value: email,
        setValue: setEmail,
        errorMessage: emailError,
      } = useField('email');
      const {
        value: password,
        setValue: setPassword,
        errorMessage: passwordError,
      } = useField('password');
      const handleLogin = handleSubmit(async (values) => {
        //console.log(values)
        // alert(process.env.VUE_APP_API_URL)
        // const res=await login(values)
        loading.setLoading(true)
        const res=await authStore.login(
          {
            email:values.email,
            password:values.password
          });
        loading.setLoading(false)
        if(res)
        {
          showSuccessNotification("Đăng nhập thành công")
          router.push('/admin/product')
        }
        else
        {
          showWarningsNotification("Đăng nhập thất bại. Vui lòng thử lại")
        }
      });
    const isValidForm = computed(() => meta.value.valid);
    return {
        handleLogin,
        formValue,
        isValidForm,
        validate,
        setValues,
        email,
        setEmail,
        emailError,
        password,
        setPassword,
        passwordError,
    };
}
