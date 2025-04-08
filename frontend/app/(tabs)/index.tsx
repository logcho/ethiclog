import { Image, StyleSheet, Platform, SafeAreaView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.center}>
        <Text style={styles.header}>
          Results
        </Text>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            AI ethics is a critical field addressing fairness, accountability, transparency, and privacy in AI systems. Bias in AI models can lead to discrimination, reinforcing societal inequalities. The use of AI in surveillance and decision-making raises concerns about individual rights and consent. Additionally, job displacement due to automation poses economic and social challenges. Ethical AI development requires regulations, responsible data usage, and human oversight to ensure AI benefits society while minimizing harm. Striking a balance between innovation and ethical considerations is key to AI’s responsible advancement.
          </Text>
        </View>
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
    fontWeight: '200',
    textAlign: 'center'
  },
  center: {
    flex: 1,                // Takes up all available space
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',     // Centers horizontally
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  textWrapper: {
    width: 300,
  }
});
