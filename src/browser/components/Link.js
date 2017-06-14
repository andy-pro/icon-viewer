import React from 'react';
import { NavLink } from 'react-router-dom';

import { View, Text, AnchorLink } from './fela';
import { mainCSS } from '../styles';

const Link = props =>
  typeof props.to === 'function'
    ? <Text onClick={props.to} style={mainCSS.t_link} />
    : props.to.includes('://')
      ? <AnchorLink
          {...props}
          href={props.to}
          target="_blank"
          style={[mainCSS.h_link, props.style]}
        >
          {props.message}
        </AnchorLink>
      : <View style={[props.style, mainCSS.v_link]}>
          <NavLink
            exact={props.exactly}
            activeStyle={{ textDecoration: 'underline' }}
            to={props.to}
            style={mainCSS.a_link}
          >
            {props.message}
            {props.children}
          </NavLink>
        </View>;

export default Link;
