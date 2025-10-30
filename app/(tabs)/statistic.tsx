import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { COLORS, FONTSIZES, SPACING } from '../../globalStyles/theme';

export default function Statistic() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STATISTIC</Text>
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
    fontSize: FONTSIZES.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
  },
  text: {
    color: COLORS.text,
  },
  button: {
    fontSize: FONTSIZES.lg,
    textDecorationLine: 'underline',
    color: COLORS.primary,
  },
});
