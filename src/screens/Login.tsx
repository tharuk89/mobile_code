/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import React, { useCallback, useEffect, useState } from 'react';
import { showToast } from '@src/modules/app/services/appService';
import { wp } from '@helpers/responsive';
import {
  View,
  Text,
  StyleSheet,
  Button, TextInput
} from 'react-native';
import { dispatcher } from '@helpers/redux';
import { SetUser } from '@modules/app/redux/appSlice';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [data, setData] = useState([]);
  console.log(username);
  console.log(password);

  useEffect(() => {

  }, []);

  const setUsernameData = (inputText) => {

    setUsername(inputText);

  };

  const setPasswordData = (inputText) => {

    setPassword(inputText);

  };

  const userLogin = () => {

    const requestData = {
      email: username,
      password
    };
    fetch('http://f9d2-31-208-16-12.ngrok.io/api/login', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
    }).then((response) => response.json()).then((res) => {

       storeData(res.user?.id);
      navigation.navigate('Home');
      console.log(getId());
    });

    const getId = async () => {
      const storedIds = await AsyncStorage.getItem('userId');
      if (storedIds) {
        return JSON.parse(storedIds);
      }
    };

  };

  const storeData = async (userData) => {

    try {

      await AsyncStorage.setItem('userId', JSON.stringify(userData));

    } catch (error) {

      console.log('error while storing data', error);

    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtLogin}>User Login</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter username"
        placeholderTextColor="red"
        onChangeText={setUsernameData}
      />
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter password"
        placeholderTextColor="red"
        secureTextEntry
        onChangeText={setPasswordData}
      />
      <View style={{ margin: 25 }}>
        <Button
          title="Login"
          color="green"
          onPress={userLogin}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    margin: 10
  },
  textInputStyle: {
    borderColor: '#9a73ef',
    borderWidth: 1,
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    marginTop: 8
  },
  txtLogin: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20
  }
});

