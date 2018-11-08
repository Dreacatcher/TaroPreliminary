import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.less'
@connect(({ cart}) => ({
  ...cart,
}))
export default class Cart extends Component {

  config = {
    navigationBarTitleText: 'useruseruser'
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
        <Text>cart cart!</Text>
      </View>
    )
  }
}

