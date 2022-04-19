import {Text, View, SectionList} from 'react-native';
import React, {Component} from 'react';
import Zalobody from './components/ZaloBody';
import Zaloheader from './components/ZaloHeader';

export default class ZaloHomeSreen extends Component {
  render() {
    return (
      <View>
        <Zaloheader data={dataFlatList} />
        <Zalobody data={dataFlatList} />
      </View>
    );
  }
}
const dataFlatList = [
  {
    id: 1,
    image: require('../../asset/zalo/blackwidow.jpeg'),
    title: 'Widow',
  },
  {
    id: 2,
    image: require('../../asset/zalo/captain.jpg'),
    title: 'Captain',
  },
  {
    id: 3,
    image: require('../../asset/zalo/flash.jpg'),
    title: 'Flash',
  },
  {
    id: 4,
    image: require('../../asset/zalo/ironman.jpeg'),
    title: 'Ironman',
  },
  {
    id: 5,
    image: require('../../asset/zalo/spiderman.jpeg'),
    title: 'spiderman',
  },
  {
    id: 6,
    image: require('../../asset/zalo/strange.jpg'),
    title: 'strange',
  },
  {
    id: 7,
    image: require('../../asset/zalo/suppergirl.jpg'),
    title: 'suppergirl',
  },
  {
    id: 8,
    image: require('../../asset/zalo/wanda.jpg'),
    title: 'wanda',
  },
  {
    id: 9,
    image: require('../../asset/zalo/wonderwoman.jpg'),
    title: 'wonderwoman',
  },
  {
    id: 10,
    image: require('../../asset/zalo/yasuo.jpg'),
    title: 'yasuo',
  },
];
