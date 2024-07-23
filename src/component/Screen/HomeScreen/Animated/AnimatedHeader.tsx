import * as React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, withTiming } from "react-native-reanimated";

const AnimatedHeader = ({scroll, scrollY, children }) => {
  const headerAnim = useAnimatedStyle(() => {
    const translateY = withTiming(scroll.value > 50 ? -100 : 0, { duration: 200 });

    return {
      transform: [
        {
          translateY: interpolate(
            scroll.value,
            [0, -200],
            [0, 200],
            Extrapolation.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <View style={styles.headerContainer}>
        <Animated.View style={[headerAnim]}>
          {children}
        </Animated.View>
    </View>

);
};
const styles = StyleSheet.create({

  headerContainer: {
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderWidth:0.2,
    borderStyle:'dotted',
    position:'absolute',
    backgroundColor:'white',

  },

});

export default AnimatedHeader;
