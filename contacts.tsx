import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { COLORS, TYPOGRAPHY, SPACING } from '../../globalStyles/theme';
import { Title } from '../../globalStyles/typography';

export default function Contacts() {
  return (
    <View style={styles.container}>
      <View>
        <Title style={styles.title}>CONTACTS</Title>
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
    fontSize: TYPOGRAPHY.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.md,
    textAlign: 'center',
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
