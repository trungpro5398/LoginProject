import React from 'react';
import {View, StyleSheet, Text, Image, FlatList, Platform} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClockRotateLeft} from '@fortawesome/free-solid-svg-icons';

const Zaloheader = props => {
  renderItem = ({item}) => {
    return (
      <View style={styles.container_bottom_sub}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_top}>
        <FontAwesomeIcon icon={faClockRotateLeft} size={20} />
        <Text style={styles.container_top_text}>
          Danh sach tim kiem gan day
        </Text>
      </View>
      <View style={styles.container_bottom}>
        <FlatList
          data={props.data}
          renderItem={this.renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Platform.OS == 'ios' ? 54 : 20,
  },
  container_top: {
    flexDirection: 'row',
  },
  container_top_text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
  container_bottom: {
    marginTop: 10,
  },
  container_bottom_sub: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 37,
  },
});

export default Zaloheader;
