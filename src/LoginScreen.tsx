import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const handleLogin = () => {
        // Generate random anonymous ID and navigate to chat room list
        const randomId = Math.random().toString(36).substring(2, 15);
        navigation.navigate('ChatRoomList', { userId: randomId });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Chat App</Text>
            <Button title="Login Anonymously" onPress={handleLogin} />
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
});

export default LoginScreen;
