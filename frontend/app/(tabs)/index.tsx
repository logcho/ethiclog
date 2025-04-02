import { Image, StyleSheet, Platform, SafeAreaView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.center}>
        <Text style={styles.text}>
          Home
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  text: {
    // color: 'white',
    fontSize: 30,
  },
  center: {
    flex: 1,                // Takes up all available space
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
  },
});
