/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CommercialContent from './src/sections/commercial/components/commercialcontent';
import CommercialScroller from './src/sections/commercial/components/commercialscroller';
import BackgroundVideo from './src/sections/backgroundvideo';

export default class KawasakiNinja650Native extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View>
            <CommercialContent />
             <CommercialScroller />
         </View>

         <View style={styles.videocontainer}>
          {/*<BackgroundVideo videourl={require('./assets/video/small.mp4')} />*/}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videocontainer: {
    flex: 1
  },
});

AppRegistry.registerComponent('KawasakiNinja650Native', () => KawasakiNinja650Native);
