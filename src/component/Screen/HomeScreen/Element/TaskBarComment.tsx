import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Camera_cm from '../../../../assets/icons/camera_cm.svg';
import Emoji_cm from '../../../../assets/icons/emoji_cm.svg';
import Gif_cm from '../../../../assets/icons/gif_cm.svg';
import Man_cm from '../../../../assets/icons/man_cm.svg';
import { ratioH, ratioW } from "../../../../ultis/RatioScale.tsx";

const TaskBarComment = () => {
  return (
    <View style={styles.container}>
        <Camera_cm />
        <View style={styles.searchBar}>
          <TextInput
            style={styles.textI}
            placeholder={'Viết bình luận công khai...'}
          />
          <View style={styles.icon}>
            <Man_cm />
            <Gif_cm />
            <Emoji_cm />
          </View>

        </View>
      </View>


  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:ratioH(80),
    width:'100%',
    gap:ratioW(15),
    paddingLeft:ratioW(15),
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    backgroundColor:'white',
    borderWidth:0.8,
    borderColor:'gray',
    paddingBottom:ratioH(20),
    alignItems:'center'
  },
  searchBar: {
    flexDirection:'row',
    width:ratioW(300),
    height:ratioH(40),
    borderRadius:20,
    backgroundColor:'#cccccc',

alignItems:'center'
  },
  textI: {
    fontSize:ratioH(14),
    paddingLeft:10
  },
  icon:{
    position:'absolute',
    right:ratioW(60),
    width:ratioW(40),
    flexDirection:'row',
    gap:5
  }
});
export default TaskBarComment;
