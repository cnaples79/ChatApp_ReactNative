import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DirectMessageScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Direct Messages</Text>
            {/* Direct message functionality will be implemented here */}
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
    },
});

export default DirectMessageScreen;
