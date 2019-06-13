import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from "react-navigation";

import DrawerNavigator from './DrawerNavigator';
import IndexScreen from '../screens/IndexScreen';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Index: IndexScreen,
      Auth: AuthStack,
      Main: DrawerNavigator,
    },
    {
      initialRouteName: "Index"
    }
  )
);