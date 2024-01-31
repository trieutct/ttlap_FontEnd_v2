import { useField, useForm } from 'vee-validate';
import { loginWithPasswordSchema } from './schema';
import { computed } from 'vue';
import { useAuthUserStore } from '@/store/auth/useAuthUserStore';
import { showErrorNotification, showSuccessNotification, showWarningsNotification } from '@/common/helper/helpers';
const {login} =useAuthUserStore()
export const userLoginForm=()=>{
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
        const res=await login(values)
        if(res)
        {
          showSuccessNotification("Đăng nhập thành công")
        }
        else
        {
          showWarningsNotification("Sai tài khoản mật khẩu")
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
