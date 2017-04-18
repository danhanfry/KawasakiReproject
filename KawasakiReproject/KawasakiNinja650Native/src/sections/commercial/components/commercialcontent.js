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
  }

  componentDidMount() {

  }

    render() {

      const ninjaDescription = '<div>Superb balance and exciting performance mark the strengths of the new Ninja<span class="cirlce-r">®</span> 650 sportbike.Sporty handling and aggressive styling stay true to Ninja roots while comfort and convenience make the <br />Ninja 650 an exceptional everyday ride.</div>'

        return (
            <View>
                <View id="commericialContainerId">

                    <Text style={styles.debugText}>{width}</Text>
                    <View id="commericalNinjaNameYearId" style={this.getNinjaYearStyle()}>
                          <Image source={require("../../../../assets/logo_2017.png")} />
                    </View>

                    <View id="commericalNinjaNameId" style={this.getNinjaModelYear()}>
                        <Image source={require("../../../../assets/logo_ninja.png")} style={this.getNinjaModelYearImg()} />
                    </View>

                    <View id="commericalNinjaLifeGreenHrId" style={this.getNinjaHr()}>
                      <Image source={require("../../../../assets/green_hr.png")} />
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

    getNinjaYearStyle() {
      return {
          position: "absolute",
          padding: 20,
          left: 170,
          top: 87,
       }
    }

    getNinjaModelYear() {
      return {
          position: "absolute",
          padding: 20,
          top: 105,
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
          left: 145,
          top: 178,
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
