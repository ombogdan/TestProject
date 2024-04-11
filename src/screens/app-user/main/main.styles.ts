import {StyleSheet} from 'react-native';
import {createStyles} from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme, scale}: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.black,
    },
    headerContainer: {
      height: scale(48),
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
    },
    bannerContainer: {
      height: 400,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bannerText: {
      position: 'absolute',
      bottom: 10,
      left: 10,
      color: 'white',
      fontSize: 24,
    },
    bannerSubText: {
      position: 'absolute',
      bottom: 5,
      left: 10,
      color: 'white',
      fontSize: 16,
    },
    renderContainer: {
      paddingLeft: scale(16),
    },
    trendingNowHeader: {
      fontSize: scale(18),
      fontWeight: '700',
      color: theme.palette.textDefault,
    },
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
