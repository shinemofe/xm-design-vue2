import VanLoading from 'vant/es/loading'
import { componentWrap } from '../utils/util'

const render = (h, context) => {
  if (context.props.background !== undefined) {
    delete context.props.background
    context.props.vertical = true
    context.props.color = '#fff'
    const style = {
      backgroundColor: '#000',
      color: '#fff',
      width: '80px',
      padding: '15px 0',
      borderRadius: '10px'
    }
    return (
      <div style={style}>
        <VanLoading {...context} {...context.data} />
      </div>
    )
  }
  return <VanLoading {...context} {...context.data} />
}

export default componentWrap('van-loading', { render }, true)
