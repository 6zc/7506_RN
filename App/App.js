/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import BottomMenu from "./bottom_navigator/bottom_navigator";
import SearchBar from "./top_searchbar/top_searchbar"
import MapWrapper from "./map/map"

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%'
  };


  const latitude = 22.2745
  const longitude = 114.1533
  const SPACE = 0.01;
  const stationList = [
    {
      name:'MW',
      temp:'30',
      coordinate: {
        latitude: latitude,
        longitude: longitude + 3*SPACE,
      },
    },
    {
      name:'MW2',
      temp:'15',
      coordinate: {
        latitude: latitude + 3*SPACE,
        longitude: longitude - SPACE,
      },
    },
    {
      name:'MW3',
      temp:'18',
      coordinate: {
        latitude: latitude,
        longitude: longitude,
      },
    },
    {
      name:'MW4',
      temp:'23',
      coordinate: {
        latitude: latitude,
        longitude: longitude - 3* SPACE,
      },
    },
  ]

  return (
    <SafeAreaView style={backgroundStyle}>
      <MapWrapper stationList={stationList}/>
      <SearchBar />
      <BottomMenu style={styles.navi}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navi: {
    position: 'absolute',
  },
});

export default App;
