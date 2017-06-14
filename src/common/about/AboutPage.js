import React from 'react';
import { Text, Link } from '../components';
import { mainCSS } from '../styles';

export default () =>
  <Text style={mainCSS.textContainer}>
    {
      'This application allows a convenient way to view and search icons from the '
    }
    <Link
      to="https://gorangajic.github.io/react-icons/index.html"
      message="React Icons"
    />
    {' project.'}
  </Text>;
