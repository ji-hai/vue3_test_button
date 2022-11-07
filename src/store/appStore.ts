import { defineStore } from 'pinia'

const appStore = defineStore({
    id: 'appStore',
    state: () => ({
      test: 'test',
      lang: 'zh'
    }),
    getters: {

    },
    actions: {

    }
})

export default appStore
