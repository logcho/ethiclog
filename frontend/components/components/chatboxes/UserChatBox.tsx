import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UserChatBox({ text }: { text: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.chatText}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A9DF4",           // ChatGPT-like green color
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        maxWidth: "75%",                      // Prevents bubble from being too wide
        alignSelf: "flex-end",                // Aligns user's message to the right
        marginVertical: 5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,                         // For Android shadow
    },
    chatText: {
        color: "white",
        fontSize: 16,
        lineHeight: 22,                       // Spacing between lines
    }
});
