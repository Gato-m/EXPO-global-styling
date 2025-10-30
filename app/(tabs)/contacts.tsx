import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS, FONTSIZES, SPACING } from '../../globalStyles/theme';

export default function Contacts() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>CONTACTS</Text>
        <Link href="/" style={styles.button}>
          Go to Home screen
        </Link>
      </View>
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
    textAlign: 'center',
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
