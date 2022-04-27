import React, {Component} from 'react';
import {StyleSheet, Text, FlatList, Image, View} from 'react-native';

const renderTopicItem = ({item, name, index}) => {
  var src = [
    {url: require('./../resource/icon_snow.png')},
    {url: require('./../resource/icon_ride.png')}, //icon_ride.png
    {url: require('./../resource/icon_sun.png')},
    {url: require('./../resource/icon_medicine.png')},
    {url: require('./../resource/icon_car.png')},
    {url: require('./../resource/icon_air.png')},
    {url: require('./../resource/icon_clothes.png')}, //icon_clothes
  ];

  return (
    <View style={Styles.list}>
      <View style={Styles.left}>
        <Image style={Styles.icon} source={src[2].url} />
        <Text style={Styles.name}>{item.iname}</Text>
      </View>
      <View style={Styles.right}>
        <Text style={Styles.tit}>{item.ivalue}</Text>
        <Text style={Styles.dis}>{item.detail}</Text>
      </View>
    </View>
  );
};

export default class TodayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          iname: '时速',
          ivalue: '风向',
          detail: '南',
        },
      ],
    };
  }

  render() {
    //var detail = this.state.data;
    //console.log(this.state)
    return (
      <View>
        <View style={Styles.detail}>
          <View style={Styles.airCon}>
            <Text style={Styles.air}>
              今日AQI等级&nbsp;&nbsp;&nbsp;<Text style={Styles.level}>1级</Text>
            </Text>
            <Text style={Styles.airText}>
              无影响{'\n'}
              <Text style={Styles.advice}>建议添加衣物，以防感冒</Text>
            </Text>
          </View>
          <FlatList
            style={Styles.listcon}
            data={this.state.list}
            renderItem={renderTopicItem}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  advice: {
    marginTop: 10,
  },
  detail: {
    marginTop: 10,
  },
  airCon: {
    flexDirection: 'column',
    padding: 12,
  },
  air: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  level: {
    color: '#f40',
    fontSize: 16,
  },
  airText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  list: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  left: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 4,
  },
  right: {
    flex: 2,
    paddingRight: 6,
  },
  tit: {
    fontSize: 16,
    color: '#333',
    paddingBottom: 5,
  },
  dis: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
    paddingRight: 10,
  },
});
