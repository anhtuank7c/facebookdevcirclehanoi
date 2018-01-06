import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends React.Component {
  static propTypes = {
    refreshAll: PropTypes.func.isRequired,
    toggleMountNewsFeed: PropTypes.func.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.toggleMountNewsFeed}
        >
          <Text>Mount/Unmount</Text>
        </TouchableOpacity>
        <Text style={styles.title}>News Feed</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.refreshAll}>
          <Icon name="refresh" color="#999" style={{ fontSize: 18 }} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    height: 56,
    ...Platform.select({
      ios: {
        paddingTop: 20
      }
    }),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#666'
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  }
};
