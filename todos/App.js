import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <TodoList />
      <TodoInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2F7F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
