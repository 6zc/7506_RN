import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import EIcon from 'react-native-vector-icons/Ionicons';
import AIcon from 'react-native-vector-icons/AntDesign';
import SearchBar from './top_searchbar/top_searchbar';
import MapWrapper from './map/map';
import Today from './forecast/today';
import Hours from './forecast/hours';
import Days from './forecast/days';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["EventEmitter.removeListener"]);
const Tabs = AnimatedTabBarNavigator();
const App = () => {
  const [curStation, setCurStation] = useState('Hong Kong Park');
  const [stationList, setStationList] = useState([])

  useEffect(() => {
    async function fetchData(){
      try {
        let response = await fetch('http://47.94.208.98:8080/homepage');
        let responseJson = await response.json();
        setStationList(responseJson.temperature.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  },[])

  const Forecast = props => {
    return (
      <View style={styles.today}>
        <Today />
        <Hours />
        <Days />
      </View>
    );
  };

  const Map = props => {
    return (
      <View>
        <SearchBar 
          stationList={stationList} 
          setCurStation={setCurStation}
          curStation={curStation}/>
        <MapWrapper 
          stationList={stationList}
          curStation={curStation} />
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: '#ffffff',
          activeBackgroundColor: '#4da4dd',
          labelStyle: {
            fontSize: 24,
          },
        }}>
        <Tabs.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <EIcon
                name="location-sharp"
                size={30}
                color={focused ? color : '#4da4dd'}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Forecast"
          component={Forecast}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <AIcon
                name="cloud"
                size={34}
                color={focused ? color : '#4da4dd'}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  today: {
    backgroundColor: '#4da4dd',
  },
});

export default App;
