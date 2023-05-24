import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';
import AppFooter from './components/AppFooter';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.appArea}>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  appArea: {
    flex: 1,
    backgroundColor: '#C4A484',
  },
});

export default App;
