import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons';

const Zalobody = props => {
  renderItem = ({item}) => {
    return (
      <View style={styles.container_bottom_sub}>
        <View style={styles.container_bottom_sub_left}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.container_bottom_sub_text}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>15 common friends</Text>
          </View>
        </View>
        <View style={styles.container_bottom_sub_button}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Ket ban</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.container_top}>
        <FontAwesomeIcon icon={faUserGroup} size={20} />
        <Text style={styles.container_top_text}>Goi y ket ban</Text>
      </View>
      <View style={styles.container_bottom}>
        <FlatList
          data={props.data}
          renderItem={this.renderItem}
          vertical
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    backgroundColor: '#FFD2D2',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
  },
  container_bottom_sub_left: {
    flexDirection: 'row',
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 37,
  },
  container_bottom_sub_text: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
  },
  container_bottom_sub_button: {
    alignSelf: 'center',
    backgroundColor: '#809FFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 25,
  },
  button_text: {
    fontSize: 16,
  },
});
export default Zalobody;
