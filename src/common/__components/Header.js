import React from 'react';
import { connect } from 'react-redux';

import { appShowMenu } from '../../common/app/actions';

import { View, Helmet, DropdownMenu } from '../components';
import Menu from './Menu';
import ToolBar from './ToolBar';
import { mainCSS, headerCSS } from '../styles';

import os from '../../common/os';

const Header = ({ history, match, menuShown, appShowMenu }) => {
  let { url } = match,
    { isBrowser, messages } = os,
    title = messages[`links.${url.slice(1) || 'home'}.title`];
  return (
    <View style={headerCSS.root}>
      {isBrowser && <Helmet title={title} />}
      <View style={mainCSS.limited}>
        <ToolBar url={url} history={history} title={title} />
        {isBrowser &&
          <DropdownMenu
            open={menuShown}
            content={<Menu />}
            onClose={() => appShowMenu(false)}
          />}
      </View>
    </View>
  );
};

export default connect(({ app }) => ({ menuShown: app.menuShown }), {
  appShowMenu,
})(Header);
