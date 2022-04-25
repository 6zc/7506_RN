/*
 今天天气
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Text,
  View,
} from 'react-native';

export default class Days extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          week: 'Monday',
          weather: 'Rain',
          temphigh: '10',
          templow: '8',
        },
        {
          week: 'Tuesday',
          weather: 'Clear',
          temphigh: '15',
          templow: '10',
        },
        {
          week: 'Wednesday',
          weather: 'Showers',
          temphigh: '12',
          templow: '7',
        },
        {
          week: 'Thursday',
          weather: 'Cloudy',
          temphigh: '10',
          templow: '8',
        },
        {
          week: 'Friday',
          weather: 'Cloudy',
          temphigh: '11',
          templow: '3',
        },
        {
          week: 'Saturday',
          weather: 'Showers',
          temphigh: '17',
          templow: '5',
        },
        {
          week: 'Sunday',
          weather: 'Showers',
          temphigh: '16',
          templow: '9',
        },
      ],
    };
  }

  renderTopicItems = ({item, index}) => {
    return (
      <View style={Styles.item}>
        <Text style={Styles.week}>{item.week}</Text>
        <View style={Styles.wea}>
          <Image
            style={Styles.icon}
            source={{
              uri:
                'https://app1.showapi.com/weather/icon/day/0' + index + '.png',
            }}
          />
          <Text style={Styles.weaText}>{item.weather}</Text>
          <Text style={Styles.tem}>
            {item.temphigh}ºC&nbsp;~&nbsp;{item.templow}ºC
          </Text>
        </View>
      </View>
    );
  };

  render() {
    data = this.state.data;
    return (
      <FlatList
        style={Styles.container}
        data={data}
        renderItem={this.renderTopicItems}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    height:336,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    // marginTop: -10,
    padding: 12,
    shadowColor: '#0001', //安卓不支持阴影
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingVertical: 12,
    marginBottom: 9,
    //alignItems: 'center'
  },
  wea: {
    flexDirection: 'row',
  },
  week: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  icon: {
    width: 26,
    height: 26,
    marginRight: 20,
  },
  weaText: {
    width: 60,
    textAlign: 'center',
    marginRight: 10,
  },
  tem: {
    width: 83,
    textAlign: 'center',
  },
});
