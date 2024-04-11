import {StyleSheet} from 'react-native';
import {createStyles} from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme, scale}: any) =>
  StyleSheet.create({
    bannerImageContainer: {
      marginRight: scale(12),
      borderRadius: 20, overflow: 'hidden',
      width: scale(120),
      height: scale(150),
    },
    bannerImage: {
      width: scale(120),
      height: scale(150),
      borderRadius: scale(8),
    },
    nameContainer: {
      marginTop: scale(8),
    },
    nameText: {
      fontSize: scale(12),
      fontWeight: '600',
      color: theme.palette.textDefault,
    },
    imageContainer: {
      width: scale(120),
      height: scale(150),
    },
    absolute: {
      position: 'absolute',
      width: scale(120),
      height: scale(150),
      borderRadius: scale(8),
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    closedContainer: {
      height: scale(48),
      width: scale(48),
      borderRadius: scale(24),
      overflow: 'hidden',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closedContainerIos: {

    },
    overwlow: {
      overflow: 'hidden',
      height: scale(48),
      width: scale(48),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: scale(24),
      top: scale(51),
      left: scale(36),

    },
    absoluteWhite: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      borderRadius: scale(24),
    },
    releaseText: {
      textTransform: "uppercase",
      fontSize: scale(9),
      fontWeight: '800',
      color: theme.palette.blueIris,
      marginBottom: scale(4)
    }
  }),
);
