/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  FlatList,
  StyleSheet
} from 'react-native';
import Post from './components/Post';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class InstaluraMobile extends Component {
  render() {

    const fotos = [
      { id: 1, usuario: 'rafael' },
      { id: 2, usuario: 'alberto' },
      { id: 3, usuario: 'vitor' }
    ];

    return (
      <FlatList style={styles.container}
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({ item }) =>
          <Post foto={item} />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default () => {
  AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}