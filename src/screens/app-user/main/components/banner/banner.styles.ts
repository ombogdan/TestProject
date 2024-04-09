import {StyleSheet} from 'react-native';
import {createStyles} from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme, scale}: any) =>
  StyleSheet.create({
    bannerImageContainer: {
      marginRight: scale(12),
    },
    bannerImage: {
      width: scale(328),
      height: scale(216),
      borderRadius: scale(12)
    },
    genreContainer: {
      position: "absolute",
      height: scale(24),
      paddingHorizontal: scale(6),
      justifyContent: 'center',
      top: scale(8),
      left: scale(16),
      borderRadius: scale(4),
      backgroundColor: theme.palette.black,
    },
    genre: {
      fontSize: scale(9),
      fontWeight: '700',
      color: theme.palette.textDefault,
      textTransform: 'uppercase'
    },
    nameContainer: {
      position: 'absolute',
      top: scale(152),
      left: scale(15),
    },
    nameText: {
      fontSize: scale(22),
      fontWeight: '700',
      color: theme.palette.textDefault,
    },
    authorText: {
      fontSize: scale(11),
      fontWeight: '400',
      color: theme.palette.textDefault,
      paddingTop: scale(4)
    }
  }),
);
