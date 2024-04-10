import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Main } from "screens/app-user/main";
import {VideoPlayer} from "screens/app-user/video-player";
import {AppUserRoutes } from "./app-user.navigator.enums";
import { AppUserRoutesParamList } from "./app-user.navigator.types";

const Stack = createStackNavigator<AppUserRoutesParamList>();

export const AppUserNavigator = () => (
  <Stack.Navigator
    initialRouteName={AppUserRoutes.Home}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen
      component={Main}
      name={AppUserRoutes.Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={VideoPlayer}
      name={AppUserRoutes.VideoPlayer}
      options={{ headerShown: false, gestureEnabled: false }}
    />
  </Stack.Navigator>
);
