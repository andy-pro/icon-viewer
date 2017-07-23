import React from 'react';
import { Route, Redirect, View, Footer } from '../components';
import Header from './Header';
import { mainCSS } from '../styles';
import os from '../os';

export default ({ component: Component, path, exact, ...props }) =>
  <Route
    exact={exact}
    path={path}
    render={routerProps => {
      /*  Single Page Apps for GitHub Pages
          https://github.com/rafrex/spa-github-pages
          Long live Single Page */
      let { search } = routerProps.location,
        qs = /^\?p=\/?(.+)/.exec(search);
      if (qs) {
        qs = '/' + qs[1];
        return <Redirect to={qs} />;
      } else {
        return (
          <View style={mainCSS.page}>
            <Header {...routerProps} />
            <View style={mainCSS.main}>
              <View style={mainCSS.limited}>
                <Component {...routerProps} />
              </View>
            </View>
            {!path.startsWith('/iconlist') && os.isBrowser && <Footer />}
          </View>
        );
      }
    }}
  />;
