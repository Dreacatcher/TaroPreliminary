import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import './index.less'
@connect(({ user }) => ({
  ...user
}))
export default class User extends Component {

  config = {
    navigationBarTitleText: 'useruseruseruser'
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
        <Text>user user!</Text>
      </View>
    )
  }
}

