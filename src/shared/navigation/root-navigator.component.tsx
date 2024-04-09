import React from "react";
import {NavigationContainer} from "@react-navigation/native";

import {navigationRef} from "./root-navigator.config";
import {AppUserNavigator} from "./app-user/app-user.navigator";

export const RootNavigator = () => (
    <NavigationContainer ref={navigationRef}>
      <AppUserNavigator/>
    </NavigationContainer>
);
