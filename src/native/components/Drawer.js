import React from 'react';
import SideMenu from 'react-native-drawer';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { appLayout } from '../../common/app/actions';
import Menu from '../../common/__components/Menu';
import { mainCSS } from '../styles';

export const Drawer = connect(null, {
  appLayout,
})(({ open, trigger, children, appLayout }) =>
  <View style={mainCSS.drawer} onLayout={e => appLayout(e.nativeEvent.layout)}>
    <SideMenu
      open={open}
      content={<Menu />}
      openDrawerOffset={0.3}
      onOpen={() => trigger(true)}
      onClose={() => trigger(false)}
      tapToClose
    >
      {children}
    </SideMenu>
  </View>
);
