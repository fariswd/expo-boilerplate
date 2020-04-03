import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux'

import BottomTabNavigator from '../navigation/BottomTabNavigator';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

@connect(state => ({
  user: state.user
}))
export default class AppContainer extends React.Component {
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    const isLogin = this.props.user.isLogin
    return (
      <NavigationContainer
        ref={this.props.containerRef}
        initialState={this.props.initialNavigationState}
      >
        <Stack.Navigator>
          {isLogin
          ? <>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </>
          : <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}