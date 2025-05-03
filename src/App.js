// src/App.js

import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  return (
    <>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <SafeAreaView style={{ flex: 1 }}>
        <LoginScreen />
      </SafeAreaView>
    </>
  );
}

