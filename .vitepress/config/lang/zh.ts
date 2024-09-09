import { DefaultTheme } from "vitepress"
import {sidebars} from '../sidebarControl'

export const zh_CN = <DefaultTheme.Config>({
    lang: 'zh-CN',
    link: '/zh/',
    title: "CryChic文档",
    description: "一个包含 Minecraft 开发文档的网站。",
    themeConfig: {
        nav: [
            { text: '导航', link: '/zh/doc/guide' }
            ],
        sidebar: sidebars("zh"),
        outline: {
        level: "deep",
        label: '页面导航'
        },
        docFooter: {
        prev: '上一页',
        next: '下一页'
        },
        langMenuLabel: '改变语言',
        darkModeSwitchLabel: '切换主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    },
})