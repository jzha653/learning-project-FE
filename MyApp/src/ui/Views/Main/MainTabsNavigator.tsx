import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewScreen from './Overview/OverviewScreen';
import ProfileScreen from './Profile/ProfileScreen';
import {RootRoutes} from '../../Routes/Routes';
import ActivityScreen from './Activity/ActivityScreen';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ScreenNavigationProp} from 'src/ui/Types/navigationTypes';
import Colours from '../../Theme/Colours';

const Tab = createBottomTabNavigator();
export default function MainScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();

  const Assets = {
    back: require('../../../../assets/images/icons/add.webp'),
  };
  const getTitle = useCallback(route => {
    let routeName = route.name;
    switch (route.name) {
      case 'OverviewScreen':
        routeName = 'Overview';
        break;

      case 'ActivityScreen':
        routeName = 'Activity';
        break;

      case 'ProfileScreen':
        routeName = 'Profile';
        break;

      default:
        routeName = 'Overview';
        break;
    }
    return routeName;
  }, []);

  const openNewTransactionModal = useCallback(
    () => navigation.navigate('NewTransactionScreen'),
    [navigation],
  );

  const renderRightHeader = useCallback(
    () => (
      <TouchableOpacity onPress={openNewTransactionModal}>
        <Image source={Assets.back} />
      </TouchableOpacity>
    ),
    [Assets.back, openNewTransactionModal],
  );
  return (
    <Tab.Navigator
      initialRouteName={RootRoutes.ScreensGroup.MainTabsNavigator.name}
      screenOptions={{
        headerTransparent: true,
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: Colours.titleBar,
        },
      }}>
      <Tab.Screen
        name={RootRoutes.ScreensGroup.MainTabsNavigator.OverviewScreen}
        component={OverviewScreen}
        options={({route}) => ({
          title: getTitle(route),
        })}
      />
      <Tab.Screen
        name={RootRoutes.ScreensGroup.MainTabsNavigator.ActivityScreen}
        component={ActivityScreen}
        options={({route}) => ({
          title: getTitle(route),
          headerRight: renderRightHeader,
          headerRightContainerStyle: {marginRight: '5%', right: 30},
        })}
      />
      <Tab.Screen
        name={RootRoutes.ScreensGroup.MainTabsNavigator.ProfileScreen}
        component={ProfileScreen}
        options={({route}) => ({
          title: getTitle(route),
        })}
      />
    </Tab.Navigator>
  );
}
