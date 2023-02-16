import { defineConfig } from "vitepress"

export default defineConfig({
    title: '基础组件',
    description: '基础组件',
    lang: 'cn-ZH',
    base: '/',
    lastUpdated: true,
    themeConfig: {
        logo: '/favicon.ico',
        siteTitle: '基础组件文档',
        outline: 0,
        socialLinks: [
            { icon: 'github', link: '' }
        ],
        nav:[
            {
                text: '指南',
                link: '/'
            },
            { text: '组件', link: '/components/base.md' },
        ],
        sidebar:{
            '/components': [
                {
                    text: '常用组件',
                    collapsed: false,
                    items: [
                        { text: '下拉选择组件', link: '/components/TSelect/base.md' },
                        { text: '下拉选择表格组件', link: '/components/TSelectTable/base.md' },
                    ]
                },
                {
                    text: '复杂组件',
                    collapsed: false,
                    items: [
                        { text: '条件查询组件', link: '/components/TQueryCondition/base.md' },
                        { text: '表单组件', link: '/components/TForm/base.md' },
                        { text: 'table组件', link: '/components/TTable/base.md' },
                    ]
                }
            ]
        },
        algolia: {
            appId: '0J4900XJGB',
            apiKey: 'f51cf3d396b82d35ea5381b0dfa7e231',
            indexName: 'test',
            placeholder: '搜索文档',
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: '清除查询条件',
                        resetButtonAriaLabel: '清除查询条件',
                        cancelButtonText: '取消',
                        cancelButtonAriaLabel: '取消'
                    },
                    startScreen: {
                        recentSearchesTitle: '搜索历史',
                        noRecentSearchesText: '没有搜索历史',
                        saveRecentSearchButtonTitle: '保存至搜索历史',
                        removeRecentSearchButtonTitle: '从搜索历史中移除',
                        favoriteSearchesTitle: '收藏',
                        removeFavoriteSearchButtonTitle: '从收藏中移除'
                    },
                    errorScreen: {
                        titleText: '无法获取结果',
                        helpText: '你可能需要检查你的网络连接'
                    },
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭',
                        searchByText: '搜索提供者'
                    },
                    noResultsScreen: {
                        noResultsText: '无法找到相关结果',
                        suggestedQueryText: '你可以尝试查询',
                        reportMissingResultsText: '你认为该查询应该有结果？',
                        reportMissingResultsLinkText: '点击反馈'
                    }
                }
            }
        },
        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2019-present Evan You'
        // },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        }
    }
})
