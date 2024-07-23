import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Dots_noti from "../../../../assets/icons/dots_noti.svg";
import { styles } from "../Styles/Styles.tsx";
import { NotiData } from "../../../../data/NotiData.tsx";
import { avatar3 } from "../../../../data/imagesData/imageAvatar.tsx";
import Message_noti from "../../../../assets/icons/message_noti.svg";
import { ratioH } from "../../../../ultis/RatioScale.tsx";

const LastNoti = () =>{
  const [data, setData] = useState(NotiData);
  const [loading, setLoading] = useState(false);
  const [Id, setId] = useState(1);
  useEffect(() => {
    if (Id > 1) {
      loadData(Id);
    }
  }, [Id]);

  const fetchData = async id => {
    // Giả lập việc lấy thêm dữ liệu mới
    const newData = [
      {
        id: `${id}-1`,
        name: 'Tuyn Kiều ',
        describe: 'Lazy loading describe',
        time: '10 ngày',
        image: () => avatar3(),
        icon: <Message_noti />,
      },
      {
        id: `${id}-2`,
        name: 'Tuyn Kiều ',
        describe: 'Lazy loading describe',
        time: '10 ngày',
        image: () => avatar3(),
        icon: <Message_noti />,
      },
    ];
    return newData;
  };

  const loadData = async id => {
    setLoading(true);
    const newData = await fetchData(id);
    setData(prevData => [...prevData, ...newData]);
    setLoading(false);
  };

  const handleLoadMore = () => {
    setId(prevId => prevId + 1);
  };

  const renderFooter = () => {
    return !loading ? (
      <View
        style={{
          height: 40,
          width: '100%',
          bottom: ratioH(5),
          justifyContent: 'space-between',
        }}>
        <ActivityIndicator  size="large" color="#0000ff" />
      </View>
    ) : null;
  }
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
     <View>
       <Text style={styles.textTitle}>Trước đó</Text>
       <View style={styles.containerLast}>
         <FlatList
           data={data}
           renderItem={renderItem}
           keyExtractor={item => item.id}
           onEndReached={handleLoadMore}
           onEndReachedThreshold={0.5}
           ListFooterComponent={renderFooter}
         />
       </View>
     </View>

  )
  };

export default LastNoti;
