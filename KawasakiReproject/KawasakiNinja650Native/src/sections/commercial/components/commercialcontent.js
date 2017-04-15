import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} from 'react-native';

export default class CommercialContent extends Component {

    render() {
        return (
            <View>
                <View id="commericialContainerId">

                    <View id="commericalNinjaNameYearId" style={styles.commericalTextYear}>
                          <Image source={require("../../../../assets/logo_2017.png")} />
                    </View>

                    <View id="commericalNinjaNameId" style={styles.commericaLogo}>
                        <Image source={require("../../../../assets/logo_ninja.png")} />
                    </View>

                    <View id="commericalNinjaLifeGreenHrId" style={styles.commericalHr}>
                      <Image source={require("../../../../assets/green_hr.png")} />
                    </View>

                    <View id="commericalNinjaLifeDescriptionId" style={styles.commericalLifeDescription}>
                        <WebView source={{html: 'Superb balance and exciting performance mark the strengths of the new ' +
                              'Ninja<span class="cirlce-r">®</span> 650 sportbike.Sporty handling and aggressive styling ' +
                              'stay true to Ninja roots while comfort and convenience make the <br />Ninja 650 an ' +
                              'exceptional everyday ride.'}} />
                    </View>

                    <View id="commericalNinjaLifePlayArrow" style={styles.commericalLifeArrow}>
                        <View id="playArrowMask">
                              <Image source={require("../../../../assets/slide1/playButton_ActionArrow.png")} />
                              <Image id="PlayButtonGloss" source={require("../../../../assets/slide1/playButton_ActionImg.png")} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    commericalTextYear: {
        position: "absolute",
        padding: 20
    },
    commericalLogo: {
        position: "absolute",
        padding: 20
    },
    commericalHr: {
        position: "absolute",
        padding: 20
    },
    commericalLifeDescription: {
        position: "absolute",
        padding: 20
    },
    commericalLifeArrow: {
        position: "absolute",
        padding: 20
    },
});
