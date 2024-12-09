import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatRoomScreen = ({ route }) => {
    const { roomName, userId } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{roomName} Chat Room</Text>
            <Text style={styles.userId}>User ID: {userId}</Text>
            {/* Chat messages will be displayed here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    title: {
        color: '#00f',
        fontSize: 24,
        marginBottom: 20,
    },
    userId: {
        color: '#fff',
        fontSize: 18,
    },
});

export default ChatRoomScreen;
