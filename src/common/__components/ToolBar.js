import React from 'react';
import { connect } from 'react-redux';

import { appShowMenu } from '../app/actions';
import { View, Text } from '../components';
import { IconButton } from './Icon';
import { headerCSS as styles, iconStyles, iconColors } from '../styles';
import os from '../os';

const icons = {
  home: { key: 'home', title: 'Home', name: 'md-home', to: '/' },
  menu: { key: 'menu', title: 'Menu', name: 'md-menu', act: 'toggleMenu' },
};

const ToolBar = ({ title, history, url, appShowMenu }) => {
  let { isBrowser } = os,
    homeIcon = isBrowser ? 'home' : 'menu';

  const actions = {
    toggleMenu: () => appShowMenu(),
  };

  const __cmd = icon => {
    if (icon.to) return history.push(icon.to);
    if (icon.act) return actions[icon.act]();
  };

  const iconSet = key => {
    let icon = icons[key],
      // dis = icon.dis && !activeEntry;
      dis = icon.dis;
    let set = {
      style: { ...iconStyles.header },
      backgroundColor: iconColors.bgActive,
      // backgroundColor: 'red',
      color: dis ? iconColors.disabled : iconColors.main,
      name: icon.name,
      title: icon.title,
      size: isBrowser ? 15 : 20,
      // size: 20,
    };
    if (!dis) {
      set.onPress = () => __cmd(icon);
    }
    return set;
  };

  return (
    <View style={styles.toolbar}>
      <IconButton {...iconSet(homeIcon)} />
      <Text style={styles.text}>
        {title}
      </Text>
      {isBrowser && <IconButton {...iconSet('menu')} />}
    </View>
  );
};

export default connect(null, { appShowMenu })(ToolBar);
