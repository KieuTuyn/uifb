import { Image, View } from "react-native";
import * as React from "react";
import { ratioH,ratioW } from "../../ultis/RatioScale.tsx"
import CreateImage from "./createImage.tsx";
import ScaleImagePost from "../../anomation/ScaleImagePost.tsx";
const renderBackgroundImage = (source, height, width, borderRadius) => {
  return (
    <Image
      source={source}
      style={{
        height: ratioH(height),
        width: ratioW(width),
        borderRadius: borderRadius,
      }}
    />
  );
};


export const imageP1 = () => {
  // return renderBackgroundImage(require('../../assets/images/avatarUser.png'), 250, 376, 0);

  const images = [
    { src: require("../../assets/images/avatarUser.png")},
  ]
  return (
    <View >
      <ScaleImagePost images={images} />

    </View>

  );
};
export const imageP2 = () => {

  const images = [
    { uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg' },

  ]
  return (
    <View >
      <ScaleImagePost images={images} />

    </View>

  );
};

