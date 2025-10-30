// globalStyles.ts
import { StyleSheet } from 'react-native';
import { colors, spacing, fontSizes, borderRadius } from './gStyles';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  title: {
    fontSize: fontSizes.lg,
    color: colors.text,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },
  buttonText: {
    color: '#fff',
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
});
