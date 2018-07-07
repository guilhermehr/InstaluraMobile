/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  FlatList
} from 'react-native';
import Post from './src/components/Post';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class InstaluraMobile extends Component {
  render() {

    const fotos = [
      { id: 1, usuario: 'rafael' },
      { id: 2, usuario: 'alberto' },
      { id: 3, usuario: 'vitor' }
    ];

    return (
      <FlatList style={{ marginTop: 20 }}
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({ item }) =>
          <Post foto={item} />
        }
      />
    );
  }
}