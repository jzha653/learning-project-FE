/*
RootSwitchNav
├── SplashScreen
├── AccountCreationScreen
├── AccountSuspendedScreen
├── MaintenanceScreen
├── AuthStackNav
│ ├── AuthLandingScreen
│ ├── EnterEmailScreen
│ ├── ConfirmEmailScreen
│ └── EnterNameScreen
└── MainStackNav
  ├── MainTabNav
  │ ├── PumpedStackNav
  │ │ └── PumpedProgramScreen
  │ ├── HomeStackNav
  │ │ └── HomeScreen
  │ └── AccountStackNav
  │   └── AccountOverviewScreen
  ├── FindCaltexScreen
  ├── NoLocationScreen
  ├── PAPLandingScreen
  ├── PAPOptionsScreen
  ├── PAPPaymentScreen
  ├── PAPStatusScreen
  ├── PAPCompletedScreen
  ├── PAPErrorScreen
  ├── PayInStoreScreen    
  ├── MyCardsScreen
  ├── AddLoyaltyCardScreen
  ├── LoyaltyCardScreen
  ├── PumpedHistoryDetailsScreen
  ├── PumpedHistoryTabNav
  │ ├── TabAppHistoryStackNav
  │ │ └── PumpedHistoryAppScreen
  │ ├── TabFlybuysHistoryStackNav
  │ │ └── PumpedHistoryFlybuysScreen
  │ └── TabAirpointsHistoryStackNav
  │   └── PumpedHistoryAirpointsScreen  
  ├── PumpedHistoryScreen
  ├── TransactionsScreen    
  └── NotificationsScreen  
*/

const Routes = {
  SplashScreen: 'SplashScreen',
  AccountCreationScreen: 'AccountCreationScreen',
  AccountSuspendedScreen: 'AccountSuspendedScreen',
  MaintenanceScreen: 'MaintenanceScreen',
  AuthStackNav: {
    name: 'AuthStackNav',
    AuthLandingScreen: 'AuthLandingScreen',
    EnterEmailScreen: 'EnterEmailScreen',
    ConfirmEmailScreen: 'ConfirmEmailScreen',
    EnterNameScreen: 'EnterNameScreen',
  },
  SuperPumpedDayScreen: 'SuperPumpedDayScreen',
  RewardMultiplierDayScreen: 'RewardMultiplierDayScreen',
  BreadAndMilkPromoScreen: 'BreadAndMilkPromoScreen',
  BannerStackNav: {
    name: 'BannerStackNav',
    OnboardingPAPScreen: 'OnboardingPAPScreen',
    OnboardingPAPDetailsScreen: 'OnboardingPAPDetailsScreen',
  },
  MainStackNav: {
    name: 'MainStackNav',
    MainTabNav: {
      name: 'MainTabNav',
      HomeStackNav: {
        name: 'HomeStackNav',
        HomeScreen: 'HomeScreen',
      },
      PumpedStackNav: {
        name: 'PumpedStackNav',
        PumpedProgramScreen: 'PumpedProgramScreen',
      },
      AccountStackNav: {
        name: 'AccountStackNav',
        AccountOverviewScreen: 'AccountOverviewScreen',
      },
    },
    FindCaltexScreen: 'FindCaltexScreen',
    NotificationsScreen: 'NotificationsScreen',
    NotificationsPreferencesScreen: 'NotificationsPreferencesScreen',
    NoLocationScreen: 'NoLocationScreen',
    PAPLandingScreen: 'PAPLandingScreen',
    PAPOptionsScreen: 'PAPOptionsScreen',
    PAPPaymentScreen: 'PAPPaymentScreen',
    PAPStatusScreen: 'PAPStatusScreen',
    PAPCompletedScreen: 'PAPCompletedScreen',
    PAPErrorScreen: 'PAPErrorScreen',
    PayInStoreScreen: 'PayInStoreScreen',
    MyCardsScreen: 'MyCardsScreen',
    AddLoyaltyCardScreen: 'AddLoyaltyCardScreen',
    LoyaltyCardScreen: 'LoyaltyCardScreen',
    PumpedHistoryDetailsScreen: 'PumpedHistoryDetailsScreen',
    PumpedHistoryTabNav: {
      name: 'PumpedHistoryTabNav',
      TabAppHistoryStackNav: {
        name: 'TabAppHistoryStackNav',
        PumpedHistoryAppScreen: 'PumpedHistoryAppScreen',
      },
      TabFlybuysHistoryStackNav: {
        name: 'TabFlybuysHistoryStackNav',
        PumpedHistoryFlybuysScreen: 'PumpedHistoryFlybuysScreen',
      },
      TabAirpointsHistoryStackNav: {
        name: 'TabAirpointsHistoryStackNav',
        PumpedHistoryAirpointsScreen: 'PumpedHistoryAirpointsScreen',
      },
    },
    AccountSettingsScreen: 'AccountSettingsScreen',
    AccountUserEditScreen: 'AccountUserEditScreen',
    AccountDefaultSpendScreen: 'AccountDefaultSpendScreen',
    TransactionsScreen: 'TransactionsScreen',
    TransactionDetailsScreen: 'TransactionDetailsScreen',
    AddPaymentScreen: 'AddPaymentScreen',
    PaymentDetailScreen: 'PaymentDetailScreen',
    WalletSuccessScreen: 'WalletSuccessScreen',
    AddZBizCardScreen: 'AddZBizCardScreen',
    ZBizAllowedFuelGradesScreen: 'ZBizAllowedFuelGradesScreen',
    SelectPaymentTypeScreen: 'SelectPaymentTypeScreen',
    RateThanksScreen: 'RateThanksScreen',
    FeedbackScreen: 'FeedbackScreen',
    PriceFinderScreen: 'PriceFinderScreen',
    CheckinFeedbackScreen: 'CheckinFeedbackScreen',
    LicensesScreen: 'LicensesScreen',
    PIAErrorStateScreen: 'PIAErrorStateScreen',
  },
};

// some shortcuts
export const RouteHomeScreen =
  Routes.MainStackNav.MainTabNav.HomeStackNav.HomeScreen;
export const RoutePumpedProgram =
  Routes.MainStackNav.MainTabNav.PumpedStackNav.PumpedProgramScreen;
export const RouteAccount =
  Routes.MainStackNav.MainTabNav.AccountStackNav.AccountOverviewScreen;

export const RouteRoot = Routes.MainStackNav.MainTabNav.name;

export const RouteDefaultStartScreen = RouteHomeScreen;
export const RouteDefaultStartStack =
  Routes.MainStackNav.MainTabNav.HomeStackNav.name;

export default Routes;
