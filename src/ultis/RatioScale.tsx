import { Dimensions} from 'react-native';

export const device_height = Dimensions.get('window').height;
export const device_width = Dimensions.get('window').width;

export const ratioW = (elementWidth: number) => {
  // automatically scales to width
  return (elementWidth * device_width) / 376;
}
export const ratioH = (elementHeight: number) => {
  // automatically scales to height
  return (elementHeight * device_height) / 812;
}
