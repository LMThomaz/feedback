import { theme } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    position: 'relative',
  },
  image: {
    width: 40,
    height: 40,
  },
  removeIcon: { position: 'absolute', bottom: 0, left: 0 },
});
