import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

// Components
import Header    from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
