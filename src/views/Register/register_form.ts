import { useField, useForm } from 'vee-validate';
import { registerWithPasswordSchema } from '../Login/schema';
import { computed } from 'vue';
import { AuthStore } from '@/store/auth/authStore';
import { useLoadingStore } from '@/store/loading';
import localStorageAuthService from '@/common/storages/authStorage';
import { Role } from '@/common/contant/contants';
import { showSuccessNotification } from '@/common/helper/helpers';
export const userRegisterForm=()=>{
    const authStore=AuthStore()
    const loading=useLoadingStore()

    const {
        handleSubmit,
        values: formValue,
        setValues,
        meta,
        validate,
      } = useForm({
        validationSchema: registerWithPasswordSchema,
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
      const {
        value: cfpassword,
        setValue: cfsetPassword,
        errorMessage: cfpasswordError,
      } = useField('cfpassword');


      const handleLogin = handleSubmit(async (values) => {
        loading.setLoading(true)
        const res = await authStore.register({
          email: values.email,
          password: values.password,
        });
        loading.setLoading(false)
        if(res)
        {
            showSuccessNotification("Đăng ký thành công. Vui lòng vào email để xác minh")
        }
        else
        {
            // alert("Lỗi")
        }
      });


      return{
        handleLogin,
        formValue,
        validate,
        setValues,
        email,
        setEmail,
        emailError,
        password,
        setPassword,
        passwordError,
        cfpassword,
        cfsetPassword,
        cfpasswordError,
      }
}