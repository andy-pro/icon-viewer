import React from 'react';
import { NativeRouter } from 'react-router-native';
import { Provider as Redux } from 'react-redux';
import { Platform } from 'react-native';

import configureStore from '../common/__config/store';
import initialState from '../common/initialState';
import App from '../common/app/App';
// import App from '../common/about/AboutPage';
import messages from './messages';

import os from '../common/os';

/* platform dependencies */
os.isNative = true;
os.messages = messages;
os.platform = Platform.OS;
// os.icon_set = {
//   md: require('react-icons/lib/md'),
//   fa: require('react-icons/lib/fa'),
//   ti: require('react-icons/lib/ti'),
//   go: require('react-icons/lib/go'),
//   io: require('react-icons/lib/io'),
//   all: {},
// };

const getDefaultDeviceLocale = () => {
  const { defaultLocale, locales } = initialState.app;
  // const deviceLocale = ReactNativeI18n.locale.split('-')[0];
  const deviceLocale = 'en';
  // console.log('dev loc', deviceLocale); // 'en'
  const isSupported = locales.indexOf(deviceLocale) !== -1;
  return isSupported ? deviceLocale : defaultLocale;
};

initialState.app.currentLocale = getDefaultDeviceLocale();

const store = configureStore({
  initialState,
  platformDeps: {
    // config,
    messages,
  },
});

// Must be the ES6 class to ensure hot reload works for stateless components.
/* eslint-disable react/prefer-stateless-function */
class Root extends React.Component {
  render() {
    return (
      <Redux store={store}>
        <NativeRouter>
          <App />
        </NativeRouter>
      </Redux>
    );
  }
}

export default Root;
