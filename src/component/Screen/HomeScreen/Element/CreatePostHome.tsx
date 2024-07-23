import React, { useEffect, useState } from "react";
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ratioH, ratioW } from "../../../../ultis/RatioScale.tsx";

const CreatePostHome = () => {
  const renderItem = ({ item }) => (

    <TouchableOpacity
      activeOpacity={0.7}
      // onPress={() => navigation.navigate(item.screen)}
    >
    <View style={styles.titleCreate}>

    </View>

    </TouchableOpacity>

  );
  return (
    <View style={styles.container}>
      <View style={styles.headerCreate}>
        <View style={styles.back} >

        </View>

        <View style={styles.title}>
          <Text style={styles.text}>Tạo Tin</Text>
        </View>

        <View style={styles.iconHeader}>

        </View>
      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerCreate:{
    flexDirection:'row',
    top:ratioH(20),
    height:ratioH(40),



  },
  iconHeader:{
    backgroundColor:'blue',
    height:ratioH(40),
    width:ratioW(120),
    position:'absolute',
    right:0,
  },
  back:{
    backgroundColor:'blue',
    height:ratioH(40),
    width:ratioW(125),
  },
  title:{
    width:ratioW(125),
    height:ratioH(40),
    left:ratioW(3),

    justifyContent:'center',

  },
  text:{
    paddingLeft:ratioW(32),
    fontSize:18,
    fontFamily:'Poppins-Bold',
    color:'#000000',


  },
  titleCreate:{

  }


});

export default CreatePostHome;
