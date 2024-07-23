import { FlatList, Text, View } from "react-native";
import React from "react";
import Dots_noti from "../../../../assets/icons/dots_noti.svg";
import { styles } from "../Styles/Styles.tsx";
import {NotiData} from '../../../../data/NotiData';
const NewNoti = () =>{
  const renderItem = ({item}) => (
    <View style={styles.itemNoti}>
      <View style={styles.avatar}>
        <item.image />
        <View style={{position: 'absolute', bottom: 0, right: 0}}>
          {item.icon}
        </View>
      </View>
      <View style={styles.contents}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textDescribe}>{item.describe}</Text>
        <Text style={styles.textTime}>{item.time}</Text>
      </View>
      <View style={styles.detail}>
        <Dots_noti />
      </View>
    </View>
  );
  return(
    <>
      <Text style={styles.textTitle}>Mới</Text>
      <View style={styles.containerNew}>
        <FlatList
          data={NotiData.slice(0, 4)}
          renderItem={renderItem}
          keyExtractor={item => item.id}

        />
      </View>
    </>

    )

}
export default NewNoti;
