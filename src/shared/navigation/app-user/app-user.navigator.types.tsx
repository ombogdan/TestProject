import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

import {Banner} from "shared/types";
import {AppUserRoutes} from './app-user.navigator.enums';

export type AppUserRoutesParamList = {
  [AppUserRoutes.Home]: {} | undefined;
  [AppUserRoutes.VideoPlayer]: { serial: Banner };
};

export type AppUserRoutesNavigationProps =
  StackNavigationProp<AppUserRoutesParamList>;

export type AppUserRouteProps<RouteName extends keyof AppUserRoutesParamList> =
  RouteProp<AppUserRoutesParamList, RouteName>;
