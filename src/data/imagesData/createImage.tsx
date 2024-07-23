
import { Image, View, StyleSheet, Text } from "react-native";
import { ratioH, ratioW } from "../../ultis/RatioScale.tsx";
import Add_circle from"../../assets/icons/add_circle.svg"
const CreateImage = (images) =>{

  return (
    <View style={styles.Container}>
      <Image
        style={{

          height: ratioH(120),
          width:ratioW(105),
          borderTopLeftRadius:16,
          borderTopRightRadius:16,
          top:0,
          position:'absolute',

        }}
        // source={images}
        source={require('../../assets/images/avatarUser.png')}/>
      <View style={{height:ratioH(32),
        width:ratioW(32),
        borderTopRightRadius:ratioW(32),
        borderTopLeftRadius:ratioW(32),
        borderBottomLeftRadius:ratioW(32),
        borderBottomRightRadius:ratioW(32),
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems:'center',
        top:ratioH(30),
        margin:ratioH(25)
      }}>
        <Add_circle/>

      </View>


    </View>
  )
}
const styles=StyleSheet.create({
  Container:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height:ratioH(180),
    width:ratioW(105),
    borderTopLeftRadius:16,
    borderTopRightRadius:16,
    borderBottomLeftRadius:16,
    borderBottomRightRadius:16,
    backgroundColor:'#f4efef',
    gap:20,
    // borderWidth:1,

  }
})

export default CreateImage;
