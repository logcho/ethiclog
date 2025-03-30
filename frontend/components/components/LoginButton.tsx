import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';  // Assuming you have a custom hook for color scheme

const LoginButton = ({ onPress, title }: { onPress: () => void; title: string }) => {

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Text style={[styles.text]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2A9DF4',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '200',      // Makes the text light
  }
});

export default LoginButton;
