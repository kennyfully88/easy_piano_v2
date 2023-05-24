import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppHeader = () => {
  return (
    <View style={styles.appHeader}>
      <Text style={styles.appHeaderText}>Easy Piano 2.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  appHeaderText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default AppHeader;
