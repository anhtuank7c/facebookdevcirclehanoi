import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import LikeButton from './LikeButton';

export default class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    console.log('renderItem', item.id);
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{item.content}</Text>
        <LikeButton />
      </View>
    );
  }
}

const styles = {
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  content: {
    marginBottom: 10
  }
};
