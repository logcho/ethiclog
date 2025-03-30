import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';  // Assuming you have a custom hook for color scheme

const Divider = () => {

  return (
        <View style={styles.dividerContainer}>
            <View style={styles.dividerLine}></View>
            <Text style={styles.dividerText}>Or</Text>
            <View style={styles.dividerLine}></View>
        </View>
  );
};

const styles = StyleSheet.create({
    dividerContainer: {
        flexDirection: 'row',  // Aligns the line and text in a row
        alignItems: 'center',  // Centers the text vertically
        width: '100%',         // Make sure it spans across the full width
        marginVertical: 10,    // Adds space above and below the divider
    },
    dividerLine: {
        flex: 1,                 // Makes the lines take up equal space
        borderBottomWidth: 1,    // Line thickness
        borderBottomColor: '#565656', // Line color (light gray)
    },
    dividerText: {
        marginHorizontal: 10,    // Adds space between the text and the lines
        color: '#565656',          // Text color (you can adjust this)
        fontWeight: '200',      // Makes the text light
        fontSize: 18,            // Text size
    },
});

export default Divider;
