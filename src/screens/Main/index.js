import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {FAB} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
const data = [
  {title: 'Okul'},
  {title: 'İş'},
  {title: 'Spor'},
  {title: 'Ders'},
  {title: 'Yemek'},
];

const Main = () => {
  const item = ({item: {title}, index}) => (
    <View
      style={{
        paddingLeft: '5%',
        paddingVertical: 20,
      }}>
      <TouchableOpacity>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(40, 40, 40, 1)',
      }}>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(d, i) => i.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: '90%',
              height: 1,
              backgroundColor: '#ffffff22',
              alignSelf: 'center',
            }}
          />
        )}
      />
      <FAB color="#0a66c2" placement="right" title={'+'} />
    </View>
  );
};
export {Main};
