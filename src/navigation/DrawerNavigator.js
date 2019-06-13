import React from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

// import HomeScreen from "../screens/HomeScreen";
// import LinksScreen from "../screens/LinksScreen";
// import SettingsScreen from "../screens/SettingsScreen";
import ProfileScreen from "../screens/ProfileScreen";

import MainTabNavigator from './MainTabNavigator';

// import MenuDrawer from "../components/MenuDrawer";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  // contentComponent: ({ navigation }) => {
  //   return <MenuDrawer navigation={navigation} />;
  // }
  drawerLockMode: 'locked-closed',
};

const DrawerNavigator = createDrawerNavigator(
  {
    Main: {
      screen: MainTabNavigator
    },
    Profile: {
      screen: ProfileScreen
    },
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
