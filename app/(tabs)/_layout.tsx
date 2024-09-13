import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

function Layout() {
  return (
    <>
      <StatusBar style='dark' />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.lightGray,
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 63,
            marginHorizontal: 100,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
            // borderWidth: 1,
            // borderTopWidth: 1,
            // borderColor: '#333',
            // borderTopColor: '#333',
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: Colors.gray,
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name='dashboard'
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.black : Colors.lightGray,
                }}
              >
                <Ionicons name='home' size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='transactions'
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.black : Colors.lightGray,
                }}
              >
                <Ionicons name='card-outline' size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.black : Colors.lightGray,
                }}
              >
                <Ionicons name='person' size={18} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default Layout;
