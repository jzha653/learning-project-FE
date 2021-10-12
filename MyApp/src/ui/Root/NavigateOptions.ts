import {getFocusedRouteNameFromRoute} from '@react-navigation/core';
import {useCallback} from 'react';

export class NavigateOptions {
  title: string;
  headerLeft: () => any;
  headerRight: () => any;
  constructor(route) {
    this.title = this.getTitle(route);
  }
  getTitle = useCallback(route => {
    let routeName = getFocusedRouteNameFromRoute(route) ?? 'Overview';
    switch (routeName) {
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
}
