# Chat App

## Overview
This is a simple chat application built using React Native and Expo. The app allows users to join chat rooms, send messages anonymously, and interact with other users in real-time. The UI is designed with a black and blue theme to provide a modern and sleek appearance.

## Features
- **Anonymous Login**: Users can log in anonymously and receive a unique user ID each time.
- **Multiple Chat Rooms**: Users can join various chat rooms such as General, Technology, Random, Sports, and Movies.
- **Direct Messaging**: Users can send messages in chat rooms.
- **Responsive Design**: The app is built to work on both web and mobile platforms.

## Project Structure
The project consists of several key files and directories:

### 1. `App.tsx`
- This is the main entry point of the application. It sets up the navigation between different screens using React Navigation.
- It imports the necessary screens: `LoginScreen`, `ChatRoomListScreen`, `ChatRoomScreen`, and `DirectMessageScreen`.

### 2. `src/`
This directory contains the main functional components of the app.

#### - `LoginScreen.tsx`
- This screen allows users to log in anonymously. When the user presses the login button, a random user ID is generated, and they are navigated to the chat room list.

#### - `ChatRoomListScreen.tsx`
- Displays a list of available chat rooms. Users can select a room to join and start chatting. It also includes the logic for rendering the chat rooms and navigating to the selected room.

#### - `ChatRoomScreen.tsx`
- This screen represents a specific chat room. Users can send and receive messages in real-time. It includes a message input field and a button to send messages. The messages are displayed in a scrollable list.

#### - `DirectMessageScreen.tsx`
- This screen is intended for future implementation of direct messaging between users. Currently, it serves as a placeholder.

## Installation
To run this app locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ChatApp
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in your preferred environment (web, Android, or iOS).

## Usage
- Open the app and press the "Login Anonymously" button to generate a user ID.
- Select a chat room from the list to enter.
- Type your message in the input field and press "Send" to communicate with others in the room.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments
- This app is built using React Native and Expo, which provide powerful tools for mobile app development.
- Thanks to the open-source community for their contributions and support.
