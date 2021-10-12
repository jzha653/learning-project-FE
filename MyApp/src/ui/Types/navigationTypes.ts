import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  AuthScreen: undefined;
  MainTabsNavigator: {token: string};
  NewTransactionScreen: {token: string};
  EditNameModal: {token: string};
  SelectCategoryModal: {token: string};
};

export type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;
