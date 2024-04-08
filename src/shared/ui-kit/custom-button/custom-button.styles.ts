import { StyleSheet } from "react-native";
import { createStyles } from "shared/theme/createStyles";

export const useStyles = createStyles(({ theme, scale }: any) =>
  StyleSheet.create({
    buttonContainer: {
      borderRadius: scale(40),
      justifyContent: "center",
      alignItems: "center",
      height: scale(52),
      backgroundColor: theme.palette.blueIris
    },
    buttonBox: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: '100%',
      width: '100%'
    },
    btnText: {
      color: theme.palette.white,
      fontWeight: "700",
      fontSize: scale(15),
      lineHeight: scale(18)
    },
    lottieAnim:{
      height: scale(70),
      width: scale(70),
    },
    btnTextBlack:{
      color: theme.palette.textDefault,
      fontWeight: "700",
      fontSize: scale(14),
      lineHeight: scale(17)
    },
    rightArrowIcon:{
      height: scale(10),
      width: scale(10),
    },
    mainContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: scale(15),
    }
  })
);
