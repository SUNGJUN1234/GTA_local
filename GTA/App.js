import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, View } from 'react-native';
import TabsNavigatorScreen from './src/screens/Tabs';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useAppContext } from './src/global/AppContext';
import Geolocation from '@react-native-community/geolocation';

export default function App() {
  const { position, setPosition } = useAppContext(); // 전역 변수

  useEffect(() => {
    const fetchLocation = async () => {
      let permissionResponse;
      if (Platform.OS === 'android') {
        permissionResponse = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

        if (permissionResponse === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              setPosition({ lat: latitude, lng: longitude });
            },
            error => {
              console.log(error);
              // 사용자에게 에러 알림
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
        } else {
          // 권한 거부 처리
        }
      } else {
        // iOS 권한 요청 코드
      }
    };

    fetchLocation();
  }, []);

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <TabsNavigatorScreen />
      </View>
    </SafeAreaProvider>
  );
}
