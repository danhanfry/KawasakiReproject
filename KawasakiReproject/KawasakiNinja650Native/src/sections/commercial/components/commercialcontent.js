import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  WebView,
  Dimensions
} from 'react-native';

import HTMLView from 'react-native-htmlview';

var {
  height,
  width
} = Dimensions.get('window');

export default class CommercialContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ninjaYearLogoDimension: {
        width: 0,
        left: 0,
        top: 0
      },
      ninjaLogoDimension: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      },
      ninjaHrDimension: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      },
    };
  }

  componentDidMount() {

  }

    render() {

      const ninjaDescription = '<div>Superb balance and exciting performance mark the strengths of the new Ninja<span style="display: inline-block;font-size: 10px;vertical-align: top;margin-top: -4px;">&reg;</span> 650 sportbike.Sporty handling and aggressive styling stay true to Ninja roots while comfort and convenience make the Ninja 650 an exceptional everyday ride.</div>'

        return (
            <View>
                <View id="commericialContainerId">

                    <View id="commericalNinjaNameYearId" style={this.getNinjaYearStyle()}>
                          <Image source={require("../../../../assets/logo_2017.png")} onLayout={(event) => this.getNinjaYearDimensions(event)} />
                    </View>

                    <View id="commericalNinjaNameId" style={this.getNinjaModelYear()}>
                        <Image source={require("../../../../assets/logo_ninja.png")}
                              style={this.getNinjaModelYearImg()}
                              onLayout={(event) => this.getNinjaLogoDimensions(event)} />
                    </View>

                    <View id="commericalNinjaLifeGreenHrId" style={this.getNinjaHr()}>
                      <Image source={require("../../../../assets/green_hr.png")} onLayout={(event) => this.getNinjaHrDimensions(event)} />
                    </View>

                    <View id="commericalNinjaLifeDescriptionId" style={this.getNinjaDescription()}>
                      <HTMLView value={ninjaDescription} stylesheet={ninjaDescriptionStyles} />
                    </View>

                    <View id="commericalNinjaLifePlayArrow" style={this.getNinjaArrow()}>
                        <View id="playArrowMask" style={this.getNinjaArrowContainer()}>
                              <Image style={this.getNinjaArrowPlay()} source={require("../../../../assets/slide1/playButton_ActionArrow.png")} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    getNinjaYearDimensions(event) {

      const ninjaYearDimensionCalcuated = {
        width: event.nativeEvent.layout.width,
        left: event.nativeEvent.layout.x,
        top: event.nativeEvent.layout.y
      };

      this.setState({ ninjaYearLogoDimension: ninjaYearDimensionCalcuated });
    }

    getNinjaLogoDimensions(event) {

      const ninjaLogoDimensionCalcuated = {
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height,
        left: event.nativeEvent.layout.x,
        top: event.nativeEvent.layout.y
      };

      this.setState({ ninjaLogoDimension: ninjaLogoDimensionCalcuated });
    }

    getNinjaHrDimensions(event) {
      const ninjaHrDimensionCalcuated = {
        width: event.nativeEvent.layout.width,
        height: event.nativeEvent.layout.height,
        left: event.nativeEvent.layout.x,
        top: event.nativeEvent.layout.y
      };

      this.setState({ ninjaHrDimension: ninjaHrDimensionCalcuated });
    }

    getNinjaYearStyle() {
      return {
          position: "absolute",
          padding: 20,
          left: (width / 2) - (this.state.ninjaYearLogoDimension.width / 2),
          top: 87,
       }
    }

    getNinjaModelYear() {
      return {
          position: "absolute",
          padding: 20,
          top: (this.state.ninjaYearLogoDimension.top + this.state.ninjaLogoDimension.height + 35),
          left: -15
       }
    }

    getNinjaModelYearImg() {
      return {
          position: "relative",
          flex: 1,
          width: width,
          height: 60,
          resizeMode: 'contain'
         }
    }

    getNinjaHr() {
      return {
          position: "absolute",
          padding: 20,
          left: (width / 2) - (this.state.ninjaHrDimension.width / 2),
          top: (this.state.ninjaLogoDimension.top + this.state.ninjaLogoDimension.height + this.state.ninjaYearLogoDimension.top + 75),
       }
    }

    getNinjaDescription() {
      return {
          position: "absolute",
          padding: 20,
          left: 12,
          top: 319,
       }
    }

    getNinjaArrowContainer() {
        return {
          height: 100,
          width: 100,
          overflow: 'hidden',
          borderRadius: 6,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#fff",
        }
    }

    getNinjaArrowPlay() {
      return {
        position: "absolute",
        top: 30,
        left: 36
      }
    }

    getNinjaArrow() {
      return {
          position: "absolute",
          padding: 20,
          left: 138,
          top: 201,
       }
    }
}

const styles = StyleSheet.create({
    debugText: {
        color: "#fff",
    },
    textColor: {
      color: "#fff",
    }
});

const ninjaDescriptionStyles = StyleSheet.create({
  div: {
    color: '#fff',
  },
});
