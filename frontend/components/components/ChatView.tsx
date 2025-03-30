import React, { useState } from "react";
import { View, TextInput, KeyboardAvoidingView, ScrollView, Platform, StyleSheet, Button } from "react-native";
import UserChatBox from "./chatboxes/UserChatBox";
import InputBar from "./InputBar";
export default function ChatView() {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    const handleSend = (message: string) => {
        if (message.trim()) {
            setMessages((prev) => [...prev, message]);
        }
    };
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.chatContainer}>
                {messages.map((msg, index) => (
                    <UserChatBox key={index} text={msg} />
                ))}
            </ScrollView>

            {/* Input Bar */}
            <InputBar handleSend={handleSend} />
            </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        marginBottom: 48,
    },
    chatContainer: {
        padding: 10,
    },
});
