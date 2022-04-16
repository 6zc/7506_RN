import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const CustomCallout = props => {
  const weatherObj = props.weatherObj
  const {name, temp, weather, windSpeed, windDirection, UV} = weatherObj
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bubble}>
        <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={'location-arrow'}></FontAwesome>
          <Text>{' '+name}</Text>
        </View>
        <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={'cloud'}></FontAwesome>
          <Text>{weather+' '+temp+'°C'}</Text>
        </View>
        <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={'wind'}></FontAwesome>
          <Text>{' '+windDirection+' '+windSpeed}</Text>
        </View>
        <View style={styles.lines}>
          <FontAwesome style={styles.icons} name={'sun'}></FontAwesome>
          <Text>{' UV index: '+UV}</Text>
        </View>
      </View>
      <View style={styles.arrowBorder} />
      <View style={styles.arrow} />
    </View>
  );
}

const styles = StyleSheet.create({
  icons:{
    paddingRight:3
  },
  lines:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    width: 140,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 6,
    borderColor: '#eeeeee',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#ffffff',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  },
});

export default CustomCallout;
