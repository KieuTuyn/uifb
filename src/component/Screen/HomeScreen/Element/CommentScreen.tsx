import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal, SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {ratioH, ratioW} from '../../../../ultis/RatioScale.tsx';
import ImageViewer from 'react-native-image-zoom-viewer';
import Like_view from '../../../../assets/icons/like_view.svg';
import Heart_view from '../../../../assets/icons/heart_view.svg';
import Wow_view from '../../../../assets/icons/wow_view.svg';
import Back from '../../../../assets/icons/back.svg';
import ScaleIcon from '../../../../anomation/ScaleIcon.tsx';
import {useNavigation} from '@react-navigation/native';
import {PostData} from '../../../../data/HomeData/PostData.tsx';
import {CommentData} from '../../../../data/HomeData/CommentData.tsx';
import {avatar1} from '../../../../data/imagesData/imageAvatar.tsx';
import Earthtime from '../../../../assets/icons/earthtime.svg';
import Line_mes from '../../../../assets/icons/line_mes.svg';
import {imageP1} from '../../../../data/imagesData/imagePost.tsx';
import {CommentDataChild} from '../../../../data/HomeData/ChildComment.tsx';
import TaskBarComment from "./TaskBarComment.tsx";
const CommentScreen = () => {
  const navigation = useNavigation();
  const slideAnim = useSharedValue(200);

  useEffect(() => {
    slideAnim.value = withTiming(0);
  }, []);

  const slideInStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: slideAnim.value}],
    };
  });
  const renderItem = ({item}) => (
    <View>
      <View style={styles.containerUserComments}>
        <View style={styles.userComments}>
          <View style={styles.avatar}>{item.avatarImg()}</View>
          <View style={styles.textComments}>
            <Text style={{marginHorizontal: 10, fontWeight: '600'}}>
              {item.name}
            </Text>
            <Text style={{marginHorizontal: 10}}>{item.comment}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  const renderItemN = ({item}) => (
    <View>
      <View style={{left:10,top:-6,height:40,width:50,position:'absolute'}}>
        <Line_mes/>
      </View>
      <View style={styles.containerUserCommentsN}>
        <View style={styles.userComments}>
          <View style={styles.avatarN}>{item.avatarImgN()}</View>
          <View style={styles.textCommentsN}>
            <Text style={{marginHorizontal: 10, fontWeight: '600'}}>
              {item.name}
            </Text>
            <Text style={{marginHorizontal: 10}}>{item.comment}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  const renderItemNN = ({item}) => (
    <View>
      <View style={{left:10,top:-6,height:40,width:50,position:'absolute'}}>
        <Line_mes/>
      </View>
      <View style={styles.containerUserCommentsN}>
        <View style={styles.userComments}>
          <View style={styles.avatarN}>{item.avatarImgN()}</View>
          <View style={styles.textCommentsNN}>
            <Text style={{marginHorizontal: 10, fontWeight: '600'}}>
              {item.name}
            </Text>
            <Text style={{marginHorizontal: 10}}>{item.comment}</Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (

      <View>
        <Modal visible={true} animationType="none">
          <Animated.View style={[ slideInStyle]}>
            <ScrollView showsVerticalScrollIndicator={true}
            >
            <View style={styles.container}>
              <View style={styles.userPost}>
                <View style={{height: 32, width: 32}}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Back />
                  </TouchableOpacity>
                </View>
                <View style={styles.avatar}>{avatar1()}</View>
                <View style={{flexDirection: 'column'}}>
                  <Text>Kiều Tuyên</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Earthtime />
                    <Text> 20 giờ trước</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.describePost}> Hi</Text>

              <View style={styles.imagePost}>{imageP1()}</View>

              <View style={styles.separator} />
              <View style={styles.taskPost}>
                <View style={styles.buttonPost}>
                  {<ScaleIcon iconType="likepost" />}
                  <Text style={styles.textTaskPost}>Like</Text>
                </View>
                <TouchableOpacity>
                  <View style={styles.buttonPost}>
                    {<ScaleIcon iconType="commentpost" />}
                    <Text style={styles.textTaskPost}>Comment</Text>
                  </View>
                </TouchableOpacity>

                <View style={styles.buttonPost}>
                  {<ScaleIcon iconType="sharepost" />}
                  <Text style={styles.textTaskPost}>Share</Text>
                </View>
              </View>
              <View style={styles.inforStatus}>
                <Like_view />
                <Heart_view />
                <Wow_view />
                <Text> Tuyên và 999 người khác...</Text>
              </View>
              <Text style={{marginLeft: 10, marginBottom: 10}}>
                Bình luận liên quan nhất
              </Text>

                <View>
                  <FlatList
                    data={CommentData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}

                  />
                  <View style={{left:33,top:45,height:490,width:2,position:'absolute',backgroundColor:'gray'}}>

                  </View>

                  <View style={{flexDirection: 'column',}}>

                    <FlatList
                      data={CommentDataChild}
                      renderItem={renderItemN}
                      keyExtractor={itemN => itemN.id}
                      scrollEnabled={false}
                    />

                    <View style={{left:45}}>
                      <View style={{left:33,top:-30,height:200,width:2,position:'absolute',backgroundColor:'gray'}}>

                      </View>
                      <FlatList
                        data={CommentDataChild}
                        renderItem={renderItemNN}
                        keyExtractor={itemN => itemN.id}
                        scrollEnabled={false}
                      />
                    </View>
                    <View style={{left:0}}>
                      <FlatList
                        data={CommentDataChild.slice(0, 1)}
                        renderItem={renderItemN}
                        keyExtractor={itemN => itemN.id}
                        scrollEnabled={false}

                      />
                    </View>

                  </View>

                </View>

            </View>
            </ScrollView>
            <TaskBarComment/>
          </Animated.View>

        </Modal>


      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom:100
  },
  userPost: {
    flexDirection: 'row',
    height: ratioH(50),
    alignItems: 'center',
    gap: 10,
    paddingLeft: ratioW(10),
  },
  imagePost: {
    height: ratioH(250),
    width: '100%',
  },
  avatar: {
    borderRadius: ratioW(40),
    height: ratioH(40),
    width: ratioW(40),
    resizeMode: 'contain',
  },
  avatarN: {
    borderRadius: ratioW(48),
    height: ratioH(24),
    width: ratioW(24),
    resizeMode: 'contain',
  },
  nameUser: {},
  describePost: {
    width: 'auto',
    height: 'auto',
    paddingLeft: ratioW(10),
    alignItems: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginVertical: 10,
  },
  inforStatus: {
    height: ratioH(40),
    width: '100%',
    flexDirection: 'row',
    marginLeft: ratioW(10),
    alignItems: 'center',
  },

  taskPost: {
    height: ratioH(40),
    width: '100%',
    flexDirection: 'row',
  },

  buttonPost: {
    flexDirection: 'row',
    height: ratioH(40),
    width: ratioW(125),
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTaskPost: {
    fontSize: ratioH(12),
    fontFamily: 'Poppins-Regular',
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
    marginHorizontal: ratioW(10),
  },
  containerUserComments: {
    height: '100%',
    width: 350,
    flexDirection: 'row',
    marginLeft: ratioW(10),
    gap: 10,

  },
  containerUserCommentsN: {
    height: 'auto',
    width:330,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: ratioW(60),
    gap: 10,


  },
  userComments: {
    height: 'auto',
    width: 350,
    flexDirection: 'row',
    gap: 10,

  },
  textComments: {
    paddingVertical:10,
    height: 'auto',
    width:'auto',
    flexDirection: 'column',
    backgroundColor: '#d1d1d1',
    borderRadius: 18,
    justifyContent: 'center',
  },
  textCommentsN: {
    paddingVertical:10,
    height: 'auto',
    width:'auto',
    flexDirection: 'column',
    backgroundColor: '#d1d1d1',
    borderRadius: 18,
    justifyContent: 'center',
  },
  textCommentsNN: {
    paddingVertical:10,
    height: 'auto',

    width:'auto',
    flexDirection: 'column',
    backgroundColor: '#d1d1d1',
    borderRadius: 18,
    justifyContent: 'center',
  },
});
export default CommentScreen;
