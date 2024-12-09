import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import ChatRoomListScreen from './src/ChatRoomListScreen';
import ChatRoomScreen from './src/ChatRoomScreen';
import DirectMessageScreen from './src/DirectMessageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ChatRoomList" component={ChatRoomListScreen} />
                <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
                <Stack.Screen name="DirectMessage" component={DirectMessageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
