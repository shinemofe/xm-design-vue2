import { componentWrap } from '../utils/util'
import Popup from '../van-popup'
import Picker from '../van-picker'

const icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAACSkraAn5+fn5+fn5+OnJyUoaGZmaaSm6SVlZ6UnKWYnKWVmqOWm6SVm6OWm6OTnKSXnKOTnaSVnKSTnKOUnKWUnKOUm6SUm6WUnKWUm6SUmqSUm6SUm6SJN3zoAAAAHXRSTlMABwgIEBITFBwdPj5bXF5mamxtiYufoMrKy+jp+mB6leEAAABnSURBVBgZzcHZDoIwAEXBw6ZsiiA7vf//m5KGIKU8G2f4U3H59DxuQKULLyAY5BkCVumskznFyo0cJmdTy1Gz63TQ8RWO2o0hB9mizZLhKIwsU3DSyGrw9Fr1+KJJmiIu3N9twk99AP4NEop5S/esAAAAAElFTkSuQmCC'

export default componentWrap('xm-select', {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    list: {
      type: Array,
      default: () => ([])
    },
    value: {
      type: Number,
      default: 0
    },
    native: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      showPopup: false
    }
  },

  methods: {
    handleConfirm (data) {
      this.showPopup = false
      this.$emit('input', this.list.findIndex(x => x === data))
    },

    handleCancel () {
      this.showPopup = false
    },

    handleShowPopup () {
      if (this.native) {
        if (window.xm) {
          window.xm.showActionSheet({
            title: this.title || '请选择',
            itemList: this.list.map(x => ({ text: x, value: x }))
          }).then(item => {
            const it = this.list.findIndex(x => x.label === item.text)
            this.$emit('input', it)
          })
        } else {
          console.log('%c xm 不存在', 'background:red;color:#fff')
        }
      } else {
        this.showPopup = true
      }
    }
  },

  render (h) {
    return (
      <div>
        <div class="xm-select" onClick={this.handleShowPopup}>
          <span class="xm-select__text">{this.list[this.value]}</span>
          <img src={icon} width="12px" height="12px"/>
        </div>
        <Popup
          v-model={this.showPopup}
          position="bottom"
          style={{ height: '40%' }}
          round
        >
          <Picker
            title={this.title}
            show-toolbar
            default-index={this.value}
            columns={this.list}
            onConfirm={this.handleConfirm}
            onCancel={this.handleCancel}
          />
        </Popup>
      </div>
    )
  }
})
