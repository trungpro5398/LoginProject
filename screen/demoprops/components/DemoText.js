import {Text, View} from 'react-native';
import React, {Component} from 'react';

export const RenderHeader = props => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.content}</Text>
    </View>
  );
};

// neu co default khong co {}
// ten ham phai viet hoa chu cai dau moi nhan la mot components
// khong chi nhan la function
