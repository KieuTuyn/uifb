import * as React from "react";
import {Image, StyleSheet, Text, View ,TouchableOpacity,FlatList} from "react-native";
import {ratioH,ratioW} from "../../../../ultis/RatioScale";
import Search from "../../../../assets/icons/search.svg";
import Messenger from "../../../../assets/icons/messenger.svg";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, withTiming } from "react-native-reanimated";

const HeaderHome = ({ scroll}) => {
  const headerAnim = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: scroll.value }],
    };
  });
  return (
    <Animated.View style={[styles.container,headerAnim]}>
          <View style={styles.containerFlag} >
            <Text style={styles.logoText}>facebook</Text>
            <View style={styles.containerIcons}>

              <View >
                <Search/>
              </View>

              <View>
                <Messenger/>
              </View>

            </View>
          </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height: ratioH(50),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    position: 'absolute',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    top: 0,
    // borderWidth:0.2,
    borderStyle:'dotted',
    zIndex:10
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
      color:'blue'
      },
});

 export default HeaderHome;
