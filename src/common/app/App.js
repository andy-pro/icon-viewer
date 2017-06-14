import React from 'react';
import { connect } from 'react-redux';

import { appStart, appStop, appShowMenu } from './actions';
import { Drawer, withRouter } from '../components';
import Page from '../__components/Page';

// Pages
import HomePage from '../home/HomePage';
// import IconsPage from '../icons/IconsPage';
import IconsPage from '../icons/IconListPage';
import AboutPage from '../about/AboutPage';

class App extends React.Component {
  componentDidMount() {
    this.props.appStart();
  }

  componentWillUnmount() {
    this.props.appStop();
  }

  render() {
    let { menuShown, appShowMenu } = this.props;
    return (
      <Drawer open={menuShown} trigger={appShowMenu}>
        <Page path="/" exact component={HomePage} />
        <Page path="/iconlist/:name" component={IconsPage} />
        <Page path="/about" exact component={AboutPage} />
      </Drawer>
    );
  }
}

export default withRouter(
  connect(({ app }) => ({ menuShown: app.menuShown }), {
    appStart,
    appStop,
    appShowMenu,
  })(App)
);
