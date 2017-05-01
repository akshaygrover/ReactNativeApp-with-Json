// code for ios!

// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  <View style={{flex: 1 }} >
  <Header headerText={'ALBUMS !'} />
  <AlbumList />
  </View>
);




// render on device
AppRegistry.registerComponent('albums', () => App);
