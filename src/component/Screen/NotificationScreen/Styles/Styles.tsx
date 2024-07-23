import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../../../../ultis/RatioScale.tsx";

export const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    borderTopColor: 'white',
  },
  containerNew: {
    flexDirection: 'column',
    backgroundColor: '#b2d5f7',
  },
  containerLast: {
    flexDirection: 'column',
    backgroundColor: '#b2d5f7',
    marginBottom:70
  },
  itemNew: {
    flexDirection: 'row',
    height: 'auto',
    marginBottom: ratioH(10),
  },
  itemNoti: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: ratioH(80),
    marginBottom: 10,
  },
  avatar: {
    width: ratioW(80),
    height: ratioH(80),
    borderRadius: ratioH(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  contents: {
    width: ratioW(250),
    height: 'auto',
    top: ratioH(10),
  },
  detail: {
    width: ratioW(24),
    height: ratioH(80),
    position: 'absolute',
    right: ratioH(10),
    top: 0,
  },
  textName: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  textDescribe: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  textTime: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  textTitle: {
    marginLeft: ratioW(10),
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: ratioH(2),
    alignItems: 'center',
  },
});
