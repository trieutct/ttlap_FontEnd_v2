import { defineStore } from "pinia";
export const commonStore = defineStore({
    id: 'common',
    state: () => ({
      title: "Danh sách sản phẩm"
    }),
    actions: {
      setTitle(value:string) {
        this.title = value
      }
    }
})