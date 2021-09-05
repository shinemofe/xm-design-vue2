<template>
  <layout title="XmTable">
    <div class="p10 bg-fff">
      <p class="mb10">默认表格</p>
      <xm-table
        :thead="thead2"
        :data="tableData2"
      />
    </div>
    <div class="p10 bg-fff mt10">
      <p class="mb10">带操作表格</p>
      <xm-table
        :thead="thead2"
        :data="tableData2"
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
        :options-config="optionsConfig2"
        border
      />
    </div>
    <div class="p10 bg-fff mt10">
      <p class="mb10">空数据</p>
      <xm-table
        :thead="thead1"
        :data="[]"
        :options="options"
        :options-config="optionsConfig2"
        border
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
      },
      optionsConfig2: {
        width: 90,
        fixed: true,
        label: '操作啊66'
      },
      thead2: [
        {
          label: '姓名',
          prop: 'name',
          width: 60
        },
        {
          label: '性别',
          prop: 'sex',
          width: 50
        },
        {
          label: '地址',
          prop: 'address'
        }
      ],
      tableData2: [
        {
          name: '阿东',
          sex: '男',
          address: '浙江省杭州市西湖区成华大道'
        },
        {
          name: '飘飘',
          sex: '女',
          address: '浙江省杭州市西湖区二仙桥'
        }
      ]
    }
  },

  created () {
  }
}
</script>
