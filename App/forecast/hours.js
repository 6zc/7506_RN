/*
  按时间顺序展示温度/天气
 */

import React, {Component} from 'react';
import {StyleSheet, FlatList, Image, Text, View} from 'react-native';

export default class Hours extends Component {
  constructor(props) {
    super(props);
    //var ds = new FlatList.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2})
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

  renderTopicItemq = ({item, index}) => {
    return (
      <View style={Styles.day}>
        <Text style={Styles.hours}>{item.time}:00</Text>
        <Image
          style={Styles.icon}
          source={{
            uri:
              'https://app1.showapi.com/weather/icon/day/' +
              '0' +
              index +
              '.png',
          }}
        />
        <Text style={Styles.tem}>{item.temp}ºC</Text>
      </View>
    );
  };

  /*
    _renderList(item) {
        return (
            <View style={Styles.day}>
                <Text style={Styles.hours}>{item.time}:00</Text>
                <Image style={Styles.icon} source={{uri: 'https://app1.showapi.com/weather/icon/day/05.png'}}/>
                <Text style={Styles.tem}>{item.temp}º</Text>
            </View>
        )
    }
    */

  render() {
    const data = this.state.data;
    return (
      <View style={Styles.container}>
        <FlatList
          style={Styles.list}
          horizontal={true}
          data={data}
          renderItem={this.renderTopicItemq}
          //renderItem={({item}) => this._renderList(item)}
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
