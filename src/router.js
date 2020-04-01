import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import searchResultDetailScreen from '../src/screens/searchResultDetail';
import loginScreen from '../src/screens/login';
import forgotPasswordScreen from './screens/forgotPassword';
import resetPasswordScreen from './screens/resetPassword';
import registerScreen from './screens/register';
import splashScreen from './screens/splash';

const AuthNavigator = createStackNavigator(
  {
    Splash: {screen: splashScreen},
    Login: {screen: loginScreen},
    ForgotPassword: {screen: forgotPasswordScreen},
    ResetPassword: {screen: resetPasswordScreen},
    Register: {screen: registerScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

const HomeNavigator = createStackNavigator(
  {
    SearchResultDetail: {screen: searchResultDetailScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'SearchResultDetail',
  },
);

export const Router = createAppContainer(
  createSwitchNavigator({
    Auth: AuthNavigator,
    Home: HomeNavigator,
  }),
);
