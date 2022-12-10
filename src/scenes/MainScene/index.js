import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import DownloadsPage from './pages/DownloadsPage';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../themes';

const Tab = createBottomTabNavigator();

const MainScene = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: Color.black},
        tabBarActiveTintColor: Color.white,
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewPage"
        component={NewPage}
        options={{
          tabBarLabel: 'New & Hot',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="play-box-multiple-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DownloadsPage"
        component={DownloadsPage}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="download-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScene;
