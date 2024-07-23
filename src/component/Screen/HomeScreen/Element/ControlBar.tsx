import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Svg, {SvgUri} from 'react-native-svg'; // Import thư viện react-native-svg
import Tv_mode from '../../../../assets/icons/tv_mode.svg';
import Ring from '../../../../assets/icons/ring.svg';
import Setting from '../../../../assets/icons/setting.svg';
import Home from '../../../../assets/icons/home.svg';
import Group_taskbar from '../../../../assets/icons/group_taskbar.svg';
import Marketplace from '../../../../assets/icons/marketplace.svg';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {ratioH, ratioW} from '../../../../ultis/RatioScale.tsx';
import {useNavigation} from '@react-navigation/native';
import MenuScreen from '../../MenuScreen/MenuScreen.tsx';
import ScaleIcon from '../../../../anomation/ScaleIcon.tsx';

const ControlBar = ({scrollY}) => {
  const navigation = useNavigation();
  const tabBarAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 150], // Adjust these values if needed
            [0, 150], // 70 là chiều cao của tab bar, ẩn hoàn toàn khi scroll 70 pixel
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <Animated.View style={[styles.taskbar, tabBarAnim]}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={styles.box}>
          <Home />
          <Text style={styles.text}>Trang chủ</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')}>
        <View style={styles.box}>
          <Tv_mode />
          <Text style={styles.text}>Video</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('FriendScreen')}>
        <View style={styles.box}>
          <Group_taskbar />
          <Text style={styles.text}>Bạn bè</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MarketplaceScreen')}>
        <View style={styles.box}>
          <Marketplace />
          <Text style={styles.text}>Marketplace</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationScreen')}>
        <View style={styles.box}>
          <Ring />
          <Text style={styles.text}>Thông báo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
        <View style={styles.box}>
          <Setting />
          <Text style={styles.text}>Menu</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    height: ratioH(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: ratioW(62),
    height: ratioH(40),
  },
  text: {
    fontSize: ratioW(10),
  },
});

export default ControlBar;
