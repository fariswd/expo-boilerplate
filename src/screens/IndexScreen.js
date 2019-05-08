import React from 'react'
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { connect } from 'react-redux'

@connect(state => ({
  user: state.user,
}))
export default class IndexScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = () => {
    const userToken = this.props.user.isLogin;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => this.props.navigate('Main')}>
          <Text>loading....</Text>
        </TouchableOpacity>
      </View>
    )
  }
}