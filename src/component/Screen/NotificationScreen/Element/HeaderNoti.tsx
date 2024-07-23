import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ratioH, ratioW} from '../../../ultis/RatioScale.tsx';
import Setting_noti from '../../../assets/icons/setting_noti.svg';
import Search_noti from '../../../assets/icons/search_noti.svg';

const HeaderNoti = () => (
  <View style={styles.container}>
    <Text style={styles.textTitle}>Thông báo</Text>
    <View style={styles.icon}>
      <Setting_noti />
      <Search_noti />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: ratioH(50),
    marginTop: ratioH(10),
    paddingHorizontal: ratioW(10),
  },
  textTitle: {
    fontSize: ratioH(26),
    fontWeight: 'bold',
    color: 'black',
  },
  icon: {
    flexDirection:'row',
    width: 'auto',
    position: 'absolute',
    right: ratioW(15),
    top: 0,
    justifyContent: 'center',
    gap: ratioW(10),
  },
});

export default HeaderNoti;
