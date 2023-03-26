
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import translate from '@helpers/localization';
import { useFocusEffect } from '@react-navigation/native';
import {
  Text,
  View,
  StyleSheet,
  Button, TouchableOpacity
} from 'react-native';
import { wp } from '@src/helpers/responsive';
import { showToast } from '@src/modules/app/services/appService';

export default function Home({ navigation }) {

  // ! Used to render after the page is opened
  useFocusEffect(
    useCallback(() => {

    }, [])
  );

  return (
    <SafeAreaView style={styles.safeView}>

      <View style={styles.root}>

        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Locations</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Take Picture</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Upload')} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>UploadProfile Picture</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

  safeView: {
    flex: 1,
  },

  root: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  fontBlack: {
    fontFamily: 'Black',
    marginTop: 20,
    fontSize: wp(6),
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase'
  }

});

;
