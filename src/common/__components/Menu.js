import React from 'react';
import { connect } from 'react-redux';

import { appShowMenu } from '../app/actions';
import { View, ScrollView, Link } from '../components';
import { colors, mainCSS } from '../styles';
import os from '../os';

const Divider = () => <View style={mainCSS.divider} />;

const Menu = ({ appShowMenu }) => {
  const hide = () => appShowMenu(false);

  const MenuLink = ({ ...props }) => {
    if (!props.message) {
      let t = `links.${props.to.slice(1) || 'menu.home'}.title`;
      props.message = os.messages[t];
    }
    props.onPress = hide;
    props.underlayColor = colors.menuTouch;
    props.linkStyle = mainCSS.m_link;
    return <Link {...props} />;
  };

  return (
    <ScrollView automaticallyAdjustContentInsets={false} style={mainCSS.menu}>
      <MenuLink exactly to="/" />
      <MenuLink to="/iconlist/fa" />
      <MenuLink to="/iconlist/go" />
      <MenuLink to="/iconlist/io" />
      <MenuLink to="/iconlist/md" />
      <MenuLink to="/iconlist/ti" />
      <MenuLink to="/iconlist/all" />
      <Divider />
      <MenuLink to="/about" />
    </ScrollView>
  );
};

export default connect(null, { appShowMenu })(Menu);
