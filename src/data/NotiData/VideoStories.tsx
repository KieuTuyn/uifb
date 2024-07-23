import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';import Video from 'react-native-video'; // Hoặc import từ expo-av
import FastImage from 'react-native-fast-image';
import { createThumbnail } from "react-native-create-thumbnail";
import { ratioH, ratioW } from "../../ultis/RatioScale.tsx";

const VideoStoris = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [thumbnailUri, setThumbnailUri] = useState(null);

  const getThumbnail = async (videoUri) => {
    try {
      const { uri } = await createThumbnail({
        url: videoUri, // URL video
        time: 1000, // Lấy thumbnail tại giây thứ 1
        quality: 'low', // Chất lượng thumbnail
      });
      setThumbnailUri(uri);
    } catch (error) {
      console.error('Lỗi khi lấy thumbnail:', error);
    }
  };

    // Gọi hàm getThumbnail khi component được mount
    React.useEffect(() => {
      getThumbnail('https://file-examples.com/storage/fe7bf81a86668bb0a9d006b/2017/04/file_example_MP4_480_1_5MG.mp4'); // Thay thế bằng URL video của bạn
    }, []);

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.thumbnail} onPress={() => setIsFullScreen(true)}>
          {thumbnailUri ? (
            <FastImage
              source={{ uri: thumbnailUri }}
              style={styles.thumbnail}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.thumbnailLoading} /> // Hiển thị loading nếu chưa lấy được thumbnail
          )}
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isFullScreen}
          onRequestClose={() => setIsFullScreen(false)}
        >
          <View style={styles.fullScreenContainer}>
            <Video
              source={{ uri: 'https://file-examples.com/storage/fe7bf81a86668bb0a9d006b/2017/04/file_example_MP4_480_1_5MG.mp4' }} // Thay thế bằng URL video của bạn
              ref={videoRef}
              style={styles.fullScreenVideo}
              controls={false}
              paused={!isPlaying}
              resizeMode={'cover'}
            />

            <TouchableOpacity
              style={styles.closeFullScreenButton}
              onPress={() => setIsFullScreen(false)}
            >
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {

      alignItems: 'center',
      justifyContent: 'center',
    },
    thumbnail: {
      height:ratioH(180),
      width:ratioW(105),
    },
    thumbnailLoading: {
      height:ratioH(180),
      width:ratioW(105),
      backgroundColor: '#ccc', // Màu nền loading
      justifyContent: 'center',
      alignItems: 'center',
    },
    fullScreenContainer: {
      flex: 1,
      backgroundColor: 'black',
    },
    fullScreenVideo: {
      flex: 1,
    },
    closeFullScreenButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 16,
    },
  });

  export default VideoStoris;
