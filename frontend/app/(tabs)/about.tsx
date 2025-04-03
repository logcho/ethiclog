import { Image, StyleSheet, Platform, SafeAreaView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/components/Button';
import { router } from 'expo-router';
export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.center}>
        <Text style={styles.header}>
          About
        </Text>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            We aim to determine the general consensus of the morality of AI through our  application.
          </Text>
        </View>
        
        <Button title='Take a Poll' onPress={() => {
          router.push('/(tabs)/poll');  // Navigate to the login page
        }}/>

        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            Our mobile application  answers questions about the morality and ethics of AI using AI.
          </Text>
        </View>

        
        <Button title='Chat' onPress={() => {
          router.push('/(tabs)/chat');  // Navigate to the login page
        }}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,                // Takes up all available space
    padding: 10,
  },
  text: {
    // color: 'white',
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'center',
  },
  center: {
    flex: 1,                // Takes up all available space
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
    marginTop: -40
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    // paddingBottom: 10,
  },
  textWrapper: {
    width: 300,
    marginVertical: 20,
  }
});
