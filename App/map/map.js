import React, { useState, useEffect }from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import MapView, {
  Marker,
  Callout,
  CalloutSubview,
  ProviderPropType,
} from 'react-native-maps';
import CustomCallout from './custom_callout';
import Geolocation from '@react-native-community/geolocation';

Geolocation.getCurrentPosition(info => console.log(info));

const Callouts = props => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const SPACE = 0.01;
  const [latitude, setLatitude] = useState(22.2745);
  const [longitude, setLongitude] = useState(114.1533);
  const [cnt, setCnt] = useState(0);

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }
  const markers = [
    {
      coordinate: {
        latitude: latitude + SPACE,
        longitude: longitude + SPACE,
      },
    },
    {
      coordinate: {
        latitude: latitude + SPACE,
        longitude: longitude - SPACE,
      },
    },
    {
      coordinate: {
        latitude: latitude,
        longitude: longitude,
      },
    },
    {
      coordinate: {
        latitude: latitude,
        longitude: longitude - SPACE / 2,
      },
    },
  ]

  useEffect(()=> {
    Geolocation.getCurrentPosition(info => {
      // setLatitude(info.coords.latitude)
      // setLongitude(info.coords.longitude)
      setLatitude(22.2745)
      setLongitude(114.1533)
    })
  })

  return(
    <View style={styles.container}>
        <MapView
          provider={props.provider}
          style={styles.map}
          initialRegion={region}
          zoomTapEnabled={false}
        >
          <Marker coordinate={markers[1].coordinate}>
            <Callout style={styles.plainView}>
              <View>
                <Text>This is a plain view</Text>
              </View>
            </Callout>
          </Marker>
          <Marker
            coordinate={markers[2].coordinate}
            calloutOffset={{ x: -8, y: 28 }}
            calloutAnchor={{ x: 0.5, y: 0.4 }}
          >
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
              style={styles.customView}
            >
              <CustomCallout>
                <Text>{`This is a custom callout bubble view ${cnt}`}</Text>
                <CalloutSubview
                  onPress={() => {
                    setCnt(cnt+1)
                  }}
                  style={[styles.calloutButton]}
                >
                  <Text>Click me</Text>
                </CalloutSubview>
              </CustomCallout>
            </Callout>
          </Marker>
        </MapView>
      </View>
  )
}


Callouts.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
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

export default Callouts;
