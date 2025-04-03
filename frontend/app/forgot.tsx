import { Image, StyleSheet, Platform, View, Text, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import React from 'react';

import SendVerificationButton from '@/components/components/SendVerificationButton';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ForgotScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPasswordCheck] = React.useState('');
  const router = useRouter(); // Hook to get the router

  return (
    <SafeAreaView style={styles.wrapper}>

      <View style={styles.center}>
        <View style={styles.landing}>
          <Text style={styles.header}>
            Forgot Password
          </Text>


          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} /> {/* Email Icon */}
            <TextInput
              style={styles.textBox}
              placeholder="Email"
              placeholderTextColor="gray"  // Placeholder text color
              value={email}
              onChangeText={setEmail}       // Update state when text changes
            />
          </View>

          <SendVerificationButton title='Send Reset Instructions' onPress={() => {
                router.push('/');  // Navigate to the login page
          }} />
          <View style={styles.backWrapper}>
            <Link href='/' style={styles.back}>
              <Text>Return to sign in</Text>
            </Link>
          </View>

        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
    width: 300,
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
    // borderBottomWidth: 1,         // Only the bottom border
    // borderBottomColor: '#ccc',    // Bottom border color (light gray)
    backgroundColor: 'transparent', // Transparent background
    paddingVertical: 8,
    borderWidth: 0,               // Ensure no border on focus or blur
    outlineWidth: 0,              // Remove focus outline
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,         // Only the bottom border
    borderBottomColor: '#ccc',    // Bottom border color (light gray)
    marginBottom: 10,
  },
  backWrapper: {
    // marginTop: 10,
  },
  back: {
    color: '#2A9DF4',
    // textAlign: 'right',
  },
  icon: {
    marginHorizontal: 10,
  },
});
