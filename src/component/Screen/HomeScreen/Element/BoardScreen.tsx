import { useNavigation } from "@react-navigation/native";
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import BoardingData from "../../../../data/HomeData/BoardingData";
import { ratioH, ratioW } from "../../../../ultis/RatioScale.tsx";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import VideoStoris from '../../../../data/NotiData/VideoStories.tsx';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image1, Imaged } from "../../../../data/HomeData/images.tsx";
import { useState } from "react";
import CreatePostHome from "./CreatePostHome.tsx";

const BoardHome = () => {
const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator();

const renderItem = ({ item }) => (

  <TouchableOpacity
    activeOpacity={0.8}
  >
    <View style={styles.itemBoard} >
      <View >
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} >
          {item.imageB }
        </TouchableOpacity>

      </View>

      <View style={{
        flexDirection:'row',
        position:'absolute',
        alignItems: 'center',
        bottom:5,
        gap:5}}>
        {/*{item.icon}*/}
        <Text style={[styles.textItemBoard, item.text === 'Tạo Tin' ? styles.textBlack : styles.textWhite]}>
          {item.text}
        </Text>
      </View>

    </View>
  </TouchableOpacity>

);

  return(

    <View style={styles.ContainerBoard}>
      <View style={{height:ratioH(5),
        width:'100%',
        backgroundColor:'#a8a8a8'}}>
      </View>
      <View style={styles.Board}>

        <FlatList
          data={BoardingData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal:ratioW(10)}}
        />
      </View>

    </View>

  )
}

const styles =StyleSheet.create({
  ContainerBoard:{
    flexDirection:'column',
    height:ratioH(205),
    width:'auto',
    top:20,

  },
  Board:{
    height:ratioH(205),
    width:'auto',
    flexDirection:'row',

  },
  itemBoard:{
    top:ratioH(10),
    height:ratioH(180),
    width:ratioW(105),
    alignItems: 'center',
    marginRight:ratioW(5),
    borderRadius:ratioW(16),
    borderWidth: ratioW(0.4),
    borderColor: 'black',
    overflow: 'hidden',

  },
  textItemBoard:{
    fontSize:16,
    fontFamily:'Poppins-Regular',
    color:'white'
  },
  textBlack:{
    color:'black',
  },
  textWhite:{
    color:'white'
  },
  videoBoard:{

  }
})


export default BoardHome;
