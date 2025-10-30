import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Title, Body } from '../../globalStyles/typography';
import { flexPatterns } from '../../globalStyles/commonStyles';

import { COLORS, TYPOGRAPHY, SPACING } from '../../globalStyles/theme';
import { useTheme } from '../../globalStyles/ThemeContext';

export default function Personal() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, flexPatterns.center]}>
      <Title style={styles.title}>DARBINIEKI</Title>
      <Body style={[styles.text, { marginBottom: SPACING.md }]}>Personal screen</Body>

      <Link href="/" style={styles.button}>
        Go to Home screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  text: {
    color: COLORS.text,
  },
  button: {
    fontSize: TYPOGRAPHY.lg,
    textDecorationLine: 'underline',
    color: COLORS.primary,
  },
});
