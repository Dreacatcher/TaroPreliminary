import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.less'
@connect(({ home, cart, loading }) => ({
  ...home,
  // ...cart,
  // ...loading,
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { 
    // this.props.dispatch({
    //   type: 'home/load',
    // });
    // this.props.dispatch({
    //   type: 'home/product',
    // });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

