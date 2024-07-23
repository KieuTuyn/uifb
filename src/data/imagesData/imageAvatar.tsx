import { Image } from "react-native";
import * as React from "react";
import { ratioH,ratioW } from "../../ultis/RatioScale.tsx"
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


export const avatar1 = () => {
  return renderBackgroundImage(require('../../assets/images/avatarUser.png'), 40, 40, 80);
};
export const avatar2 = () => {
  return renderBackgroundImage(require('../../assets/images/avatarUser.png'), 32, 32, 80);
};
export const avatar3 = () => {
  return renderBackgroundImage(require('../../assets/images/avatarUser.png'), 60, 60, 120);
};
export const avatar4 = () => {
  return renderBackgroundImage(require('../../assets/images/avatar_default.jpg'), 60, 60, 120);
};
export const avatarN = () => {
  return renderBackgroundImage(require('../../assets/images/avatarUser.png'), 24, 24, 48);
};
