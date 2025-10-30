import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Body, Title } from '../../globalStyles/typography';
import { COLORS, TYPOGRAPHY, SPACING } from '../../globalStyles/theme';

export default function Index() {
  return (
    <View style={styles.container}>
      <Title style={[styles.text, { marginBottom: 30 }]}>Home screen</Title>
      <Body style={[styles.text, { marginBottom: SPACING.md }]}>Statistic screen</Body>

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
    alignItems: 'center',
    justifyContent: 'center',
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
