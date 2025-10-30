import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Body, Title } from '../../globalStyles/typography';
import { flexPatterns } from '../../globalStyles/commonStyles';

import { COLORS, TYPOGRAPHY, SPACING } from '../../globalStyles/theme';
import { useTheme } from '../../globalStyles/ThemeContext';

export default function Statistic() {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, flexPatterns.center]}>
      <Title style={styles.title}>STATISTIC</Title>
      <Body style={[styles.text, { marginBottom: SPACING.md }]}>Statistic screen</Body>

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
