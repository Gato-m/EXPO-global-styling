import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Title, Body } from '../../globalStyles/typography';

import { COLORS, TYPOGRAPHY, SPACING } from '../../globalStyles/theme';

export default function Admin() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>ADMIN</Title>
      <Body style={[styles.text, { marginBottom: SPACING.md }]}>Admin screen</Body>
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
