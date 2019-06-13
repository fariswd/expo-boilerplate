import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import * as UserActions from '../actions/UserActions'

@connect()
export default class SignInScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity onPress={() => {
          this.props.dispatch(UserActions.login())
          this.props.navigation.navigate('Home')
        }}>
          <Text>SignInScreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
