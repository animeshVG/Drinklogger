import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const InputScreen = () => {
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
          <TextInput placeholder="Enter Your Name" style={styles.Input} />
        </View>
        <View
          style={{
            marginTop: '10%',
          }}>
          <Text style={styles.Txt}>Emp ID</Text>
          <TextInput placeholder="Enter Emp ID" style={styles.Input} />
        </View>
      </View>

      <View style={styles.proceed}>
        <Image source={require('../assests/Images/VINZ.png')} />
        <TouchableOpacity style={styles.btn}>
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
