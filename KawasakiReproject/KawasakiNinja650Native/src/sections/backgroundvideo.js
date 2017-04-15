import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  View
} from 'react-native'
import Video from 'react-native-video'

class VideoAndroid extends Component {

  render () {
    return (
      <Video
        repeat={false}
        resizeMode='cover'
        paused={true}
        source={this.props.videourl}
        style={styles.backgroundVideo}
      />
    )
  }
}

// FIXME: Stop branching by platform once iOS renders video properly
//   using the asset system. Also remove video asset from iOS Copy Bundle
//   Resources from target Build Phases upon refactor.
export default class BackgroundVideo extends Component {
  render () {
    return (
      <View style={styles.container}>
        <VideoAndroid videourl={this.props.videourl} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
})
