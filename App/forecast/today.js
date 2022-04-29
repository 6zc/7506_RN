/*
 今天天气
 */

import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

export default class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Hong Kong',
      aqi: '36',
      aqiDetail: 'Good',
      temperature: '18',
      temperature_time: '00:00',
      humidity: '70',
      weather: 'Storms',
      icon: 1,
      wind_direction: 'wind',
      wind_power: 'breeze',
    };
  }

  componentDidMount(){
    var that=this;
    async function fetchData(){
      try {
        let response = await fetch('https://devapi.qweather.com/v7/weather/now?location=114.15,22.15&key=edc0ef084df64ffcb1a9412483b3bd92&lang=en');
        let responseJson = await response.json();
        that.setState({
          temperature: responseJson.now.temp,       
          aqi: responseJson.now.feelsLike,
          aqiDetail: 'Good',
          temperature_time: responseJson.now.obsTime,
          humidity: responseJson.now.humidity,
          weather: responseJson.now.text,
          icon: responseJson.now.icon,
          wind_direction: responseJson.now.windDir,
          wind_power: responseJson.now.windScale,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  };

  render() {
    var weather = this.state;
    var iconIndex = 8;
    if(weather.icon =='100'){
      iconIndex = 0;
    } else if(weather.icon == '101'|| weather.icon=='104'){
      iconIndex = 2;
    } else if(weather.icon > '101'&& weather.icon<='300'){
      iconIndex = 1;
    } else if(weather.icon>='300'){
      iconIndex = 8;
    } 
    return (
      <View style={Styles.container}>
        <View style={Styles.city}>
          <Text style={Styles.loc}>{weather.location}</Text>
          <Text style={Styles.weather}>{weather.weather}</Text>
        </View>
        <View style={Styles.weatherCon}>
          <Image
            style={Styles.weaIcon}
            resizeMode="contain"
            source={{uri:'https://app1.showapi.com/weather/icon/day/0'+iconIndex+'.png'}}
          />
          <View style={Styles.tem}>
            <View style={Styles.temp}>
              <Text style={Styles.num}>{weather.temperature}</Text>
              <Text style={Styles.unit}>℃</Text>
            </View>
            <Text style={Styles.air}>
              {weather.aqiDetail}&nbsp;&nbsp;{weather.aqi}
            </Text>
          </View>
        </View>
        <View style={Styles.date}>
          <Text style={Styles.left}>
          Humidity:&nbsp;{weather.humidity}&nbsp;&nbsp;&nbsp; Time:&nbsp;{weather.temperature_time.slice(0,10)}
          </Text>
          <Text style={Styles.scope}>
            {weather.wind_direction}&nbsp;&nbsp;{weather.wind_power}
          </Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    top: 30,
    // paddingBottom: 18,
  },
  loc: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 30,
  },
  weather: {
    marginTop: 10,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  weatherCon: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weaIcon: {
    width: 100,
    height: 100,
    marginRight: 14,
  },
  temp: {
    flexDirection: 'row',
  },
  num: {
    color: '#fff',
    fontSize: 50,
    lineHeight: 50,
  },
  unit: {
    fontSize: 20,
    color: '#fff',
  },
  air: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#0004',
    paddingHorizontal: 10,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  left: {
    color: '#fff',
    fontSize: 15,
  },
  scope: {
    color: '#fff',
    fontSize: 15,
  },
});
