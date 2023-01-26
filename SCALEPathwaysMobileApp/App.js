import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';
import { LogBox } from 'react-native';

// Comment these two lines in order to restore Console Warnings
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications




const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;