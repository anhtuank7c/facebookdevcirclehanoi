import React from 'react';
import { FlatList, View } from 'react-native';
import data from './data.json';
import Item from './Item';
import Separator from './Separator';

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    console.log('Mounting: 1_constructor');
  }

  componentWillMount() {
    console.log('Mounting: 2_componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('Updating: 1_componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('Updating: 2_shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('Updating: 3_shouldComponentUpdate');
  }

  componentDidUpdate() {
    console.log('Updating: 5_componentDidUpdate');
  }

  componentDidMount() {
    console.log('Mounting: 4_componentDidMount');
  }

  componentWillUnmount() {
    console.log('Unmount: componentWillUnmount');
  }

  render() {
    console.log('Mounting: 3_render');
    console.log('Updating: 4_render');
    return (
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Item item={item} />}
        ItemSeparatorComponent={() => <Separator />}
      />
    );
  }
}
