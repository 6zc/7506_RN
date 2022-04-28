/*
未来7天天气预报
 */

import React, {useState, useEffect, Component} from 'react';
import {StyleSheet, FlatList, Image, Text, View} from 'react-native';

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
          icon:'https://app1.showapi.com/weather/icon/day/01.png'
        },
        {
          week: 'Tuesday',
          weather: 'Clear',
          temphigh: '15',
          templow: '10',
          icon:'https://app1.showapi.com/weather/icon/day/01.png'
        },
        {
          week: 'Wednesday',
          weather: 'Showers',
          temphigh: '12',
          templow: '7',
          icon:'https://app1.showapi.com/weather/icon/day/01.png'
        },
        {
          week: 'Tuesday',
          weather: 'Clear',
          temphigh: '15',
          templow: '10',
          icon:'https://app1.showapi.com/weather/icon/day/01.png'
        },
        {
          week: 'Wednesday',
          weather: 'Showers',
          temphigh: '12',
          templow: '7',
          icon:'https://app1.showapi.com/weather/icon/day/01.png'
        },
        {
          week: 'Thursday',
          weather: 'Cloudy',
          temphigh: '10',
          templow: '8',
          icon:'https://app1.showapi.com/weather/icon/day/01.png'
        },
        {
          week: 'Friday',
          weather: 'Cloudy',
          temphigh: '11',
          templow: '3',
          icon:'https://app1.showapi.com/weather/icon/day/01.png'
        },
      ],
    };
  }

  componentDidMount(){
    var that=this;
    async function fetchData(){
      try {
        let response = await fetch('https://devapi.qweather.com/v7/weather/15d?location=114.15,22.15&key=edc0ef084df64ffcb1a9412483b3bd92&lang=en');
        let responseJson = await response.json();
        that.setState({
          data: responseJson.daily,       
        });
        //console.log(that.state.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  };

  renderTopicItems = ({item, index}) => {
    var iconIndex = 1;
    if(item.iconDay =='100'){
      iconIndex = 0;
    } else if(item.iconDay == '101'|| item.iconDa=='104'){
      iconIndex = 2;
    } else if(item.iconDay > '101'&& item.iconDa<='300'){
      iconIndex = 1;
    } else if(item.iconDay>='300'){
      iconIndex = 8;
    } 
    return (
      <View style={Styles.item}>
        <Text style={Styles.week}>{item.fxDate}</Text>
        <View style={Styles.wea}>
          <Image
            style={Styles.icon}
            source={{
              uri:
                'https://app1.showapi.com/weather/icon/day/0'+iconIndex+'.png',
            }}
          />
          <Text style={Styles.weaText}>{item.textDay}</Text>
          <Text style={Styles.tem}>
            {item.tempMax}ºC&nbsp;~&nbsp;{item.tempMin}ºC
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const data = this.state.data;
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
    height: 336,
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
