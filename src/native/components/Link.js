import React from 'react';
import { Link as NavLink } from 'react-router-native';
import { Text, Linking } from 'react-native';

import { mainCSS } from '../styles';

export const Link = ({
  to,
  // underlayColor,
  message,
  children,
  linkStyle,
  onPress,
  ...props
}) =>
  to.includes('://')
    ? <Text style={mainCSS.h_link} onPress={() => Linking.openURL(to)}>
        {message}
      </Text>
    : <NavLink to={to} activeOpacity={0.8} onPressOut={onPress} {...props}>
        <Text style={linkStyle}>
          {message}{children}
        </Text>
      </NavLink>;
