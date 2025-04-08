import { Image, StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Button from '@/components/components/Button';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.center}>
          <Text style={styles.header}>About</Text>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              We aim to determine the general consensus of the morality of AI through our application.
            </Text>
          </View>

          <Button title="Take a Poll" onPress={() => router.push('/(tabs)/poll')} />

          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Our mobile application answers questions about the morality and ethics of AI using AI.
            </Text>
          </View>

          <Button title="Chat" onPress={() => router.push('/(tabs)/chat')} />
        </View>

        {/* Profile Section at the Bottom */}
        <View style={styles.imageWrapper}>
          <Text style={styles.text}>Built by Logan Choi</Text>
          <Image source={require('@/assets/images/Picture1.jpg')} style={styles.profileImage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,  // Ensures scrolling works as expected
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  textWrapper: {
    width: 300,
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes it circular
  },
  imageWrapper: {
    alignItems: 'center',
    marginBottom: 50, // Prevents image from being cut off
  },
});
