import React from 'react';

import { View, Link } from './';
import { mainCSS } from '../styles';

export default () =>
  <View style={mainCSS.footer}>
    <View style={mainCSS.limited}>
      <Link
        to="https://gorangajic.github.io/react-icons/index.html"
        message="react-icons"
        style={mainCSS.f_link}
      />
      <Link
        to="https://github.com/andy-pro/web-native-app"
        message="web-native-app"
        style={mainCSS.f_link}
      />
      <Link
        to="https://github.com/andy-pro"
        message="andy-pro"
        style={mainCSS.f_link}
      />
    </View>
  </View>;
