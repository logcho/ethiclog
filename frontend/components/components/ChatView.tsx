import React, { useState, useRef, useEffect } from "react";
import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, ActivityIndicator } from "react-native";
import UserChatBox from "./chatboxes/UserChatBox";
import MessageChatBox from "./chatboxes/MessageChatBox";
import InputBar from "./InputBar";
import OpenAI from "openai";

const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
// console.log(apiKey)

const client = new OpenAI({
    apiKey: apiKey, // Replace with your API key
    dangerouslyAllowBrowser: true, // Required for running in React Native
});

export default function ChatView() {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
    const [loading, setLoading] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);

    const fetchBotResponse = async (message: string) => {
        try {
            setLoading(true);
            const response = await client.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: "Keep responses short and concise, no more than one sentence." },
                    { role: "user", content: message }
                ],
                max_tokens: 30,
            });

            return response.choices[0]?.message?.content || "I couldn't process that.";
        } catch (error) {
            console.error("Error fetching bot response:", error);
            return "I'm having trouble responding right now.";
        } finally {
            setLoading(false);
        }
    };

    const handleSend = async (message: string) => {
        if (message.trim()) {
            setMessages((prev) => [...prev, { text: message, isUser: true }]);

            const botReply = await fetchBotResponse(message);
            setMessages((prev) => [...prev, { text: botReply, isUser: false }]);
        }
    };

    // Scroll to bottom when messages update
    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView 
                contentContainerStyle={styles.chatContainer} 
                ref={scrollViewRef} 
                keyboardShouldPersistTaps="handled"
            >
                {messages.map((msg, index) =>
                    msg.isUser ? (
                        <UserChatBox key={index} text={msg.text} />
                    ) : (
                        <MessageChatBox key={index} text={msg.text} />
                    )
                )}
                {loading && <ActivityIndicator size="small" color="#2A9DF4" />}
            </ScrollView>

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
