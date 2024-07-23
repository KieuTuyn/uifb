import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View
} from "react-native";

import HeaderNoti from './Element/HeaderNoti.tsx';
import { styles } from "./Styles/Styles.tsx";
import NewNoti from "./Element/NewNoti.tsx";
import LastNoti from "./Element/LastNoti.tsx";
const MyLazyLoadingList = () => {
const dataComponent  = [
    {key: '1', component: <HeaderNoti />},
    {key: '2', component: <NewNoti />},
    {key: '3', component: <LastNoti />},
  ];
const renderItem = ({item}) => {
    return item.component;
  };
  return (
    <View style={styles.Container}>
      <FlatList
        data={dataComponent}
        keyExtractor={item => item.key}
        renderItem={renderItem}
      />
    </View>
  );
};


export default MyLazyLoadingList;
