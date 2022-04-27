import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import CustomCallout from './custom_callout';
import {Cal, getCord} from './calculator';

const refs = []

const Map = props => {
  const stationList = props.stationList;
  const curStation = props.curStation;
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.4;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [latitude, setLatitude] = useState(22.2745);
  const [longitude, setLongitude] = useState(114.1533);

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  useEffect(() => {
    setLatitude(getCord(curStation).latitude);
    setLongitude(getCord(curStation).longitude);
    if(refs[curStation]){
      console.log('show!')
      refs[curStation].showCallout()
    }
  },[props.curStation]);

  return (
    <View style={styles.container}>
      <MapView
        provider={props.provider}
        style={styles.map}
        showsUserLocation={true}
        region={region}
        minZoomLevel={9}
        maxZoomLevel={15}
        // followsUserLocation={true}
        zoomTapEnabled={false}>
        {stationList.map(marker => (
          <Marker
            ref={ref=>refs[marker.place]=ref}
            key={marker.place}
            coordinate={getCord(marker.place)}
            >
            <View style={styles.customMarker}>
              <View
                style={[
                  styles.textWrapper,
                  {backgroundColor: Cal(marker.value)},
                ]}>
                <Text>{marker.value}</Text>
                <Text style={styles.celsius}>{'°C'}</Text>
              </View>
            </View>
            <Callout
              alphaHitTest
              onPress={e => {
                if (
                  e.nativeEvent.action === 'marker-inside-overlay-press' ||
                  e.nativeEvent.action === 'callout-inside-press'
                ) {
                  return;
                }
              }}
              style={styles.customView}>
              <CustomCallout weatherObj={marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 0,
    borderRadius: 6,
    borderColor: '#eeeeee',
    borderWidth: 0.5,
    
  },
  celsius: {
    fontSize: 12,
  },
  customMarker: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 780,
    width: 400,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
