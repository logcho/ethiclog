import React, { useState, useRef, useEffect } from "react";
import { KeyboardAvoidingView, ScrollView, Platform, StyleSheet, ActivityIndicator, View } from "react-native";
import UserChatBox from "./chatboxes/UserChatBox";
import MessageChatBox from "./chatboxes/MessageChatBox";
import InputBar from "./InputBar";
import OpenAI from "openai";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./Button";
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
    const [argumentType, setArgumentType] = useState<'for' | 'against' | 'neutral'>('neutral');


    const fetchBotResponse = async (message: string) => {
        try {
            setLoading(true);
            const response = await client.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: `What is your stance on the ethics of this statement? Argue in a ${argumentType} manner. Keep your response concise, no more than 2 sentences.`},
                    { role: "user", content: message }
                ],
                max_tokens: 60,
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

    const getBorderColor = () => {
        switch (argumentType) {
            case 'for':
                return '#2AAF4F';
            case 'against':
                return '#F42A2A';
            case 'neutral':
                return '#2A9DF4';
        }
    };

    return (
        <SafeAreaView style={styles.wrapper}>
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
                <View 
                    style={[
                        styles.buttonContainer, 
                        { borderColor: getBorderColor(), borderWidth: 2, borderRadius: 10 }
                    ]}
                >
                    <Button title="For" onPress={() => setArgumentType('for')} />
                    <Button title="Against" onPress={() => setArgumentType('against')} />
                    <Button title="Neutral" onPress={() => setArgumentType('neutral')} />
                </View>
                <InputBar handleSend={handleSend} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    chatContainer: {
        padding: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "transparent", // Explicitly set transparency

        // marginBottom: 10,
        // paddingVertical: 10,
        // backgroundColor: '#fff',
    },
});
