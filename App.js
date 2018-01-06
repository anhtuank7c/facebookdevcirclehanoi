/**
 * Sample Facebook circle dev Hanoi
 * https://github.com/facebook/react-native
 * https://goo.gl/fRSH6Y
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './src/container/Header';
import NewsFeed from './src/container/NewsFeed';

export default class App extends Component {
  state = {
    mountNewsFeed: true
  };

  refreshAll = () => {
    this.forceUpdate();
  };

  toggleMountNewsFeed = () => {
    this.setState(prev => ({ mountNewsFeed: !prev.mountNewsFeed }));
  };

  render() {
    return (
      <View style={{ backgroundColor: '#ccc', flex: 1 }}>
        <Header
          refreshAll={this.refreshAll}
          toggleMountNewsFeed={this.toggleMountNewsFeed}
        />
        {this.state.mountNewsFeed ? <NewsFeed /> : null}
      </View>
    );
  }
}
