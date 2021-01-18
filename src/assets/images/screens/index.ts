import sheet from './terms/sheet.svg';
import mobile from './login/mobile.svg';
import menuIcon from './home/menu-icon.svg';
import languageIcon from './home/language-icon.svg';
import languageIconBig from './home/language-icon-big.svg';
import registration from './registration/registration.svg';
import person from './registration/person.svg';
import mail from './registration/mail.svg';
import auto from './product/auto.svg';
import insurance from './product/insurance.svg';
import shopping from './product/shopping.svg';
import trucks from './product/trucks.svg';
import finishing from './product/finishing.svg';
import mortgage from './product/mortgage.svg';
import leasing from './product/leasing.svg';
import contactAutoAr from './product/AutoAr.svg';
import contactMortageAr from './product/mortgage-ar.svg';
import contactInsuranceAr from './product/insuranceAR.svg';
import contactLeasingAr from './product/LeasingAr.svg';
import contactTrucksAr from './product/TrucksAr.svg';
import contactShoppingAr from './product/ShoppingAr.svg';
import conatctFinishingAr from './product/FinishingAr.svg';
import moreInfoIcon from './product/More-Info-Icon.svg';

import facebook from './product/facebook.svg';
import twitter from './product/twitter.svg';
import instagram from './product/instagram.svg';
import youtube from './product/youtube.svg';
import linkedIn from './product/LinkedIn.svg';
import loanCalculator from './product/loanCalculator.svg';
import arrowRight from './onboarding/arrow-right.svg';
import homeTabIcon from './home/home.svg';
import contactTabIcon from './home/briefcase.svg';
import walletTabIcon from './home/wallet.svg';
import phoneTabIcon from './home/phone.svg';
import homeTabActiveIcon from './home/home_active.svg';
import contactTabActiveIcon from './home/briefcase_active.svg';
import walletTabActiveIcon from './home/wallet_active.svg';
import phoneTabActiveIcon from './home/phone_active.svg';
import contactMainIcon from './home/contact-main.svg';
import contactAuto from './home/Auto.svg';
import contactMortage from './home/Morgage.svg';
import contactTrucks from './home/Trucks.svg';
import contactInsurance from './home/Insurance.svg';
import contactLeasing from './home/Leasing.svg';
import conatctFinishing from './home/Finishing.svg';
import contactShopping from './home/Shopping.svg';
import offers from './offersList/offers.svg';
import centerIcon from './productMenu/center-icon.svg';
import autoIcon from './productMenu/auto-icon.svg';
import finishingIcon from './productMenu/finishing-icon.svg';
import insuranceBrokerageIcon from './productMenu/insurance-brokerage-icon.svg';
import leasingIcon from './productMenu/leasing-icon.svg';
import mortgageIcon from './productMenu/mortgage-icon.svg';
import shoppingIcon from './productMenu/shopping-icon.svg';
import trucksIcon from './productMenu/trucks-icon.svg';
import centerIconAr from './productMenu/centerIconrAr.svg';
import autoIconAr from './productMenu/AutoAr.svg';
import finishingIconAr from './productMenu/FinishingAr.svg';
import insuranceIconAr from './productMenu/InsuranceAr.svg';
import leasingIconAr from './productMenu/leasingAr.svg';
import mortgageIconAr from './productMenu/MortgageAr.svg';
import shoppingIconAr from './productMenu/ShoppingAr.svg';
import trucksIconAr from './productMenu/TrucksAr.svg';
import walletHeaderImage from './wallet/wallet-header-image.svg';
import nationalId from './wallet/nationalId.svg';
import merchants from './merchantsList/merchants.svg';
import search from './merchantsList/search.svg';
import filter from './merchantsList/filter.svg';
import formHeaderIcon from './requestMoreInfo/car.svg';
import arrowIconDown from './requestMoreInfo/arrowDown.svg';
import phoneIcon from './merchantsList/phone.svg';
import locationIcon from './merchantsList/location.svg';
import trophyIcon from './programs/trophy.svg';
import contactLogo from './menu/logo.svg';
import settings from './profile/settings.svg';
import email from './profile/email.svg';
import account from './profile/account.svg';
import phone from './profile/phone.svg';
import idCard from './profile/idCard.svg';
import closeCircle from './profile/closeCircle.svg';
import upload from './profile/upload.svg';
import logout from './menu/logout.svg';
import calendarWhite from './contractDetails/calendar-white.svg';
import contractHeaderIcon from './contractDetails/contract-header-icon.svg';
import autoContractIcon from './myInstallments/auto.svg';
import mortgageContractIcon from './myInstallments/mortgage.svg';
import finishingContractIcon from './myInstallments/finishing.svg';
import insuranceContractIcon from './myInstallments/insurance.svg';
import leasingContractIcon from './myInstallments/leasing.svg';
import shoppingContractIcon from './myInstallments/shopping.svg';
import trucksContractIcon from './myInstallments/trucks.svg';
import contractsEmpty from './myInstallments/contracts-empty.svg';

import store from './branch/store.svg';
import location from './branch/location.svg';
import call from './branch/call.svg';
import whiteArrowRight from './branch/arrow-right.svg';
import paymentIcon from './payment/payment.svg';
import instagramIcon from './contactUs/instagram.svg';
import facebookIcon from './contactUs/facebook.svg';
import twitterIcon from './contactUs/twitter.svg';
import youtubeIcon from './contactUs/youtube.svg';
import fawry from './payment/fawry.svg';

export class Screens {
  static home = {
    stars: require('./home/stars.png'),
    smallLogo: require('./home/contact-rewards-text.png'),
    smallLogoAr: require('./home/contact-rewards-text-ar.png'),
    menuIcon,
    languageIcon,
    languageIconBig,
    testUser: require('./home/user-dummy.png'),
    logo: require('./home/playstore-icon.png'),
    homeTabIcon,
    contactTabIcon,
    walletTabIcon,
    phoneTabIcon,
    homeTabActiveIcon,
    contactTabActiveIcon,
    phoneTabActiveIcon,
    walletTabActiveIcon,
    contactMainIcon,
    contactAuto,
    contactMortage,
    contactInsurance,
    contactLeasing,
    contactTrucks,
    contactShopping,
    conatctFinishing,
    contactAutoAr,
    contactMortageAr,
    contactInsuranceAr,
    contactLeasingAr,
    contactTrucksAr,
    contactShoppingAr,
    conatctFinishingAr,
  };

  static terms = {
    sheet,
  };

  static login = {
    mobile,
  };

  static registration = {
    registration,
    person,
    mail,
  };

  static product = {
    auto,
    insurance,
    shopping,
    trucks,
    finishing,
    mortgage,
    leasing,
    facebook,
    twitter,
    instagram,
    youtube,
    linkedIn,
    sample: require('./product/autoSample.png'),
    loanCalculator,
    contactAutoAr,
    contactMortageAr,
    contactInsuranceAr,
    contactLeasingAr,
    contactTrucksAr,
    contactShoppingAr,
    conatctFinishingAr,
    moreInfoIcon,
  };

  static productMenu = {
    centerIcon,
    autoIcon,
    finishingIcon,
    insuranceBrokerageIcon,
    leasingIcon,
    mortgageIcon,
    shoppingIcon,
    trucksIcon,
    centerIconAr,
    autoIconAr,
    finishingIconAr,
    insuranceIconAr,
    leasingIconAr,
    mortgageIconAr,
    shoppingIconAr,
    trucksIconAr,
  };

  static onboarding = {
    arrowRight,
    car: require('./onboarding/car-shopping.jpg'),
    house: require('./onboarding/house.jpg'),
    hands: require('./onboarding/furniture-shopping.jpg'),
    money: require('./onboarding/family-shopping.jpg'),
  };

  static offersList = {
    offers,
  };

  static wallet = {
    walletHeaderImage,
    nationalId,
  };

  static branches = {
    store,
    location,
    call,
    whiteArrowRight,
  };

  static contractDetails = {
    calendarWhite,
    contractHeaderIcon,
  };

  static merchantsList = {
    merchants,
    search,
    filter,
    phoneIcon,
    locationIcon,
  };

  static myInstallments = {
    autoContractIcon,
    mortgageContractIcon,
    finishingContractIcon,
    insuranceContractIcon,
    trucksContractIcon,
    leasingContractIcon,
    shoppingContractIcon,
    contractsEmpty,
  };

  static requestMoreInfo = {
    formHeaderIcon,
    alertIcon: require('./requestMoreInfo/alert.png'),
    arrowIconDown,
  };

  static programs = {
    trophyIcon,
  };

  static menu = {
    contactLogo,
    arrowRight,
    logout,
    contactLogoAr: require('./menu/contactRewardsAr.png'),
    contactLogoEn: require('./menu/contactRewardsEn.png'),
  };

  static profile = {
    settings,
    email,
    account,
    phone,
    idCard,
    closeCircle,
    upload,
  };

  static payment = {
    paymentIcon,
    fawry,
  };

  static contactUs = {
    instagramIcon,
    facebookIcon,
    twitterIcon,
    youtubeIcon,
  };
}
