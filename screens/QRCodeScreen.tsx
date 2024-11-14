import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {Text, Alert, StyleSheet, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

const QRCodeScreen = ({navigation}) => {
  const [isQRScanned, setIsQRScanned] = useState(false);
  const [isValidQR, setisValidQR] = useState(true);
  const [employeeName, setEmployeeName] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const getData = async () => {
    try {
      const empName = await AsyncStorage.getItem('employeeName');
      const empId = await AsyncStorage.getItem('employeeId');
      if (empName !== null || empId !== null) {
        setEmployeeName(empName!);
        setEmployeeId(empId!);
      } else {
        setEmployeeName('--');
        setEmployeeId('--');
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  useEffect(() => {
    const requestCameraPermission = async () => {
      const status = await Camera.requestCameraPermission();
      // if (status !== 'authorized') {
      //   console.warn('Camera permission is not granted');
      // }
    };

    requestCameraPermission();
    getData();
  }, []);

  const submitDataToSheets = async drinkType => {
    try {
      // const formId = formUrl.includes('TeaFormID')
      //   ? 'TeaFormID'
      //   : 'CoffeeFormID';

      const currentDateTime = new Date();
      const formattedDate = currentDateTime.toLocaleDateString();
      const formattedTime = currentDateTime.toLocaleTimeString();

      console.log(drinkType);
      console.log(currentDateTime);
      console.log(formattedDate);
      console.log(formattedTime);

      // Add a network call over here to send the data to sheet

      // await axios.post(
      //   `https://docs.google.com/forms/d/e/${formId}/formResponse`,
      //   new URLSearchParams({
      //     'entry.123456789': drinkType,
      //     'entry.987654321': 'User Name', // Optional field for tracking user
      //   }),
      // );

      // Chekc the response to validate is the data send properply or not.

      // Navigate to next screen that says enjoy your drink
      // Pass the required data to next screen.
      // Username , date, time , drinkType

      // setConfirmation({
      //   message: `Enjoy your ${drinkType}!`,
      //   date: formattedDate,
      //   time: formattedTime,
      // });
      navigation.navigate('Enjoy', {
        empName: employeeName,
        empId: employeeId,
        date: formattedDate,
        time: formattedTime,
        drinkType: drinkType,
      });
      setIsQRScanned(false);
      setisValidQR(true);
    } catch (error) {
      console.error('Form submission error:', error);
      Alert.alert('Error', 'Failed to record drink. Please try again.');
      setIsQRScanned(false);
      setisValidQR(true);
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(codes[0].value);
      if (
        codes[0].value === 'drinklogger-tea' ||
        codes[0].value === 'drinklogger-coffee'
      ) {
        setIsQRScanned(true);
        setisValidQR(true);
        submitDataToSheets(codes[0].value);
      } else {
        setisValidQR(false);
      }
    },
  });

  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  // if (!hasPermission) return <PermissionPage />;
  if (device == null) return <Text>No Camera</Text>;
  return (
    <View style={styles.mainContainerStyle}>
      {!isValidQR && (
        <Text style={styles.usernameTextStyle}>
          Please scan a valid tea or coffee QR code.
        </Text>
      )}
      <Text style={styles.usernameTextStyle}>Hello, {employeeName}</Text>
      <Text style={styles.subTitleTextStyle}>Scan QR For Your Drink</Text>
      {!isQRScanned ? (
        <View style={styles.qrCodeContainerStyle}>
          <Camera
            codeScanner={codeScanner}
            // style={[
            //   StyleSheet.absoluteFill,
            //   {
            //     margin: 6,
            //   },
            // ]}
            style={{flex: 1}}
            device={device}
            isActive={true}
          />
        </View>
      ) : (
        <View>
          <Text style={styles.subTitleTextStyle}>Please Wait ...</Text>
        </View>
      )}
      <Text style={styles.descriptionTextStyle}>
        Align the QR code within the frame to scan
      </Text>
    </View>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  usernameTextStyle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitleTextStyle: {
    color: '#ffffff',
    margin: 10,
    fontSize: 14,
  },
  descriptionTextStyle: {
    color: '#ffffff',
    margin: 20,
  },
  qrCodeContainerStyle: {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    justifyContent: 'center',
    width: 210,
    height: 200,
    overflow: 'hidden',
  },
});
