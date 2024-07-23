import React from 'react';
import { View, StyleSheet, Text, Button } from "react-native";
import ControlBar from "../HomeScreen/Element/ControlBar.tsx";

const VideoScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Button
        title="Go to HomeScreen"
        // onPress={() => navigation.goBack()}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default VideoScreen;
