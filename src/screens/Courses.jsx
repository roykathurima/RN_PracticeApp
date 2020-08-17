import React, { Component } from "react";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class Courses extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            margin: 10,
            borderRadius: 25,
            backgroundColor: "#000",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VideoPlayer
            videoProps={{
              shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: { localUri: "H:/Users/Roy/Downloads/preacher.mp4" },
              // source: {
              //   uri:
              //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              // },
            }}
            width={350}
            height={150}
            inFullscreen={true}
          />
          <Text
            style={{
              padding: 5,
              borderRadius: 10,
              alignSelf: "flex-start",
              marginLeft: 20,
              fontWeight: "bold",
              marginVertical: 10,
              backgroundColor: "#ccf",
            }}
          >
            Tutorial 1: Introduction to Health and Social Care
          </Text>
        </View>

        {/* http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4 
        http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4*/}
        {/* <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%", height: 200 }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
