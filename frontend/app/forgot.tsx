import { Alert, Image, StyleSheet, Platform, View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import React from 'react';

import SendVerificationButton from '@/components/components/SendVerificationButton';
import Ionicons from '@expo/vector-icons/Ionicons';

// Firebase
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { app } from '@/firebaseConfig'; // adjust the path if needed

export default function ForgotScreen() {
  const [email, setEmail] = React.useState('');
  const router = useRouter();

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Missing Email', 'Please enter your email address.');
      return;
    }

    const auth = getAuth(app);

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Email Sent', 'Please check your inbox for password reset instructions.');
      router.push('/');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.center}>
        <View style={styles.landing}>
          <Text style={styles.header}>Forgot Password</Text>

          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.textBox}
              placeholder="Email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <SendVerificationButton title='Send Reset Instructions' onPress={handlePasswordReset} />

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
