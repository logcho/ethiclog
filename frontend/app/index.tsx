import { Image, StyleSheet, Platform, View, Text, TextInput, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import React from 'react';

import LoginButton from '@/components/components/LoginButton';
import SignUpButton from '@/components/components/SignUpButton';
import Divider from '@/components/components/Divider';
import Ionicons from '@expo/vector-icons/Ionicons';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig'; // Adjust path if needed

export default function HomeScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;
      console.log('Logged in:', user.email);
      router.push('/(tabs)');
    } catch (error: any) {
      console.error('Login error:', error.message);
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.center}>
        <View style={styles.landing}>
          <Text style={styles.header}>Login</Text>

          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.textBox}
              placeholder="Email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.textBox}
              placeholder="Password"
              placeholderTextColor="gray"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.forgotWrapper}>
            <Link href="/forgot" style={styles.forgot}>
              <Text>Forgot Password?</Text>
            </Link>
          </View>

          <LoginButton title="Login" onPress={handleLogin} />

          <Divider />

          <SignUpButton
            title="Sign Up"
            onPress={() => {
              router.push('/signup');
            }}
          />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  landing: {
    height: 800,
    width: 300,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textBox: {
    fontWeight: '200',
    marginVertical: 10,
    fontSize: 20,
    backgroundColor: 'transparent',
    paddingVertical: 8,
    borderWidth: 0,
    outlineWidth: 0,
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  icon: {
    marginHorizontal: 10,
  },
  forgotWrapper: {
    marginTop: 20,
  },
  forgot: {
    color: '#2A9DF4',
    textAlign: 'right',
  },
});
