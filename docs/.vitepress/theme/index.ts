import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import { EnhanceAppContext } from 'vitepress'

// @ts-ignore
import MyButton from '../../../src/components/baseComponents/install'

export default {
    ...DefaultTheme,
    enhanceApp(ctx: EnhanceAppContext) {
        DefaultTheme.enhanceApp(ctx)
        ctx.app.use(ElementPlus, { locale })
        ctx.app.use(MyButton)
    }
}
