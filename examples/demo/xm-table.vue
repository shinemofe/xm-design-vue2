<template>
  <layout title="XmTable">
    <div class="p10 bg-fff">
      <p class="mb10">默认表格</p>
      <xm-table
        :thead="thead1"
        :data="tableData1"
        :options="options"
        :options-config="optionsConfig"
      />
    </div>
    <div class="p10 bg-fff mt10">
      <p class="mb10">带边框表格</p>
      <xm-table
        :thead="thead1"
        :data="tableData1"
        :options="options"
        :options-config="optionsConfig"
        border
        radius
      />
    </div>
  </layout>
</template>

<script>
import Layout from '../Layout'

export default {
  name: 'demo-xm-table',

  components: {
    Layout
  },

  data () {
    return {
      thead1: [
        {
          label: '序号',
          prop: 'index',
          width: 50
        },
        {
          label: '字段',
          prop: 'field',
          width: 150
        },
        {
          label: '字段2',
          prop: 'field2',
          width: 150
        },
        {
          label: '字段3',
          prop: 'field3',
          width: 150,
          fixed: false
        }
      ],
      tableData1: [
        {
          index: 1,
          field: '值',
          field2: '值',
          field3: '值'
        },
        {
          index: 2,
          field: '值',
          field2: '值',
          field3: '值'
        }
      ],
      options: [
        {
          label: '查看',
          color: 'red',
          action: (item, i) => {
            console.log('index', item.index, '索引', i)
          }
        }
      ],
      optionsConfig: {
        width: 100,
        fixed: true,
        label: '操作啊',
        maxRows: 1,
        maxOverText: ['展开更多', '收起']
      }
    }
  },

  created () {
  }
}
</script>
