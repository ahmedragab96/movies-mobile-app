import * as yup from 'yup';
import {
  RootNavigator,
  NavigatorContainer,
  Screen,
  StackNavigator,
  TabNavigator,
} from './types';

export class NavigationFactory {
  navigator: ReturnType<NavigationFactory['createNavigationContainer']>;

  constructor() {
    this.navigator = this.createNavigationContainer();
  }

  createNavigationContainer = () => {
    const tab1 = new Screen('tab1')
      .addParamsSchema(yup.object({
        a: yup.string(),
        b: yup.boolean(),
      }).required());
    const tab2 = new Screen('tab2');
    const tab3 = new Screen('tab3');
    const tab4 = new Screen('tab4');
    const onboardingScreen = new Screen('onboarding');
    const productsScreen = new Screen('productsScreen');
    const homeTabsNavigator = new TabNavigator()
      .addScreen(tab1)
      .addScreen(tab2)
      .addScreen(productsScreen)
      .addScreen(tab3)
      .addScreen(tab4);
    const homeScreen = new NavigatorContainer('home', homeTabsNavigator);
    const splashScreen = new Screen('splash');
    const loginScreen = new Screen('login');
    const menuScreen = new Screen('menuScreen');
    const profileScreen = new Screen('profileScreen');
    const registrationScreen = new Screen('registration');
    const termsScreen = new Screen('terms');
    const productScreen = new Screen('product');
    const productDescriptionScreen = new Screen('productDescriptionScreen');
    const offersListScreen = new Screen('offersList');
    const offerDetailsScreen = new Screen('offerDetails');
    const subproductDetailsScreen = new Screen('subproductDetails');
    const plansListScreen = new Screen('plansList');
    const merchantsListScreen = new Screen('merchantsList');
    const requestMoreInfoScreen = new Screen('requestMoreInfo');
    const merchantDetailsScreen = new Screen('merchantDetailsScreen');
    const programDetails = new Screen('programDetails');
    const branchesScreen = new Screen('branches');
    const contractDetailsScreen = new Screen('contractDetails');
    const paymentScreen = new Screen('paymentScreen');
    const paymobScreen = new Screen('paymobScreen');
    const privacyScreen = new Screen('privacyScreen');
    const rootStackNavigator = new StackNavigator()
      .addScreen(splashScreen, true) // DO NOT MOVE THIS ROUTE FROM TOP
      .addScreen(onboardingScreen)
      .addScreen(homeScreen)
      .addScreen(loginScreen)
      .addScreen(registrationScreen)
      .addScreen(termsScreen)
      .addScreen(privacyScreen)
      .addScreen(productScreen)
      .addScreen(productDescriptionScreen)
      .addScreen(offersListScreen)
      .addScreen(offerDetailsScreen)
      .addScreen(subproductDetailsScreen)
      .addScreen(plansListScreen)
      .addScreen(requestMoreInfoScreen)
      .addScreen(menuScreen)
      .addScreen(profileScreen)
      .addScreen(merchantsListScreen)
      .addScreen(contractDetailsScreen)
      .addScreen(merchantDetailsScreen)
      .addScreen(programDetails)
      .addScreen(merchantDetailsScreen)
      .addScreen(merchantDetailsScreen)
      .addScreen(branchesScreen)
      .addScreen(contractDetailsScreen)
      .addScreen(contractDetailsScreen)
      .addScreen(merchantDetailsScreen)
      .addScreen(paymentScreen)
      .addScreen(paymobScreen);
    const navigationContainer = new RootNavigator(rootStackNavigator);
    return navigationContainer;
  };
}
