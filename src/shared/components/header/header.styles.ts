import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";
import { SCREEN_WIDTH } from "constants/index";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
    container: {
      height: scale(50),
      backgroundColor: theme.palette.white,
      width: SCREEN_WIDTH,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 100

      // shadowColor: "#000",
      // shadowOffset: {
      //   width: 0,
      //   height: 3
      // },
      // shadowOpacity: 0.05,
      // shadowRadius: 1
    },
    rightContainer: {
      flexDirection: "row"
    },
    userIcon: {
      height: scale(22),
      width: scale(21),
      marginLeft: scale(30)
    },
    musicIcon: {
      height: scale(25),
      width: scale(25),
      marginRight: scale(25)
    },
    settingsIcon: {
      height: scale(24),
      width: scale(21),
      marginRight: scale(30)
    },
    resetIcon: {
      height: scale(24),
      width: scale(24),
      marginLeft: scale(30)
    }
  })
);
