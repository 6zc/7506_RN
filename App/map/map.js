import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Alert } from 'react-native';
import MapView, {
  Marker,
  Callout,
  CalloutSubview,
  ProviderPropType,
} from 'react-native-maps';
import CustomCallout from './custom_callout';
import Geolocation from '@react-native-community/geolocation';
import Cal from './calculate_color';

const Map = props => {
  const stationList = props.stationList;
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.5;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [latitude, setLatitude] = useState(22.2745);
  const [longitude, setLongitude] = useState(114.1533);
  const [cnt, setCnt] = useState(0);

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude)
      setLongitude(info.coords.longitude)
    });
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={props.provider}
        style={styles.map}
        showsUserLocation={true}
        region={region}
        minZoomLevel={10}
        followsUserLocation={true}
        zoomTapEnabled={false}>
        {
          stationList.map(marker => 
            <Marker
              key={marker.name}
              coordinate={marker.coordinate}
              calloutOffset={{ x: -8, y: 28 }}
              calloutAnchor={{ x: 0.5, y: 0.4 }}>
              <View style={[styles.customMarker, {backgroundColor:Cal(marker.temp)}]}>
                <Text>{marker.temp}</Text>
                <View style={[styles.arrow, {backgroundColor:Cal(marker.temp)}]}></View>
              </View>
              <Callout
                alphaHitTest
                tooltip
                onPress={e => {
                  if (
                    e.nativeEvent.action === 'marker-inside-overlay-press' ||
                    e.nativeEvent.action === 'callout-inside-press'
                  ) {
                    return;
                  }
                  Alert.alert('callout pressed');
                }}
                style={styles.customView}>
                <CustomCallout>
                  <Text>{`This is a custom callout bubble view ${cnt}`}</Text>
                  <CalloutSubview
                    onPress={() => {
                      setCnt(cnt + 1);
                    }}
                    style={[styles.calloutButton]}>
                    <Text>Click me</Text>
                  </CalloutSubview>
                </CustomCallout>
              </Callout>
            </Marker>
          )
        }
      </MapView>
    </View>
  );
};

Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  arrow: {
    width:8,
    height:8,
    transform:[{rotate:'45deg'}],
    position:'absolute',
    // left:"33%",
    top:"94%",
    borderRadius:1,
    borderBottomColor:"gray",
    borderBottomWidth:1.5,
    borderRightColor:"gray",
    borderRightWidth:1.5,
    alignSelf: 'center',

  },
  customMarker: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    padding:1,
    borderRadius:2,
    borderColor:"gray",
    borderWidth:1,
    elevation:1,
    shadowColor:"black",
    shadowOffset:{width:0,height:0},
    shadowOpacity: 1,
    shadowRadius: 0.7,
  },
  customView: {
    width: 140,
    height: 140,
  },
  plainView: {
    width: 60,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  calloutButton: {
    width: 'auto',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default Map;
