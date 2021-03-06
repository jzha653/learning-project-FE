export const RootRoutes = {
  ScreensGroup: {
    name: 'ScreensGroup',
    AuthScreen: 'AuthScreen',
    MainTabsNavigator: {
      name: 'MainTabsNavigator',
      OverviewScreen: 'OverviewScreen',
      ActivityScreen: 'ActivityScreen',
      ProfileScreen: 'ProfileScreen',
    },
    NewTransactionScreen: 'NewTransactionScreen',
    SplashScreen: 'SplashScreen',
  },
  ModalsGroup: {
    name: 'ModalsGroup',
    EditNameModal: 'EditNameModal',
    SelectCategoryModal: 'SelectCategoryModal',
  },
} as const;
