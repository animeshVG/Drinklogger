import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.DL}>
        <Image source={require('../assests/Images/Logo.png')} />
      </View>
      <View style={styles.VZ}>
        <Image source={require('../assests/Images/VINZ.png')} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  DL: {
    height: '90%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  VZ: {
    height: '10%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
