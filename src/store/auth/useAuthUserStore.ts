import { defineStore } from 'pinia'
import router from '@/router'
import axios from '@/plugins/axios/axios'
import { IAuthUserInterface,IEmployees,IUserInterface,TokenResponse } from '@/common/interface/interfaces'
import localStorageAuthService from '@/common/storages/authStorage'

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
        async login(userDetails: Partial<IAuthUserInterface>):Promise<void>{
            // console.log(userDetails)
            const { email: email, password: password } = userDetails
            // console.log(user,pwd)
            // //this.loadingSession = true
            try {
                const {data} = await axios.post('/user/login', JSON.stringify({ email, password }))
                // set the current user
                console.log(data)
                if(data.code===200)
                {
                  this.user = {
                      user: email,
                    isUserLoggedIn: true,
                    token: data.data.accessToken
                  }
                  localStorageAuthService.setAccessToken(data.data.accessToken)
                  this.loadingSession = false
                  router.push('/admin/product')
                }
               
              } catch (error: unknown) {
                console.log(error)
              } finally {
                this.loadingSession = false
              }
        }
    }
})