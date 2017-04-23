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
import { LayoutDefinition } from '../../common/commonjs';
import styles from '../../../styles/commercialstyles';

var {
  height,
  width
} = Dimensions.get('window');

export default class VTRContent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        vtrExploreTxt: {
            width: 0,
            height: 0,
            left: 0,
            top: 0
        },
      }
  }

  componentDidMount() {



  }

    render = () => {

      const vtrExploreHtmlTxt = '<div>experience the 2017 ninja<span class="sup">®</span> 650</div>'.toUpperCase();

        return (
            <View>
                <View id="vtrExperienceContainerId">

                    {/*<Text style={styles.debugText}>{Number.parseInt(width / 2, 10)}</Text>
                    <Text style={styles.debugText}>{Number.parseInt(this.state.ninjaDescription.width / 2, 10)}</Text>*/}

                    <View id="vtrExperience" style={this.getVTRExploreTxtStyle()}
                      onLayout={(event) => this.getVTRExploreTxtDimension(event)}>
                        <HTMLView value={vtrExploreHtmlTxt} stylesheet={vtrHTMLStyle} />
                    </View>

                </View>
            </View>
        );
    }

    getVTRExploreTxtDimension = (event) => {

      this.setState({ vtrExploreTxt: LayoutDefinition(event) });

    }

    getVTRExploreTxtStyle = () => {
      return {
          position: "absolute",
          padding: Number.parseInt(width / 2, 10) / 5,
          left: (width / 2) - (this.state.vtrExploreTxt.width / 2),
          top: 0,
       }
    }
}

const vtrHTMLStyle = StyleSheet.create({
  div: {
    color: '#fff',
    textAlign: "center",
    paddingTop: 7,
  },
});
