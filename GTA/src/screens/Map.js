import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../global/AppContext';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  const { position, setPosition } = useAppContext();

  return (
    <View style={{ flex: 1 }}>
      {position ? (
     <MapView
     style={{ flex: 1 }}
     initialRegion={{
       latitude: position.lat,
       longitude: position.lng,
       latitudeDelta: 0.01, // 작은 값으로 변경하여 더 확대
       longitudeDelta: 0.01, // 작은 값으로 변경하여 더 확대
     }}
    //  onRegionChange={region => {
    //   setPosition({
    //      lat: region.latitude,
    //      lng: region.longitude,
    //    });
    //  }}
    //  onRegionChangeComplete={region => {
    //   setPosition({
    //      lat: region.latitude,
    //      lng: region.longitude,
    //    });
    //  }}
   >
     <Marker
       coordinate={{
         latitude: position.lat,
         longitude: position.lng,
       }}
       title="This is a marker"
       description="This is a marker example"
     />
   </MapView>
      ) : (
        <Text>위치 정보를 불러오는 중...</Text>
      )}
    </View>
  );
};

export default Map;
