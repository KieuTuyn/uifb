import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/component/Screen/HomeScreen/HomeScreen.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, { createContext, useState } from "react";
import VideoScreen from './src/component/Screen/VideoScreen/VideoScreen.tsx';
import FriendScreen from './src/component/Screen/FriendScreen/FriendScreen.tsx';
import MarketplaceScreen from './src/component/Screen/MarketplaceScreen/MarketplaceScreen.tsx';
import NotificationScreen from './src/component/Screen/NotificationScreen/NotificationScreen.tsx';
import MenuScreen from './src/component/Screen/MenuScreen/MenuScreen.tsx';
import {useSharedValue} from 'react-native-reanimated';
import {StyleSheet} from 'react-native';
import CommentScreen from './src/component/Screen/HomeScreen/Element/CommentScreen.tsx';
import MyTabBar from './src/component/Screen/HomeScreen/Element/TabBar.tsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const ScrollTabContext = createContext<{
  scrollY: any,
  scroll:any

}>({
  scrollY: null,
  scroll:null

});
const App = () => {
  const scrollY = useSharedValue(0);
  const scroll = useSharedValue(0);
  const Homes = () => (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
    </Stack.Navigator>
  );
  return (
    <ScrollTabContext.Provider
      value={{ scrollY,scroll}}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => ( <MyTabBar {...props} scrollY={scrollY} /> )}
          screenOptions={({route}) => ({
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
            headerShown: false,
            tabBarStyle: {
              height: 70,
            },

            tabBarLabelStyle: {
              fontSize: 10,
              bottom: 10,
              fontFamily: 'Poppins-Regular',
            },
          })}>
          <Tab.Screen name="Trang chủ" component={Homes} />
          <Tab.Screen name="Video" component={VideoScreen} />
          <Tab.Screen name="Bạn bè" component={FriendScreen} />
          <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
          <Tab.Screen name="Thông báo" component={NotificationScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ScrollTabContext.Provider>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: 'white',
  },
});
export default App;
