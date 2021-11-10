module.exports = {
  info: {
    title: 'Xm Design',
    desc: 'Vue2 组件库',
    logo: 'https://user-images.githubusercontent.com/9743418/104887549-680c1e80-59a6-11eb-8222-40e1d38a0fe2.png'
  },
  tconModules: ['layout', 'color', 'size', 'text'],
  git: 'https://github.com/shinemofe/xm-design-vue2',
  catelogs: addVantTag([
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
          path: 'van-button',
          title: 'Button 按钮'
        },
        {
          path: 'van-cell',
          title: 'Cell 单元格'
        },
        {
          path: 'van-icon',
          title: 'Icon 图标',
          hide: true
        }
      ]
    },
    {
      title: '展示组件',
      items: [
        {
          path: 'van-row',
          title: 'Layout row'
        },
        {
          path: 'van-col',
          title: 'Layout col'
        },
        {
          path: 'van-image',
          title: 'Image 图片'
        },
        {
          path: 'xm-table',
          title: 'Table 表格'
        },
        {
          path: 'van-badge',
          title: 'Badge 气泡'
        }
      ]
    },
    {
      title: '表单组件',
      items: [
        {
          path: 'van-field',
          title: 'Input 输入框'
        },
        {
          path: 'van-checkbox',
          title: 'Checkbox 复选框'
        },
        {
          path: 'van-radio',
          title: 'Radio 单选'
        },
        {
          path: 'van-switch',
          title: 'Switch 开关'
        },
        {
          path: 'xm-tick',
          title: 'Tick 勾选'
        }
      ]
    },
    {
      title: '交互反馈组件',
      items: [
        {
          path: 'van-loading',
          title: 'Loading 加载'
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
          path: 'van-popup',
          title: 'Popup 弹出层'
        },
        {
          path: 'van-picker',
          title: 'Picker 选择'
        },
        // {
        //   path: 'xm-select',
        //   title: 'Select 选择'
        // },
        {
          path: 'xm-cascade',
          title: 'Cascade 级联'
        }
      ]
    },
    {
      title: '导航组件',
      items: [
        {
          path: 'van-tabs',
          title: 'Tab 导航'
        }
      ]
    }
    // {
    //   title: '通用业务组件',
    //   items: [
    //   ]
    // }
  ])
}

function addVantTag (catelogs) {
  catelogs.forEach(group => {
    group.items.forEach(item => {
      if (item.path.startsWith('van-')) {
        item.vant = true
      }
    })
  })
  return catelogs
}
