import { Dimensions } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const TERMS_AND_CONDITIONS_LINK = "https://www.hellowombat.com";
export const PRIVACY_POLICY_LINK = "https://www.hellowombat.com";

export const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
