import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';

import styles from '../../../styles/commercialstyles';

var {
  height,
  width
} = Dimensions.get('window');

export default class CommercialScroller extends Component {

  constructor(props) {
      super(props);
      this.state = {
            ninjascrollermaskbox: {
                width: 0,
                height: 0,
            },
        };
  }

  componentDidMount = () => {
      {/*Alert.alert(
         'Title',
         'Alert message...',
         [
            {text: 'Maybe', onPress: () => alert(this.props.updateState)},
            {text: 'No', onPress: this.noPressed, style: 'cancel'},
            {text: 'Yes', onPress: this.yesPressed},
         ]
      )*/}
   }

    render = () => {
        return (
          <TouchableOpacity style={this.getNinjaScrollStyle()} onPress={this.props.updateState}>
            <View id="slideOneScroller" onLayout={(event) => this.getNinjaScrollerMask(event)}>

                <View id="scrollIndicatorMask" style={styles.mask}>
                    <View id="slideOneArrow" style={this.getNinjaArrowDown()}></View>
                </View>

            </View>
          </TouchableOpacity>

        );
    }

    getNinjaScrollerMask = (event) => {

      const ninjaScrollerCalcuated = {
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height,
      };

      this.setState({ ninjascrollermaskbox: ninjaScrollerCalcuated });
    }

    getNinjaScrollStyle = () => {
      return {
          transform: [
              { scale: 0.7 },
          ],
          width: "auto",
          position: "absolute",
          top: 582,
          padding: 20,
          left: (width / 2) - (this.state.ninjascrollermaskbox.width),
       }
    }

    getNinjaArrowDown = () => {
      return {
        zIndex: 100,
        position: "absolute",
        marginLeft: 16,
        width: 0,
        height: 0,
        borderLeftWidth: 8,
        borderLeftColor: "transparent",
        borderRightWidth: 8,
        borderRightColor: "transparent",
        borderTopWidth: 8,
        borderTopColor: "#4CBA41",
        top: (this.state.ninjascrollermaskbox.height / 3),
       }
    }
}
