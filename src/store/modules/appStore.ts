import { defineStore } from 'pinia'
// @ts-ignore
import piniaPersistConfig from '../piniaPersits'

const appStore = defineStore({
    id: 'appStore',
    state: () => ({
      test: 'test',
      lang: 'zh'
    }),
    getters: {

    },
    actions: {

    },
    persist: piniaPersistConfig('appStore')
})

export default appStore
