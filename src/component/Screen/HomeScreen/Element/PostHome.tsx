import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { ratioH, ratioW } from "../../../../ultis/RatioScale.tsx";
import {PostData} from "../../../../data/HomeData/PostData.tsx";
import Commentpost from "../../../../assets/icons/commentpost.svg";
import Likepost from "../../../../assets/icons/likepost.svg";
import Sharepost from "../../../../assets/icons/sharepost.svg";
import Heart_view from "../../../../assets/icons/heart_view.svg";
import Like_view from "../../../../assets/icons/like_view.svg";
import Wow_view from "../../../../assets/icons/wow_view.svg";
import ScaleIcon from "../../../../anomation/ScaleIcon.tsx";
import ImageViewer from "react-native-image-zoom-viewer";
import { Image1 } from "../../../../data/HomeData/images.tsx";
import { imageP1 } from "../../../../data/imagesData/imagePost.tsx";
import { createContext, useContext, useEffect, useState } from "react";
import { ScrollTabContext } from "../../../../../App.tsx";


const PostHome = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (

    <View >
      <View style={{height:ratioH(5),
        width:'100%',
        backgroundColor:'#a8a8a8'}}>
      </View>
        <View style={styles.userPost} >
            <View style={styles.avatar}>
              {item.avatarImg && item.avatarImg()}
            </View>
            <View style={{flexDirection:'column'}}>
              <Text>{item.name}</Text>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                {item.icon}
                <Text> {item.time}</Text>
              </View>
            </View>

        </View>

          <Text style={styles.describePost}>
            {item.describe}
          </Text>

         <View style={styles.imagePost} >
           <ImageViewer

           />
           {item.image && item.image()}
         </View>
         <View style={styles.inforStatus} >
           <Like_view/>
           <Heart_view/>
           <Wow_view/>
           <Text> {item.inforS}</Text>
           <View style={{position:'absolute',right:20}}>
             <Text > {item.comment}</Text>
           </View>

         </View>
          <View style={styles.separator}></View>
          <View style={styles.taskPost} >
                <View style={styles.buttonPost} >
                    {<ScaleIcon iconType='likepost'/>}
                    <Text style={styles.textTaskPost}>Like</Text>

                </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('CommentScreen')}
            >
                <View style={styles.buttonPost} >

                    {<ScaleIcon iconType='commentpost'/>}
                    <Text style={styles.textTaskPost}>Comment</Text>
                </View>
                  </TouchableOpacity>


                <View style={styles.buttonPost} >
                  {<ScaleIcon iconType='sharepost'/>}
                  <Text style={styles.textTaskPost}>Share</Text>

                </View>
          </View>
    </View>

  );
  return(
    <View style={styles.ContainerPost}>

      <FlatList
        data={PostData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />

    </View>

  )
}
 const styles = StyleSheet.create({
  ContainerPost:{
    flexDirection:'column',
    height:'auto',
    width:'auto',
    top:20,

  },
  userPost:{
    flexDirection:'row',
    height:ratioH(60),
    alignItems:'center',
    gap:10,
    paddingLeft:ratioW(10),
  },
  imagePost:{
    height:ratioH(250),
    width:'100%',

  },
  avatar:{
    borderRadius:ratioW(40),
    height:ratioH(40),
    width:ratioW(40),
    resizeMode:'contain',
  },
  nameUser:{

  },
  describePost:{
    width:'auto',
    height:'auto',
    paddingLeft:ratioW(5),
    alignItems:'center',
    fontSize:16,
    fontFamily:"Poppins-Regular",

  },
  inforStatus:
  {
    height:ratioH(40),
    width:'100%',
    flexDirection:'row',
    marginLeft:ratioW(10),
    alignItems:'center',
  },

  taskPost:{
    height:ratioH(40),
    width:'100%',
    flexDirection:'row',

  },

   buttonPost:{
     flexDirection:'row',
     height:ratioH(40),
     width:ratioW(125),
     gap:10,
     justifyContent:'center',
     alignItems:'center'

   },

   textTaskPost:{
    fontSize:ratioH(12),
     fontFamily:'Poppins-Regular',
   },
   separator: {
     height: 1,
     backgroundColor: 'lightgray',
     marginHorizontal: ratioW(10),
   },
})


export default PostHome;
