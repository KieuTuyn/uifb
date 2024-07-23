import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import Likepost from '../assets/icons/likepost.svg';
import LikepostBlue from '../assets/icons/likepostBlue.svg';
import Commentpost from '../assets/icons/commentpost.svg';
import CommentpostBlue from '../assets/icons/commentpostBlue.svg';
import Sharepost from '../assets/icons/sharepost.svg';
import SharepostBlue from '../assets/icons/sharepostBlue.svg';
import Home from '../assets/icons/home.svg';
import HomeBlue from '../assets/icons/homeBlue.svg';
import { avatar1 } from "../data/imagesData/imageAvatar.tsx";
export default function ScaleIcon({ iconType }) {
  const [isLike, setIsLike] = useState(false);
  const scale = useSharedValue(1);

  const scaleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  const handlePress = () => {
    setIsLike(!isLike);

    scale.value = withSpring(1.5, {}, () => {
      scale.value = withSpring(1);
    })
  };
  const renderIcon = (iconType, isLike) => {
    switch (iconType) {
      case 'likepost':
        return isLike ? <LikepostBlue /> : <Likepost />;
      case 'commentpost':
        return isLike ? <CommentpostBlue/> : <Commentpost/>;
      case 'sharepost':
        return isLike ? <SharepostBlue/> : <Sharepost/>;
      case 'home':
        return isLike ? <HomeBlue/> : <Home/>;
      default:
        return null;
    }
  };
  return (
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={handlePress}
        hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
      >
        <Animated.View style={scaleStyles}>
          {renderIcon(iconType, isLike)}
        </Animated.View>
      </TouchableOpacity>
    </View>

  );
}
