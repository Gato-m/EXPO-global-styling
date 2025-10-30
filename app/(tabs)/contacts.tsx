import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Contacts() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 30 }]}>contacts</Text>
      <Link href="/" style={styles.button}>
        Go to Home screen
      </Link>
    </View>
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
