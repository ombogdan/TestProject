import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { SignUp } from "screens/auth/sign-up";
import { AuthRoutes } from "./auth.navigator.enums";
import { AuthRoutesParamList } from "./auth.navigator.types";

const Stack = createStackNavigator<AuthRoutesParamList>();

export const AuthNavigator = () => (
    <Stack.Navigator
      initialRouteName={AuthRoutes.SignUp}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
      }}
    >
      <Stack.Screen
        component={SignUp}
        name={AuthRoutes.SignUp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
