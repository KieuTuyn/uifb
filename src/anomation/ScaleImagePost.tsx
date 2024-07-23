import React, { useState } from "react";
import { View, Image, StyleSheet, Modal, TouchableOpacity, TouchableHighlight } from "react-native";
import { ratioH, ratioW } from "../ultis/RatioScale.tsx";
import ImageViewer from 'react-native-image-zoom-viewer';

const ScaleImage = ({ images }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };
  const imageUrls = images.map(image => ({
    url: image.uri ? image.uri : Image.resolveAssetSource(image.src).uri
  }));
  return (
    <View style={styles.container}>


      {images.map((image, index) => (
        <TouchableHighlight key={index} onPress={() => handleImagePress(index)}>
          <Image source={image.src ? image.src : { uri: image.uri }}  style={styles.thumbnail} />
        </TouchableHighlight>
      ))}
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageViewer
          imageUrls={imageUrls}
          index={selectedImageIndex}
          onCancel={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: ratioW(376),
    height: ratioH(250),
  },

});

export default ScaleImage;
