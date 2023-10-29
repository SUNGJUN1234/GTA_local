import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabsNavigatorScreen from './src/screens/Tabs';
import { View} from 'react-native';
import React, { useEffect } from 'react';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useAppContext } from './src/global/AppContext';
import Geolocation from 'react-native-geolocation-service';


export default function App() {

  const {position , setPosition} = useAppContext(); // 전역 변수

  useEffect(() => {
    if (Platform.OS === 'android') {
      // Android 권한 요청 코드 추가
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(response => {
        if (response === 'granted') {
          // 권한이 허용되면 위치 정보를 얻는 코드 실행
        }
      });
    }
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setPosition({ 
          lat : latitude,
          lng : longitude
         });
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <TabsNavigatorScreen />
      </View>
    </SafeAreaProvider>
  );
}
