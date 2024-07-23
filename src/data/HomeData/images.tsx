import React from 'react';
import ScaleImage from '../../anomation/ScaleImage';
import { View } from "react-native";
import CreateImage from "../imagesData/createImage.tsx";

export const Imaged = () => {

  const images = [
    { id: 0, url: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg' },

  ];
  return (
    <View>
      <CreateImage images={images} />

    </View>

  );
};
export const Image1 = () => {
  const images = [
    { id: 1, url: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg' },

  ];
  return (
    <View>
      <ScaleImage images={images} />
    </View>
  );
};

export const Image2 = () => {
  const images = [
    { id: 2, url: 'https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg' },

  ];
  return (
    <View>
      <ScaleImage images={images} />
    </View>
  );
};
export const Image3 = () => {
  const images = [
    { id: 3, url: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhat--Dem-Sai-G.jpg' },

  ];
  return (
    <View>
      <ScaleImage images={images} />
    </View>
  );
};
export const Image4= () => {
  const images = [
    { id: 4, url: 'https://vcdn1-vnexpress.vnecdn.net/2019/07/30/anh-thien-nhien-dep-thang-7-1564483719.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Nl3znv-VRtPyhJYhLwwRfA' },

  ];
  return (
    <View>
      <ScaleImage images={images} />
    </View>
  );
};
export const Image5= () => {
  const images = [
    { id: 5, url: 'https://i.pinimg.com/originals/42/a1/06/42a1068eb0bcdb65da6e60bf49af66fe.jpg' },

  ];
  return (
    <View>
      <ScaleImage images={images} />
    </View>
  );
};
export const Image6= () => {
  const images = [
    { id: 6, url: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474111PXL/anh-dep-nhat-the-gioi-ve-thien-nhien_041753462.jpg' },

  ];
  return (
    <View>
      <ScaleImage images={images} />
    </View>
  );
};
