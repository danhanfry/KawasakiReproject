import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  WebView,
  Dimensions
} from 'react-native';

var {
  height: deviceHeight
} = Dimensions.get('window');

export default class CommercialContent extends Component {

  componentDidMount() {

  }

    render() {
        return (
            <View>
                <View id="commericialContainerId">

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
                        <WebView source={{html: 'Superb balance and exciting performance mark the strengths of the new ' +
                              'Ninja<span class="cirlce-r">®</span> 650 sportbike.Sporty handling and aggressive styling ' +
                              'stay true to Ninja roots while comfort and convenience make the <br />Ninja 650 an ' +
                              'exceptional everyday ride.'}} />
                    </View>

                    {/*<View id="commericalNinjaLifePlayArrow" style={this.getNinjaArrow()}>
                        <View id="playArrowMask">
                              <Image source={require("../../../../assets/slide1/playButton_ActionArrow.png")} />
                              <Image id="PlayButtonGloss" source={require("../../../../assets/slide1/playButton_ActionImg.png")} />
                        </View>
                    </View>*/}
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
          margin: 0,
          width: "100%",
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

    getNinjaArrow() {
      return {
          position: "absolute",
          padding: 20,
          left: 138,
          top: 201,
       }
    }
}
