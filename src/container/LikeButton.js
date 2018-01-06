import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LikeButton extends React.Component {
  state = {
    likeStatus: false
  };

  render() {
    const icon = this.state.likeStatus ? 'thumbs-up' : 'thumbs-o-up';
    console.log('renderLikeButton');
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.setState(prev => ({ likeStatus: !prev.likeStatus }))
        }
      >
        <Icon
          name={icon}
          color={this.state.likeStatus ? '#3B5998' : '#999'}
          style={{ fontSize: 24 }}
        />
      </TouchableOpacity>
    );
  }
}
