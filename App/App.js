/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
  Text
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import BottomMenu from "./bottom_navigator/bottom_navigator";
import SearchBar from "./top_searchbar/top_searchbar"
import MapWrapper from "./map/map"
import Today from './components/today'
import Hours from './components/hours'
import Days from './components/days'

const App = () => {

  const isDarkMode = useColorScheme() === 'dark';
  const [curStation, setCurStation] = useState('MidWest')

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%'
  };

  const latitude = 22.2745
  const longitude = 114.1533
  const SPACE = 0.01;
  const stationList = [
    {
      name:'MidWest',
      temp:'30',
      weather:'Rainy',
      windSpeed:'10m/s',
      windDirection:'North',
      UV:'10',
      coordinate: {
        latitude: latitude,
        longitude: longitude + 3*SPACE,
      },
    },
    {
      name:'Central',
      temp:'15',
      weather:'Rainy',
      windSpeed:'10m/s',
      windDirection:'North',
      UV:'10',
      coordinate: {
        latitude: latitude + 3*SPACE,
        longitude: longitude - SPACE,
      },
    },
    {
      name:'Kowloon',
      temp:'18',
      weather:'Rainy',
      windSpeed:'10m/s',
      windDirection:'North',
      UV:'10',
      coordinate: {
        latitude: latitude,
        longitude: longitude,
      },
    },
    {
      name:'Shamsuipo',
      temp:'23',
      weather:'Rainy',
      windSpeed:'10m/s',
      windDirection:'North',
      UV:'10',
      coordinate: {
        latitude: latitude,
        longitude: longitude - 3* SPACE,
      },
    },
  ]

  return (
    <SafeAreaView style={backgroundStyle}>
      {/*       
      <View style={styles.today}>
          <Today data={this.state}/>
          <Hours hours={this.state}/>
      </View>
      <Days data={this.state}/> 
      */}
      <MapWrapper stationList={stationList} curStation={curStation}/>
      <SearchBar stationList={stationList} setCurStation={setCurStation}/>
      <BottomMenu style={styles.navi}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navi: {
    position: 'absolute',
  },
  today: {
    backgroundColor: '#4da4dd'
  },
  container:{
    marginBottom:44
  },
});

export default App;
