import { StyleSheet } from 'react-native';
import { createStyles } from 'shared/theme/createStyles';

export const useStyles = createStyles(({theme}: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.white
    },
    chatContainer:{
      flex: 1,
      backgroundColor: theme.palette.transparentGray,
    },
    btn:{
      zIndex: 100
    }
  }),
);
