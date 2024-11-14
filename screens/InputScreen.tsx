import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const InputScreen = ({navigation}) => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const validateEnteredValues = () => {
    if (employeeId === '' || employeeName === '') {
      return false;
    } else {
      return true;
    }
  };

  const storeDataLocally = async () => {
    if (validateEnteredValues()) {
      try {
        await AsyncStorage.setItem('employeeName', employeeName);
        await AsyncStorage.setItem('employeeId', employeeId);

        //navigato QR Screen
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'QRCode'}],
          }),
        );
      } catch (error) {
        console.error('Error saving data', error);
      }
    } else {
      Alert.alert('Warning', 'Please Enter Valid Details');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Image source={require('../assests/Images/Logo.png')} />
      </View>
      <View style={styles.Inputs}>
        <View
          style={{
            marginTop: '10%',
          }}>
          <Text style={styles.Txt}>Name</Text>
          <TextInput
            placeholder="Enter Your Name"
            style={styles.Input}
            onChangeText={text => setEmployeeName(text)}
            value={employeeName}
          />
        </View>
        <View
          style={{
            marginTop: '10%',
          }}>
          <Text style={styles.Txt}>Emp ID</Text>
          <TextInput
            placeholder="Enter Emp ID"
            style={styles.Input}
            onChangeText={text => setEmployeeId(text)}
            value={employeeId}
          />
        </View>
      </View>

      <View style={styles.proceed}>
        <Image source={require('../assests/Images/VINZ.png')} />
        <TouchableOpacity style={styles.btn} onPress={storeDataLocally}>
          <Text style={styles.btntxt}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Logo: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Inputs: {
    height: '50%',
    width: '100%',
    // backgroundColor: 'blue',
    padding: 20,
  },
  proceed: {
    height: '20%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Input: {
    backgroundColor: '#F0F5FA',
    padding: 20,
    marginTop: 10,
    borderRadius: 5,
  },
  Txt: {
    fontSize: 15,
    fontWeight: 'semibold',
  },
  btn: {
    height: '30%',
    width: '90%',
    backgroundColor: '#7fb2d9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
  },
  btntxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
