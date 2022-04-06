/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Node from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import BottomMenu from "./bottom_navigator/bottom_navigator";
import MapWrapper from "./map/map"

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%'
  };

  return (
    <SafeAreaView style={backgroundStyle}>
    <MapWrapper />
    <BottomMenu style={styles.navi}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navi: {
    position: 'absolute',
    zIndex: 4
  },
});

export default App;
