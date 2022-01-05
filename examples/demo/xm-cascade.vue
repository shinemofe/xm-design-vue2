<template>
  <layout title="XmCascade">
    <p class="plr15 ptb10 c-666">传入完整数据选择</p>
    <xm-cascade v-model="select" :list="list" :prop="{ label: 'name', value: 'code' }" />
    <div class="p15 mb20">数据：{{ select }}</div>

    <p class="plr15 ptb10 c-666">配合 Popup 使用</p>
    <van-cell
      title="选择地区"
      is-link
      @click="showPopup = true"
    >
      <span>请选择</span>
    </van-cell>
    <van-popup
      v-model="showPopup"
      position="bottom"
      round
    >
      <xm-cascade
        v-model="select4"
        :list="list"
        style="height: 300px"
        :prop="{ label: 'name', value: 'code' }"
        @input="showPopup = false"
      />
    </van-popup>
    <div class="p15 mb20">数据：{{ select4 }}</div>

    <p class="plr15 ptb10 c-666">从接口动态获取数据</p>
    <xm-cascade v-model="select2" :loadFun="loadFun" />
    <div class="p15 mb20">数据：{{ select2 }}</div>

    <p class="plr15 ptb10 c-666">选择多个</p>
    <xm-cascade v-model="select3" :list="list" multiple />
    <div class="p15 mb20">数据：{{ select3 }}</div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-xm-cascade',

  components: {
    Layout
  },

  data () {
    return {
      select: [],
      select2: [],
      select3: [],
      select4: [],
      showPopup: false,
      list: [
        {
          code: 1,
          name: '湖北',
          children: [
            {
              code: 11,
              name: '武汉',
              children: [
                {
                  code: 111,
                  name: '江汉区'
                }
              ]
            }
          ]
        },
        {
          code: 2,
          name: '浙江',
          children: [
            {
              code: 21,
              name: '杭州',
              children: [
                {
                  code: 211,
                  name: '西湖区',
                  children: [
                    {
                      code: 2111,
                      name: '蒋村街道'
                    }
                  ]
                },
                {
                  code: 212,
                  name: '余杭区'
                }
              ]
            },
            {
              code: 22,
              name: '湖州'
            },
            {
              code: 23,
              name: '嘉兴'
            }
          ]
        },
        {
          code: 3,
          name: '1名称很长很长很长很长很长',
          children: [
            {
              code: 31,
              name: '2名称很长很长很长很长很长',
              children: [
                {
                  code: 311,
                  name: '3名称很长很长很长很长很长',
                  children: [
                    {
                      code: 3111,
                      name: '4名称很长很长很长很长很长',
                      children: [
                        {
                          code: 31111,
                          name: '5名称很长很长很长很长很长'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },

  created () {
  },

  methods: {
    async loadFun (parent, level) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (level !== 0) {
            const item = this.deepFind(this.list, it => it.id === parent.id)
            resolve(item.children || [])
          } else {
            resolve(this.list)
          }
        }, 1000)
      })
    },

    deepFind (arr, cb) {
      for (const item of arr) {
        if (item.children) {
          const res = this.deepFind(item.children, cb)
          if (res) {
            return res
          }
        }
        if (cb(item)) {
          return item
        }
      }
    }
  }
}
</script>
