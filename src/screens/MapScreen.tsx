import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {

  const [markers, setMarkers] = useState([
    {
      id: 1,
      latLon: {
        latitude: 56.85149,
        longitude: 14.82616
      },
      name: 'Public Library'
    },
    {
      id: 2,
      latLon: {
        latitude: 56.85249,
        longitude: 14.82516,
      },
      name: 'Lab1'
    },
    {
      id: 3,
      latLon: {
        latitude: 56.85349,
        longitude: 14.82616
      },
      name: 'Lab2'
    }

  ]);

  const markerClick = () => {
    console.log(" TTTT ")
  };
  useEffect(() => {
    console.log(markers);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 56.85249,
          longitude: 14.82516,
          latitudeDelta: 0.0112,
          longitudeDelta: 0.0111,
        }}
      >
        {markers?.map((location) => (
          <Marker
            key={location?.id}
            coordinate={location?.latLon}
            title={location?.name}
            onPress={markerClick}
          />
        ))}
      </MapView>
    </View>
  );

}
// create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, // the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
