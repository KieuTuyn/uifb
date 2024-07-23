import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import HeaderHome from './Element/HeaderHome.tsx';
import BoardHome from './Element/BoardScreen.tsx';
import PostHome from './Element/PostHome.tsx';
import {useContext, useRef} from 'react';
import moment from 'moment';
import Animated, {
  useSharedValue,
  withTiming
} from "react-native-reanimated";

import {ScrollTabContext} from '../../../../App.tsx';
import StatusHome from "./Element/StatusHome.tsx";

const HomeScreen = () => {
  const {scrollY} = useContext(ScrollTabContext);
  const {scroll} = useContext(ScrollTabContext);
  const currentOffsetSave = useRef(0);
  const positionBefore100ms = useRef(0);
  const timeLastCheck = useRef(moment());

  const components = [
    {key: '1', component: <StatusHome />},
    {key: '2', component: <BoardHome />},
    {key: '3', component: <PostHome />},
  ];

  const renderItem = ({item}) => {
    return item.component;
  };
  return (
    <View style={styles.ContainerHome}>
      <HeaderHome scroll={scroll}/>
      <View style={{flexGrow: 1}}>
          <Animated.FlatList
            data={components}
            keyExtractor={item => item.key}
            renderItem={renderItem}
            onScrollBeginDrag={e => {
              console.log({positionNow: e.nativeEvent.contentOffset.y});
              timeLastCheck.current = moment(); // time hien tai
              if (positionBefore100ms.current === 0) {
                positionBefore100ms.current = e.nativeEvent.contentOffset.y;
              }

            }}
            onScrollEndDrag={e => {
              const currentOffset = e.nativeEvent.contentOffset.y;
              console.log({positionEnd: e.nativeEvent.contentOffset.y});
              if ( currentOffset > 60) {
                scrollY.value = withTiming(200, { duration: 1000 });
                scroll.value = withTiming(-200, { duration: 800 });
              } else {
                scrollY.value = withTiming(-200,{ duration: 1000 });
                scroll.value = withTiming(0,{ duration: 800 });

              }
            }}
            // scrollEventThrottle={1000}
            onScroll={event => {
              const currentOffset = event.nativeEvent.contentOffset.y;
              // console.log({timeee: moment.duration(moment().diff(timeLastCheck.current)).asSeconds()})
              if (
                moment.duration(moment().diff(timeLastCheck.current)).asSeconds() >
                0.1
              ) {
                // doan  nay la doan call sau khi save last time check 0.1s
                // phai check tiep space > 100px
                if (positionBefore100ms.current - currentOffset >= 100) {
                  // bat lai cai bottom tab

                  scrollY.value = withTiming(0, {
                    duration: 500,
                  });
                  scroll.value = withTiming(0, {
                    duration: 500,
                  });
                }

                positionBefore100ms.current = currentOffset;
                timeLastCheck.current = moment();
              }
              // khoang nay tinh duoc ra so lan di chuyen moi khi scroll
              const postionChange = currentOffset;

              if (currentOffset > currentOffsetSave.current) {
                scrollY.value = Math.min(postionChange, 200);
                scroll.value = Math.max(-postionChange,-200);
              }

              currentOffsetSave.current = currentOffset;
            }}
          />
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  ContainerHome: {

    flexDirection: 'column',
    backgroundColor: 'white',
  },
  scrollable: {

  },
});

export default HomeScreen;
