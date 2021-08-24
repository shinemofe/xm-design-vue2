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
        },
        {
          path: 'xm-table',
          title: 'Table 表格'
        },
        {
          path: 'xm-select',
          title: 'Select 选择'
        }
      ]
    },
    {
      title: 'Vant 组件',
      items: [
        {
          path: 'van-button',
          title: 'Button 按钮'
        },
        {
          path: 'van-cell',
          title: 'Cell 单元格'
        },
        {
          path: 'van-dialog',
          title: 'Dialog 对话框'
        },
        {
          path: 'van-toast',
          title: 'Toast 提示'
        },
        {
          path: 'van-tabs',
          title: 'Tab 导航'
        },
        {
          path: 'van-image',
          title: 'Image 图片'
        },
        {
          path: 'van-row',
          title: 'Layout row'
        },
        {
          path: 'van-col',
          title: 'Layout col'
        },
        {
          path: 'van-popup',
          title: 'Popup 弹出层'
        },
        {
          path: 'van-picker',
          title: 'Picker 选择'
        },
        {
          path: 'van-field',
          title: 'Input 输入框'
        },
        {
          path: 'van-checkbox',
          title: 'Checkbox 复选框'
        }
      ].map(x => { x.vant = true; return x })
    },
    {
      title: '业务组件',
      items: [
      ]
    }
  ]
}
