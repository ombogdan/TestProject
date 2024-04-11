import {Dimensions, StyleSheet} from 'react-native';
import {createStyles} from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme, scale, insets}: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.black,
    },
    headerContainer: {
      position: "absolute",
      height: scale(48),
      flexDirection: 'row',
      alignItems: "center",
      paddingHorizontal: scale(16),
      justifyContent: "space-between",
      zIndex: 100,
      top: insets.top,
      width: '100%'
    },
    bottomContainer: {
      position: "absolute",
      height: scale(81),
      flexDirection: 'row',
      alignItems: "center",
      paddingHorizontal: scale(16),
      zIndex: 100,
      bottom: insets.bottom,
      width: '100%'
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
    closeButton: {
      width: scale(40),
    },
    centerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    centerText: {
      textAlign: 'center',
      fontSize: scale(18),
      fontWeight: '700',
      color: theme.palette.textDefault
    },
    videoContainer: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    video: {
      width: '100%',
      height: '100%',
    },
    thumbStyle: {
      backgroundColor: theme.palette.textDefault,
      height: scale(9),
      width: scale(9),
    },
    trackStyle: {
      width: scale(292),
    },
    loaderContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
  }),
);
