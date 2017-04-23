import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import VTRContent from './components/vtrcontent';

export default class VTRIndex extends Component {

  constructor(props) {
      super(props);
  }

    render() {
        return (
            <View>
                <VTRContent />
            </View>
        );
    }
}
