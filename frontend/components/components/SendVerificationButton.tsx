import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';  // Assuming you have a custom hook for color scheme
import Ionicons from '@expo/vector-icons/Ionicons';

const SendVerificationButton = ({ onPress, title }: { onPress: () => void; title: string }) => {

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
        <View style={styles.wrapper}>
            <Ionicons name="key-outline" size={20} color="gray" style={styles.icon} /> {/* Lock Icon */}
            <Text style={[styles.text]}>{title}</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#565656',
    fontSize: 20,
    fontWeight: '200',      // Makes the text light
  },
  icon: {
    marginHorizontal: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SendVerificationButton;
