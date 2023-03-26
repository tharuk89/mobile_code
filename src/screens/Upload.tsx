import React from 'react';
import { Button, Image, Platform, StyleSheet, View } from 'react-native';
import { wp } from '@src/helpers/responsive';
import * as ImagePicker from 'expo-image-picker';

export default function Upload({ navigation }) {

  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }).then(res => {
        setPhoto(res);
      });
  };

  const handleUploadPhoto = () => {
    const fileName = photo.assets[0].uri.split('/').pop();
    const fileType = fileName.split('.').pop();

    const data = new FormData();
    data.append('file', {
      name: fileName,
      type: 'image/jpg',
      uri: photo.assets[0].uri
    });

    data.append('userId', '13');
    console.log(photo.assets[0].fileName);
//console.log(data)
    fetch('http://f9d2-31-208-16-12.ngrok.io/api/users/profile/upload', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('image uploaded');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.assets[0].uri }}
            style={{
              width: 300,
              height: 300
            }}
          />
          <Button title="Upload Photo" onPress={handleUploadPhoto}/>
        </>
      )}
      <Button title="Choose Photo" onPress={handleChoosePhoto}/>
    </View>
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
