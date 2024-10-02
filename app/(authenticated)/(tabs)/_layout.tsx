import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { FontAwesome } from '@expo/vector-icons';

import Colors from '@/constants/Colors';

function Layout() {
  return (
    <>
      <StatusBar style='dark' />

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarStyle: {
            backgroundColor: Colors.lightGray,
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 63,
            marginHorizontal: 40,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='registered' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='invest'
          options={{
            title: 'Invest',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='line-chart' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='transfers'
          options={{
            title: 'Transfers',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='exchange' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='crypto'
          options={{
            title: 'Crypto',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='bitcoin' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='lifestyle'
          options={{
            title: 'Lifestyle',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name='th' size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default Layout;
