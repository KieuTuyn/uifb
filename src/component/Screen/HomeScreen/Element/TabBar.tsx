import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, Dimensions
} from "react-native";

import { ratioH, ratioW } from '../../../../ultis/RatioScale.tsx';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Home from '../../../../assets/icons/home.svg';
import Tv_mode from '../../../../assets/icons/tv_mode.svg';
import Group_taskbar from '../../../../assets/icons/group_taskbar.svg';
import Marketplace from '../../../../assets/icons/marketplace.svg';
import Ring from '../../../../assets/icons/ring.svg';
import Setting from '../../../../assets/icons/setting.svg';
import { useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
const { width } = Dimensions.get('window');

const TAB_WIDTH = width/6; // Đảm bảo độ rộng của mỗi tab là 60


function MyTabBar({ state, descriptors, scrollY,navigation }) {
  const startingPos = (-171);
  const dotWidth = useSharedValue(2);
  const dotHeight = useSharedValue(60);
  const translateX = useSharedValue(0);
  const tabBarAnim = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 200],
            [0, 200],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });

  const tabBarStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 200],
      [1, 0],
      Extrapolation.CLAMP,
    );
    return {
      opacity,
    };
  });

  const progressStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
    // width: interpolate(dotWidth.value, [60, 60, 60], [60, 60 ,60]),
    // height: dotHeight.value,
  }));

  useEffect(() => {
    translateX.value = withTiming(startingPos + state.index * TAB_WIDTH , { duration: 50 });

    dotWidth.value = withTiming(2, { duration: 50 })
    dotHeight.value = withTiming(2, { duration: 50 })


  }, [state.index]);

  const renderIcon = routeName => {
    switch (routeName) {
      case 'Trang chủ':
        return <Home />;
      case 'Video':
        return <Tv_mode />;
      case 'Bạn bè':
        return <Group_taskbar />;
      case 'Marketplace':
        return <Marketplace />;
      case 'Thông báo':
        return <Ring />;
      case 'Menu':
        return <Setting />;
      default:
        return null;
    }
  };

  return (

      <Animated.View
        style={[styles.Container, tabBarAnim, tabBarStyle]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}>
              <View style={styles.tabItem}>
                {renderIcon(route.name)}
                <Text style={{ color: isFocused ? 'blue' : '#222', fontSize: 12 }}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <Animated.View style={[styles.progressIndicator, progressStyle]} />
      </Animated.View>


  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 0.2,
    borderStyle: 'dotted',
  },
  tabItem: {
    alignItems: 'center',
    height: 60,
    width: TAB_WIDTH,
    marginTop: ratioH(20),

  },
  progressIndicator: {
    position: 'absolute',
    top: 0,
    height: 2,
    backgroundColor: 'blue',
    borderRadius: 2,
    width: TAB_WIDTH,
  },
});

export default MyTabBar;
