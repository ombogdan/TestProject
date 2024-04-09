import {StyleSheet} from 'react-native';
import {createStyles} from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme, scale}: any) =>
  StyleSheet.create({
    bannerImageContainer: {
      marginRight: scale(12),
    },
    bannerImage: {
      width: scale(120),
      height: scale(150),
      borderRadius: scale(8),
    },
    nameContainer: {
      marginTop: scale(8)
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
    },
    closedContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    absoluteWhite: {
      position: "absolute",
      height: scale(48),
      width: scale(48),
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
