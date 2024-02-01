import { defineStore } from 'pinia'
// import router from '@/router'
// import axios from '@/plugins/axios/axios'
import { IAuthUserInterface,IEmployees,IUserInterface,TokenResponse } from '@/common/interface/interfaces'
import localStorageAuthService from '@/common/storages/authStorage'
// import { showErrorNotification } from '@/common/helper/helpers'
import { authServiceApi } from '@/service/auth.api'

const initalUserState: Partial<IUserInterface> = {
    user: '',
    isUserLoggedIn: false,
    token: ''
  }
export const useAuthUserStore=defineStore('authUser',{
    state:()=>{
        return{
            user: initalUserState,
            loadingSession: false
        }
    },
    getters:{
        getAccessToken:(state): string | undefined => state.user.token
    },
    actions:{
        async login(userDetails: Partial<IAuthUserInterface>):Promise<boolean>{
            //console.log(userDetails)
            const { email: email, password: password } = userDetails
            // console.log(user,pwd)
            // //this.loadingSession = true
            try {
              /////    ------ cái này là cái cũ --------------
                // const {data} = await axios.post('/user/login', JSON.stringify({ email, password }))
                // if(data.code===200)
                // {
                //   this.user = {
                //       user: email,
                //     isUserLoggedIn: true,
                //     token: data.data?.accessToken
                //   }
                //   localStorageAuthService.setAccessToken(data.data?.accessToken)
                //   // this.loadingSession = false
                //   router.push('/admin/product')
                //   return true
                // }
                // return false
                const res=await authServiceApi.login(userDetails)
                if(res.success==true)
                {
                    localStorageAuthService.setAccessToken(res.data.accessToken)
                    return true
                }
                return false
              } catch (error: unknown) {
                console.log(error)
                return false
              } finally {
                // this.loadingSession = false
              }
        }
    }
})