// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as Redux } from 'react-redux';
import { Provider as Fela } from 'react-fela';
// import localforage from 'localforage';

import configureFela from '../common/__config/fela';
import configureStore from '../common/__config/store';
import initialState from '../common/initialState';
import messages from './messages';

import App from '../common/app/App';
import os from '../common/os';

/* platform dependencies */
os.isBrowser = true;
os.messages = messages;
os.smoothScroll = smoothScroll;

function smoothScroll() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScroll);
    window.scrollTo(0, currentScroll - currentScroll / 5);
  }
}

// var start_time = performance.now()
// process.__elapsed = (msg) => {
//   console.info(msg, performance.now() - start_time)
//   start_time = performance.now()
// }
/* platform dependencies */

const store = configureStore({
  initialState,
  platformDeps: {
    // storageEngine: localforage,
    messages,
  },
});

const styleNode = document.getElementById('stylesheet');
// basename = process.env.NODE_ENV !== 'production' ? '/' : '/web-native-app';
// basename = 'IconExplorer';

const Root = () =>
  <Redux store={store}>
    <Fela mountNode={styleNode} renderer={configureFela()}>
      <BrowserRouter basename="icon-viewer">
        <App />
      </BrowserRouter>
    </Fela>
  </Redux>;

export default Root;
