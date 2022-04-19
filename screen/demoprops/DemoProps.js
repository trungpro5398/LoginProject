import {Text, View, FlatList, SectionList} from 'react-native';
import React, {Component} from 'react';
import {RenderHeader} from './components/DemoText';
import DemoClassComponent from './components/DemoClassComponent';

const dataFlatList = [
  {
    id: 1,
    title: 'item 1.1',
  },
  {
    id: 2,
    title: 'item 1.2',
  },
  {
    id: 3,
    title: 'item 1.3',
  },
  {
    id: 4,
    title: 'item 1.4',
  },
];

const dataSectionList = [
  {
    title: 'Section 1',
    color: 'red',
    data: [
      {
        id: 1,
        title: 'item 1.1',
      },
      {
        id: 2,
        title: 'item 1.2',
      },
      {
        id: 3,
        title: 'item 1.3',
      },
    ],
  },
  {
    title: 'Section 2',
    color: 'blue',
    data: [
      {
        id: 1,
        title: 'item 2.1',
      },
      {
        id: 2,
        title: 'item 2.2',
      },
      {
        id: 3,
        title: 'item 2.3',
      },
    ],
  },
  {
    title: 'Section 3',
    color: 'green',
    data: [
      {
        id: 1,
        title: 'item 3.1',
      },
      {
        id: 2,
        title: 'item 3.2',
      },
      {
        id: 3,
        title: 'item 3.3',
      },
    ],
  },
];

export default class DemoProps extends Component {
  renderItem = ({item}) => {
    return <Text>{item.title}</Text>;
  };
  renderHeaderSectionList = ({section}) => {
    return (
      <Text
        style={{
          padding: 10,
          backgroundColor: section.color,
          fontWeight: '500',
        }}>
        {section.title}
      </Text>
    );
  };
  renderItemSectionList = ({item}) => {
    return (
      <Text style={{margin: 10, borderWidth: 1, padding: 20, borderRadius: 8}}>
        {item.title}
      </Text>
    );
  };
  render() {
    return (
      <View>
        {/* <RenderHeader title="hello" content="Hello1" />
        <FlatList data={dataFlatList} renderItem={this.renderItem} /> */}
        <SectionList
          sections={dataSectionList}
          renderSectionHeader={this.renderHeaderSectionList}
          renderItem={this.renderItemSectionList}
        />
      </View>
    );
  }
}
