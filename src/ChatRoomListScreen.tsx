import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const ChatRoomListScreen = ({ navigation, route }) => {
    const { userId } = route.params;
    const chatRooms = ['General', 'Technology', 'Random', 'Sports', 'Movies']; // Added more chat rooms

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat Rooms</Text>
            <FlatList
                data={chatRooms}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.room}
                        onPress={() => navigation.navigate('ChatRoom', { roomName: item, userId })}
                    >
                        <Text style={styles.roomName}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
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
    room: {
        padding: 15,
        backgroundColor: '#222',
        marginVertical: 5,
        width: '80%',
        borderRadius: 5,
    },
    roomName: {
        color: '#fff',
        fontSize: 18,
    },
});

export default ChatRoomListScreen;
