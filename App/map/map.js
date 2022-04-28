import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import CustomCallout from './custom_callout';
import {Cal, getCord} from './calculator';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


const refs = []

const Map = props => {
  const {stationList, curStation, humidity, uvindex} = props
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

  console.log(humidity[0],uvindex)

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
                <Text style={styles.temp}>{marker.value}</Text>
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
      <View style={styles.tips}>
        {uvindex[0] ? 
          <View style={styles.tipLeft}>
            <FontAwesome style={styles.icons} name={'sun'} size={18} />
            <Text style={styles.tip}>{' UV Index: ' + uvindex[0].value+ '/10'}</Text>
          </View> : null
        }
        {humidity[0] ? 
          <View style={styles.tipRight}>
            <FontAwesome style={styles.icons} name={'percent'} size={17} />
            <Text style={styles.tip}>{' Humidity: ' + humidity[0].value + '%'}</Text>
          </View> : null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tips:{
    width: 365,
    height:40,
    position:'absolute',
    bottom: 53,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tip:{
    fontSize:17,
    fontWeight:'bold'
  },
  tipLeft:{
    borderRadius: 15,
    width: 170,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginLeft: -10,
    alignItems: 'center',
    justifyContent:'center',

  },
  tipRight:{
    borderRadius: 15,
    width: 170,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
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
    fontWeight:'bold'
  },
  temp:{
    fontSize:16,
    fontWeight:'bold'
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
