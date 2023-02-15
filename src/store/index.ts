// 导入 pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {createPinia} from "pinia"

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export default pinia
