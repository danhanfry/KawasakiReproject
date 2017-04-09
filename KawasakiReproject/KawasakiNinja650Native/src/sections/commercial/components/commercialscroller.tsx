/// <reference path="../../../interfaces/interfaces.d.ts" />

import React, { Component } from 'react';

import {
	StyleSheet,
 	Text,
  	View,
	Image
} from 'react-native';

export default class CommercialScroller extends React.Component<IEmptyProperties, IEmptyStates> {
	render() {

		const styles = StyleSheet.create({
			container: {
				transform: [
					{ scale: 0.7 },
				],
				width: 'auto'
			},
			mask: {
				width: 48,
				height: 48,
				overflow: 'hidden',
				borderRadius: 3,
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: '#fff',
				zIndex: 500
			},
			arrowDown: {
				zIndex: 100,
				position: 'absolute',
				marginLeft: 16
			},
			glossArrow: {
				position: 'absolute',
				opacity: 0.5,
				width: 50,
				height: 50
			}
		});

		return (

			<View id="slideOneScroller" style={styles.container}>
					<View id="scrollIndicatorMask" style={styles.mask}>
						<View id="slideOneArrow" style={styles.arrowDown}></View>
						 <Image style={styles.glossArrow}
						 	source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />

						 <Image id="slideOneGloss" style={styles.glossArrow}
						 	source={{uri: 'http://kawasaki.com/ninja650experience/assets/green_hr.png'}} />
					</View>
            </View>

		);

	}
}