import {StyleSheet} from 'react-native';
import {createStyles} from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme, scale}: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.black
    },
    headerContainer: {
      height: scale(50),
      flexDirection: 'row',
      alignItems: "center",
      paddingHorizontal: scale(16),
      justifyContent: "space-between"
    },
    homeText: {
      fontSize: scale(18),
      fontWeight: '700',
      color: theme.palette.textDefault
    },
    giftImg: {
      height: scale(43),
      width: scale(45),
      marginRight: scale(10)
    },
    searchImg: {
      top: scale(3)
    }
  }),
);
