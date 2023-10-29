import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../global/AppContext';


const Map = () => {
  const {position , setPosition} = useAppContext();

  return (
    <View>
      {position ? (
        <Text>
          위도: {position.lat}, 경도: {position.lng}
        </Text>
      ) : (
        <Text>위치 정보를 불러오는 중...</Text>
      )}
    </View>
  );
};

export default Map;