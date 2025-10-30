import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Body, Title } from '../../globalStyles/typography';
import { COLORS, TYPOGRAPHY, SPACING } from '../../globalStyles/theme';
import { flexPatterns } from '../../globalStyles/commonStyles';

export default function Index() {
  return (
    <View style={[styles.container, flexPatterns.center]}>
      <Title style={styles.title}>HOME SCREEN</Title>
      <Body style={[styles.text, { marginBottom: SPACING.md }]}>Home screen</Body>

      <Link href="/personal" style={styles.button}>
        Go to Contacts screen
      </Link>
      <Link href="/statistic" style={styles.button}>
        Go to Statistic screen
      </Link>
      <Link href="/admin" style={styles.button}>
        Go to Admin screen
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
