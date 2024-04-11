import {StyleSheet} from 'react-native';
import {createStyles} from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme, scale}: any) =>
  StyleSheet.create({
    continueWatching: {
      fontSize: scale(18),
      fontWeight: '700',
      color: theme.palette.textDefault
    },
    continueWatchingContainer: {
      marginTop: scale(16),
      flex: 1,
      height: scale(68),
      backgroundColor: theme.palette.blue,
      borderRadius: scale(12),
      padding: scale(6),
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: 'center',
      marginRight: scale(16)
    },
    continueWatchingImg: {
      width: scale(44),
      height: scale(56),
      borderRadius: scale(8)
    },
    serialName: {
      fontSize: scale(14),
      fontWeight: '700',
      color: theme.palette.textDefault,
    },
    authorName: {
      paddingTop: scale(4),
      fontSize: scale(12),
      fontWeight: '400',
      color: theme.palette.textDefault,
    }
  }),
);
