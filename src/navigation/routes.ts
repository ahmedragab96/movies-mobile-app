import {
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  StackScreenProps,
} from '@react-navigation/stack';
import {
  Tab1,
  Tab2,
  Tab3,
  Tab4,
  ProductsScreen,
  SplashScreen,
  LoginScreen,
  TermsScreen,
  PrivacyScreen,
  RegistrationScreen,
  ProductScreen,
  OnboardingScreen,
  OffersListScreen,
  OfferDetailsScreen,
  PlansListScreen,
  RequestMoreInfoScreen,
  MerchantsListScreen,
  ProgramDetailsScreen,
  BranchesScreen,
  MenuScreen,
  ProfileScreen,
  SubproductDetailsScreen,
  MerchantDetailsScreen,
  PaymentScreen,
  PaymobScreen,
  ProductDescriptionScreen,
} from 'screens';
import {
  NavigationFactory,
  NavigatorTypes,
  ScreenNames,
} from 'shared';
import {
  ContractDetailsScreen,
} from '../screens/home/contractDetails';

export type ScreenTypesAndParams = ScreenNames<NavigationFactory['navigator']>;

export type ScreenParams<T extends ScreenTypesAndParams = ScreenTypesAndParams> = {
  [K in keyof T]: T[K] extends { params: object | undefined }
    ? T[K]['params']
    : undefined;
};

export type ScreenComponents<T extends ScreenTypesAndParams> = {
  [K in keyof T]: T[K] extends { type: NavigatorTypes; params: object | undefined }
    ? T[K]['type'] extends NavigatorTypes.STACK
      ? K extends keyof ScreenParams
        ? React.FC<StackScreenProps<ScreenParams, K>>
        : undefined
      : K extends keyof ScreenParams
        ? React.FC<BottomTabScreenProps<ScreenParams, K>>
        : undefined
    : undefined;
};

export const ROUTES: ScreenComponents<ScreenTypesAndParams> = {
  home: {} as any,
  tab1: Tab1,
  tab2: Tab2,
  tab3: Tab3,
  tab4: Tab4,
  productsScreen: ProductsScreen,
  splash: SplashScreen,
  login: LoginScreen,
  registration: RegistrationScreen,
  terms: TermsScreen,
  product: ProductScreen,
  offersList: OffersListScreen,
  offerDetails: OfferDetailsScreen,
  subproductDetails: SubproductDetailsScreen,
  plansList: PlansListScreen,
  onboarding: OnboardingScreen,
  requestMoreInfo: RequestMoreInfoScreen,
  merchantsList: MerchantsListScreen,
  contractDetails: ContractDetailsScreen,
  merchantDetailsScreen: MerchantDetailsScreen,
  programDetails: ProgramDetailsScreen,
  branches: BranchesScreen,
  menuScreen: MenuScreen,
  profileScreen: ProfileScreen,
  paymentScreen: PaymentScreen,
  paymobScreen: PaymobScreen,
  privacyScreen: PrivacyScreen,
  productDescriptionScreen: ProductDescriptionScreen,
};
