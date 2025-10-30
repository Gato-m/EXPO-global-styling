import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemeProvider } from '../../globalStyles/ThemeContext';

export default function Index() {
  return (
    <ThemeProvider>
      <View style={styles.container}>
        <Text style={[styles.text, { marginBottom: 30 }]}>Home screen</Text>
        <Link href="/contacts" style={styles.button}>
          Go to Contacts screen
        </Link>
        <Link href="/statistic" style={styles.button}>
          Go to Statistic screen
        </Link>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
