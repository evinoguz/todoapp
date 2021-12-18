import React from 'react';
import {View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <FontAwesome name={'check'} color={'#0a66c2'} size={170} />
    </View>
  );
};
export {Splash};
