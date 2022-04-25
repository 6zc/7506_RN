/*
 今天天气
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Text, View} from 'react-native';

export default class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Tsim Sha Tsui',
      weather: {
        aqi: '36',
        aqiDetail: 'Good',
        temperature: '18',
        temperature_time: '00:00',
        week: 'Thursday',
        weather: 'Storms',
        weather_pic: 'http://app1.showapi.com/weather/icon/day/301.png',
        wind_direction: 'wind',
        wind_power: 'breeze',
      },
      loaded: false,
    };
  }

  render() {
    var weather = this.state.weather;
    var img =
      weather.weather_pic < 10
        ? '0' + weather.weather_pic
        : weather.weather_pic;
    return (
      <View style={Styles.container}>
        <View style={Styles.city}>
          <Text style={Styles.loc}>{this.state.location}</Text>
          <Text style={Styles.weather}>{weather.weather}</Text>
        </View>
        <View style={Styles.weatherCon}>
          <Image
            style={Styles.weaIcon}
            resizeMode="contain"
            source={{uri: 'https://app1.showapi.com/weather/icon/day/04.png'}}
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
            {weather.week}&nbsp;&nbsp;&nbsp; Update time:&nbsp;16:42
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
