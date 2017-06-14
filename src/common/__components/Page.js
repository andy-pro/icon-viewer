import React from 'react';

import { Route, View, Footer } from '../components';
import Header from './Header';
import { mainCSS } from '../styles';
import os from '../os';

export default ({ component: Component, path, exact, ...props }) =>
  <Route
    exact={exact}
    path={path}
    render={renderProps =>
      <View style={mainCSS.page}>
        <Header {...renderProps} />
        <View style={mainCSS.main}>
          <View style={mainCSS.limited}>
            <Component {...renderProps} />
          </View>
        </View>
        {!path.startsWith('/iconlist') && os.isBrowser && <Footer />}
      </View>}
  />;
