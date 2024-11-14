import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    getData();
  };

  const getData = async () => {
    try {
      const employeeName = await AsyncStorage.getItem('employeeName');
      const employeeId = await AsyncStorage.getItem('employeeId');
      if (employeeName !== null || employeeId !== null) {
        navigation.navigate('QRCode');
      } else {
        navigation.navigate('Input');
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
