import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const EnjoyScreen = ({route, navigation}) => {
  const {empName, empId, date, time, drinkType} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.one}>
        <View>
          <Image source={require('../assests/Images/Done.png')} />
        </View>
        <View style={styles.Greeting}>
          <Text style={styles.GreetingTxt}>Thank You, {empName} !!</Text>
          <Text style={styles.DateTime}>
            {time} on {date}
          </Text>
        </View>
      </View>
      <View style={styles.two}>
        {drinkType === 'drinklogger-tea' ? (
          <Image source={require('../assests/Images/Chai.png')} />
        ) : (
          <Image source={require('../assests/Images/Coffee.png')} />
        )}
      </View>
      <View style={styles.three}>
        <View>
          {drinkType === 'drinklogger-tea' ? (
            <Text style={styles.TeaCoffee}>Enjoy Your Tea !!</Text>
          ) : (
            <Text style={styles.TeaCoffee}>Enjoy Your Coffee !!</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.GoBack}
          onPress={() => navigation.goBack()}>
          <Text style={styles.GoBackTxt}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnjoyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  one: {
    height: '40%',
    width: '100%',
    // backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '30%',
  },
  two: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  three: {
    height: '30%',
    width: '100%',
    // backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Greeting: {
    height: '20%',
    width: '100%',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  GreetingTxt: {
    fontSize: 26,
    fontWeight: 700,
  },
  DateTime: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 400,
  },
  GoBack: {
    height: '20%',
    width: '90%',
    backgroundColor: '#0066b3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: '5%',
  },
  GoBackTxt: {
    fontWeight: 700,
    fontSize: 16,
    color: 'white',
  },
  TeaCoffee: {
    fontSize: 20,
    fontWeight: 400,
  },
});
