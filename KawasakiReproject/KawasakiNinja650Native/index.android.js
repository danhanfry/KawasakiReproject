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

import CommercialIndex from './src/sections/commercial/commercialindex';
import VTRIndex from './src/sections/vtr/vtrindex';
import BackgroundVideo from './src/sections/common/backgroundvideo';

export default class KawasakiNinja650Native extends Component {

  constructor(props) {
    super(props);
    this.state = {
        showCommercial: true,
        showVTR: false,
        showExplore: false,
        showSocial: false,
        showTools: false,
    }
  }

  render = () => {
    return (
      <View style={styles.container}>
          {
            this.state.showCommercial &&
            <CommercialIndex updateState={this.makeVTRVisible} />
          }

          {
            this.state.showVTR &&
            <VTRIndex />
          }

      </View>
    );
  }

  makeCommercialVisible = () => {
    this.setState({
      showCommercial: true,
      showVTR: false,
      showExplore: false,
      showSocial: false,
      showTools: false,
    });
  }

  makeVTRVisible = () => {
    this.setState({
      showCommercial: false,
      showVTR: true,
      showExplore: false,
      showSocial: false,
      showTools: false,
    });
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
