import React from 'react';
import Link from './Link';
import Icon from './icons';

export default ({ to, ...props }) => (
  <Link to={to}>
    <Icon.Button
      {...props}
      buttonStyle={{
        marginRight: 6,
      }}
    />
  </Link>
);
