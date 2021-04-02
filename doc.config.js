module.exports = {
  info: {
    title: 'Xm Design',
    desc: 'Vue2 组件库',
    logo: 'https://user-images.githubusercontent.com/9743418/104887549-680c1e80-59a6-11eb-8222-40e1d38a0fe2.png'
  },
  tconModules: ['layout', 'color', 'size', 'text'],
  git: 'https://github.com/shinemofe/xm-design-vue2',
  catelogs: [
    {
      title: '开发指南',
      items: [
        {
          path: 'home',
          title: '介绍',
          md: true
        },
        {
          path: 'quickstart',
          title: '快速上手',
          md: true
        },
        {
          path: 'var',
          title: '主题定制',
          md: true
        }
      ]
    },
    {
      title: '基础组件',
      items: [
        {
          path: 'sfc',
          title: 'SFC 组件'
        }
      ]
    },
    {
      title: 'Vant 组件',
      items: [
        {
          path: 'van-button',
          title: 'Button 按钮',
          vant: true
        },
        {
          path: 'van-tab',
          title: 'Tab 导航',
          vant: true
        }
      ]
    },
    {
      title: '小程序业务',
      items: [
      ]
    }
  ]
}
