import {StackNavigationProp} from '@react-navigation/stack';

// overview screen here
export type RootStackParamList = {
  AuthScreen: undefined;
  MainTabsNavigator: undefined;
  OverviewScreen: undefined;
  ActivityScreen: undefined;
  ProfileScreen: undefined;
  NewTransactionScreen: undefined;
  EditNameModal: undefined;
  SelectCategoryModal: undefined;
};

//USE NAVIGATION
export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;
