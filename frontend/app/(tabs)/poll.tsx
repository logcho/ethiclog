import { Image, StyleSheet, Platform, SafeAreaView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/components/Button';
import Divider from '@/components/components/Divider';
import { router } from 'expo-router';
export default function PollScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.center}>
        <Text style={styles.header}>
          Poll
        </Text>
        <View style={styles.question}>
          <Text style={styles.text}>
            How do you feel about AI?
          </Text>
        </View>
        <Button title='For' onPress={() => {}}/>
        <Button title='Neutral' onPress={() => {}}/>
        <Button title='Against' onPress={() => {}}/>
        <View style={styles.divider}>
          <Divider />
        </View>
        <Button title='Chat' onPress={() => {
          router.push('/(tabs)/chat');  // Navigate to the login page
        }}/>
        <Text style={styles.learnMore}>
          To Explore Options
        </Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  center: {
    flex: 1,                // Takes up all available space
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
    marginTop: -40,
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  question: {
    width: 300,
    marginBottom: 20,
  },
  divider: {
    margin: 20,
  },
  learnMore: {
    fontWeight: '200',      // Makes the text light
  }
});
