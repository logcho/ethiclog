import { Image, StyleSheet, Platform, View, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import React from 'react';

export default function HomeScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.wrapper}>

      <View style={styles.center}>
        <Text style={styles.text}>
          Login
        </Text>
        <TextInput
          style={styles.textBox}
          placeholder="Email"
          placeholderTextColor="gray"  // Placeholder text color
          value={email}
          onChangeText={setEmail}       // Update state when text changes
        />
        <TextInput
          style={styles.textBox}
          placeholder="Password"
          placeholderTextColor="gray"  // Placeholder text color
          value={password}
          onChangeText={setPassword}       // Update state when text changes
          secureTextEntry={true}       // Masks the password text
        />
        <Link href="/(tabs)" style={styles.text}>Login</Link>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  stack: {
    flexDirection: 'column',
  },
  center: {
    flex: 1,                // Takes up all available space
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBox: {
    color: 'white',                // Input text color (blue when typing)
    fontSize: 16,
    borderBottomWidth: 1,         // Only the bottom border
    borderBottomColor: '#ccc',    // Bottom border color (light gray)
    backgroundColor: 'transparent', // Transparent background
    paddingVertical: 8,
    borderWidth: 0,               // Ensure no border on focus or blur
    outlineWidth: 0,              // Remove focus outline
  },
});
