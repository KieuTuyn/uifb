import React, { useState } from "react";
import { View, Image, StyleSheet, Modal, TouchableOpacity, TouchableHighlight } from "react-native";
import { ratioH, ratioW } from "../ultis/RatioScale.tsx";
import ImageViewer from 'react-native-image-zoom-viewer';
import Circle_ring from "../assets/icons/circle_ring.svg";
import { avatar1, avatar2 } from "../data/imagesData/imageAvatar.tsx";
const ScaleImage = ({ images }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagePress = (index) => {
    setSelectedImageIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableHighlight key={index} onPress={() => handleImagePress(index)}>
          <Image source={{ uri: image.url }} style={styles.thumbnail} />

        </TouchableHighlight>
      ))}
      <View style={{position:'absolute',top:ratioH(5),left:ratioW(5),alignItems:'center',justifyContent:'center'}}>
        <Circle_ring />
        <View style={{position:'absolute'}}>
          {avatar2()}
        </View>
      </View>

      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageViewer
          imageUrls={images.map(image => ({ url: image.url }))}
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
    width: ratioW(105),
    height: ratioH(180),
    borderRadius: ratioH(16),
  },
});

export default ScaleImage;
