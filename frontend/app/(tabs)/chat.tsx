import { StyleSheet, Image, Platform, View, Text, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

import ChatView from '@/components/components/ChatView';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ChatView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  text: {
    // color: 'white',
    fontSize: 30,
  },
});
