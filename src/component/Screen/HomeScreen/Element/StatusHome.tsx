import * as React from "react";
import {Image, StyleSheet, Text, View ,TouchableOpacity,FlatList} from "react-native";
import {ratioH,ratioW} from "../../../../ultis/RatioScale";
import Search from "../../../../assets/icons/search.svg";
import Messenger from "../../../../assets/icons/messenger.svg";
import ImageIcon from "../../../../assets/icons/imageicon.svg";
import { useNavigation } from '@react-navigation/native';
import HomeData from "../../../../data/HomeData/HomeData";

const StatusHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>

      <View style={styles.containerUser}>
        <View style={styles.avatarUser}>
          <Image
            style={styles.avatarImage}
            source={require('../../../../assets/images/avatarUser.png')}
          />

        </View>
        <Text>  Bạn đang nghĩ gì</Text>
        <View style={{position:'absolute',right:16}}>
          <ImageIcon/>
        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: "column",
    height: ratioH(40),
    gap: 10,
    marginTop: ratioH(60),
    right: 0,
    left: 0,
  },
  containerBanner:{
    height:ratioH(32),
    width:'100%',
    gap:10,
    flexDirection:"column",
  },
  containerFlag:{
    paddingHorizontal:ratioW(10),
    flexDirection:"row",
    height:ratioH(40),
    width:'100%',

  },
  containerIcons:{
    paddingHorizontal:ratioW(10),
    flexDirection:"row",
    right:0,
    gap:10,
    position:'absolute',

  },
  logoText:{
    fontSize:24,
    fontFamily:"Poppins-Bold",
    color:'#000000'
  },
  containerUser:{
    flexDirection:"row",
    height:ratioH(40),

    alignItems:'center',
    paddingHorizontal:ratioW(10),
  },
  avatarUser:{
    width:ratioW(40),
    height:ratioW(40),
    borderRadius:ratioW(80),
  },
  avatarImage:{
    width:ratioW(40),
    height:ratioW(40),
    borderRadius:ratioW(80),
    resizeMode:'contain',
    borderWidth:0.5,
    borderColor:'gray'
  },
  tabBar:{

    flexDirection:"row",
    height:ratioH(52),
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#f7f8f9",

  },
  itemBar:{
    width:ratioW(90),
    height:ratioH(32),
    borderRadius:ratioW(60),
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:5,
    elevation: 1,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 4,
    backgroundColor:"white",
    marginRight:ratioW(10),
    bottom:1,

  },
  textItemBar:{
    fontSize:ratioW(16),
    fontFamily:"Poppins-Bold",
    color:'#000000',

  }

});

export default StatusHome;
