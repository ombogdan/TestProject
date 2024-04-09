import { StyleSheet } from 'react-native';
import { createStyles } from 'shared/theme/createStyles';

export const useStyles = createStyles(({ theme, color = 'black', size }: any) =>
  StyleSheet.create({
    icon: {
      tintColor: theme.palette[color],
      width: size,
      height: size,
    },
  }),
);
