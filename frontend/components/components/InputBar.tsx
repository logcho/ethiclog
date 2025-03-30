import React, { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InputBar({ handleSend }: { handleSend: (message: string) => void }) {
    const [input, setInput] = useState<string>("");

    const onSendPress = () => {
        if (input.trim()) {
            handleSend(input);
            setInput(""); // Clear the input after sending
        }
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Send message"
                placeholderTextColor="gray"
                multiline={true}                   // Enables vertical stacking
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity onPress={onSendPress}>
                <Ionicons name="send" size={24} color="#2A9DF4" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#d1d1d1",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // For Android shadow
        marginBottom: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        outlineWidth: 0,              // Remove focus outline
    },
    icon: {
        marginLeft: 10,
    }
});
