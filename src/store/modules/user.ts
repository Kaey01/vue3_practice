import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'
import type { loginFormData } from '@/api/user/type'

const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('TOKEN'),
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      const result = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token
        localStorage.setItem('TOKEN', result.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
