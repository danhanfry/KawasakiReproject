import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class CommercialScroller extends Component {

    render() {
        return (
            <View id="slideOneScroller" style={styles.container}>
                <View id="scrollIndicatorMask" style={styles.mask}>
                    <View id="slideOneArrow" style={styles.arrowDown}></View>
                        <Image id="slideOneGloss" style={styles.glossArrow} source={require("../../../../assets/slide1/scrollIndicator_gloss.png")} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        transform: [
            { scale: 0.7 },
        ],
        width: "auto"
    },
    mask: {
        width: 48,
        height: 48,
        overflow: "hidden",
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#000",
        zIndex: 500
    },
    arrowDown: {
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
        borderTopColor: "#4CBA41"
    },
    glossArrow: {
        position: "absolute",
        opacity: 0.5,
        width: 50,
        height: 50
    }
});
