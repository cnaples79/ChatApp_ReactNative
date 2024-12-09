import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';

const ChatRoomScreen = ({ route }) => {
    const { roomName, userId } = route.params;
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    const sendMessage = () => {
        if (messageInput.trim()) {
            const newMessage = {
                id: Math.random().toString(),
                text: messageInput,
                userId: userId,
            };
            setMessages((prevMessages) => [...prevMessages, newMessage]);
            setMessageInput('');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{roomName} Chat Room</Text>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.messageContainer}>
                        <Text style={styles.messageText}>{item.userId}: {item.text}</Text>
                    </View>
                )}
                inverted
            />
            <TextInput
                style={styles.input}
                value={messageInput}
                onChangeText={setMessageInput}
                placeholder="Type a message..."
                placeholderTextColor="#888"
            />
            <Button title="Send" onPress={sendMessage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#000',
        padding: 10,
    },
    title: {
        color: '#00f',
        fontSize: 24,
        marginBottom: 10,
    },
    messageContainer: {
        marginVertical: 5,
    },
    messageText: {
        color: '#fff',
        fontSize: 16,
    },
    input: {
        height: 40,
        borderColor: '#00f',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#fff',
    },
});

export default ChatRoomScreen;
