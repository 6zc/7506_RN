import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const CustomCallout = props => {
  const weatherObj = props.weatherObj;
  const {place, value, rainfall} = weatherObj;
  const rainIcon = rainfall.max === 0?'sun':(rainfall.max>25?'cloud-rain':'cloud-showers-heavy')
  return (
    <View style={[styles.container, props.style]}>
      <View style={[styles.bubble, {width:place.length*8+20}]}>
        <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={'location-arrow'} />
          <Text>{'  ' + place}</Text>
        </View>
        <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={'temperature-low'} />
          <Text>{ '  '+value + '°C'}</Text>
        </View>
        <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={rainIcon} />
          <Text>{'  ' + rainfall.max + ' mm'}</Text>
        </View>
        {/* <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={'sun'} />
          <Text>{' UV index: ' + UV}</Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icons: {
    paddingRight: 3,
  },
  lines: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 200,
    height:50,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
  },
  amount: {
    flex: 1,
  },
});

export default CustomCallout;
