import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker, Callout, ProviderPropType} from 'react-native-maps';
import CustomCallout from './custom_callout';
import Geolocation from 'react-native-geolocation-service';
import Cal from './calculate_color';

const Map = props => {
  const stationList = props.stationList;
  // const curStation = props.curStation;
  const {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.5;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  const [latitude, setLatitude] = useState(22.2745);
  const [longitude, setLongitude] = useState(114.1533);
  const [showMarkers, setShowMarkers] = useState(true);

  const region = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  const refs = new Array(stationList.length);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  });

  const onCallout = () => {
    setShowMarkers(!showMarkers);
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={props.provider}
        style={styles.map}
        showsUserLocation={true}
        region={region}
        minZoomLevel={9}
        maxZoomLevel={15}
        followsUserLocation={true}
        zoomTapEnabled={false}>
        {stationList.map(marker => (
          <Marker
            ref={refs[marker.name]}
            key={marker.name}
            onSelect={() => onCallout()}
            onDeselect={() => onCallout()}
            coordinate={marker.coordinate}
            calloutOffset={{x: 0, y: 30}}
            calloutAnchor={{x: 0.5, y: 0.7}}>
            <View style={styles.customMarker}>
              <View
                style={[
                  styles.textWrapper,
                  {backgroundColor: Cal(marker.temp)},
                  {opacity: showMarkers ? 1 : 0},
                ]}>
                <Text>{marker.temp}</Text>
                <Text style={styles.celsius}>{'°C'}</Text>
              </View>
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
    zIndex: 2,
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
