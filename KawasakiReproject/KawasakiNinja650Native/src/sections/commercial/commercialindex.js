import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import CommercialContent from './components/commercialcontent';
import CommercialScroller from './components/commercialscroller';

export default class CommercialIndex extends Component {

  constructor(props) {
      super(props);
  }

    render() {
        return (
            <View>
                <CommercialContent />
                <CommercialScroller />
            </View>
        );
    }
}
