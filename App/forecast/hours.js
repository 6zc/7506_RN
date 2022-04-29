/*
  按时间顺序展示温度/天气
 */

import React, {Component} from 'react';
import {StyleSheet, FlatList, Image, Text, View} from 'react-native';

export default class Hours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          time: '13',
          temp: '12',
        },
        {
          time: '14',
          temp: '17',
        },
        {
          time: '15',
          temp: '10',
        },
        {
          time: '16',
          temp: '11',
        },
        {
          time: '17',
          temp: '18',
        },
        {
          time: '18',
          temp: '11',
        },
        {
          time: '19',
          temp: '21',
        },
        {
          time: '20',
          temp: '11',
        },
        {
          time: '21',
          temp: '25',
        },
      ],
    };
  }
  componentDidMount(){
    var that=this;
    async function fetchData(){
      try {
        let response = await fetch('https://devapi.qweather.com/v7/weather/24h?location=114.15,22.15&key=edc0ef084df64ffcb1a9412483b3bd92&lang=en');
        let responseJson = await response.json();
        that.setState({
          data: responseJson.hourly
        });
        //console.log(that.state.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  };

  renderTopicItemq = ({item, index}) => {
    var iconIndex = 1;
    if(item.icon =='100'){
      iconIndex = 0;
    } else if(item.icon == '101'|| item.icon=='104'){
      iconIndex = 2;
    } else if(item.icon > '101'&& item.icon<='300'){
      iconIndex = 1;
    } else if(item.icon>='300'){
      iconIndex = 8;
    } 
    return (
      <View style={Styles.day}>
        <Text style={Styles.hours}>{item.fxTime == undefined? '': item.fxTime.slice(11,16)}</Text>
        <Image
          style={Styles.icon}
          source={{
            uri:
              'https://app1.showapi.com/weather/icon/day/0'+iconIndex+'.png',
          }}
        />
        <Text style={Styles.tem}>{item.temp}ºC</Text>
      </View>
    );
  };

  render() {
    var data = this.state.data;
    return (
      <View style={Styles.container}>
        <FlatList
          style={Styles.list}
          horizontal={true}
          data={data}
          renderItem={this.renderTopicItemq}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#4da4dd90',
    paddingBottom: 12,
    marginTop: 40,
    // height:140
  },
  list: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#fff4',
    paddingVertical: 8,
  },
  day: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  hours: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    width: 45,
  },
  icon: {
    width: 25,
    height: 25,
    marginVertical: 4,
  },
  tem: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 13,
    width: 40,
  },
});
