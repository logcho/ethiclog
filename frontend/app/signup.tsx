import { Image, StyleSheet, Platform, View, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import React from 'react';

import LoginButton from '@/components/components/LoginButton';
import SignUpButton from '@/components/components/SignUpButton';
import Divider from '@/components/components/Divider'

export default function HomeScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');
  const router = useRouter(); // Hook to get the router

  return (
    <SafeAreaView style={styles.wrapper}>

      <View style={styles.center}>
        <View style={styles.landing}>
          <Text style={styles.header}>
            Sign Up
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
          <TextInput
            style={styles.textBox}
            placeholder="Verify Password"
            placeholderTextColor="gray"  // Placeholder text color
            value={passwordCheck}
            onChangeText={setPasswordCheck}       // Update state when text changes
            secureTextEntry={true}       // Masks the password text
          />
          
          <LoginButton title='Sign Up' onPress={() => {
                router.push('/(tabs)');  // Navigate to the login page
          }} />

          <Divider />

          <SignUpButton title='Back' onPress={() => {
                router.push('/');  // Navigate to the login page
          }} />

        </View>
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
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  landing: {
    height: 800,
    width: 400,
    justifyContent: 'center', // Centers vertically
  },
  text: {
    // color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBox: {
    // color: 'white',                // Input text color (blue when typing)
    fontWeight: '200',      // Makes the text light
    marginVertical: 10,
    fontSize: 20,
    borderBottomWidth: 1,         // Only the bottom border
    borderBottomColor: '#ccc',    // Bottom border color (light gray)
    backgroundColor: 'transparent', // Transparent background
    paddingVertical: 8,
    borderWidth: 0,               // Ensure no border on focus or blur
    outlineWidth: 0,              // Remove focus outline
  },
});
