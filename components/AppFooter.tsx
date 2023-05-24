import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppFooter = () => {
  return (
    <View style={styles.appFooter}>
      <Text style={styles.appFooterText}> &copy; 2023 Kenny Fully </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  appFooterText: {
    color: 'white',
  },
});

export default AppFooter;
