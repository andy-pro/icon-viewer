import React from 'react';
import { connect } from 'react-redux';

import {
  TouchableHighlight,
  View,
  Text,
  TextInput,
  ListView,
  Alert,
} from '../components';
import SvgIconBase from '../__components/SvgIconBase';
import { iconColors, mainCSS, iconProps, iconsPageCSS as styles } from '../styles';
import appData from '../data';
import os from '../os';

class IconListPage extends React.Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = this.init(props.match.params.name);
  }

  componentWillReceiveProps(nextProps) {
    this.start = Date.now();
    let { name } = nextProps.match.params;
    if (name !== this.fontName) {
      if (os.isNative) {
        this.refs.listView.scrollTo({ y: 0 });
      } else {
        os.smoothScroll();
      }
      this.setState(this.init(name));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.dataSource !== this.state.dataSource ||
      nextProps.layout !== this.props.layout
    );
  }

  init = name => {
    let ph = 'placeholders.iconlist',
      set = appData.svgs,
      all = name === 'all';
    this.autoFocus = all;
    if (all) {
      ph += '.all';
      set = Object.assign({}, set.fa, set.go, set.io, set.md, set.ti);
    } else {
      set = set[name];
    }
    this.placeholder = os.messages[ph];
    this.set = set;
    this.fontName = name;
    return this.filterGlyphs();
  };

  handleSearchChange = e => {
    this.query = typeof e === 'object' ? e.target.value : e;
    this.setState(this.filterGlyphs());
  };

  filterGlyphs = () => {
    let query = this.query || '',
      glyphs,
      set = this.set;
    if (this.fontName === 'all' && query.length < 3) {
      glyphs = [];
    } else {
      query = query.toLowerCase();
      glyphs = Object.keys(set)
        .filter(item => query === '' || item.toLowerCase().indexOf(query) !== -1)
        .sort();
    }
    let ds = (this.state && this.state.dataSource) || this.ds;
    return { dataSource: ds.cloneWithRows(set, glyphs) };
  };

  onPress = e => {
    // prettier-ignore
    if (os.isBrowser) {
      let d = e.currentTarget.children[0].children[0].children[0].children[0].getAttribute('d')
      Alert.prompt('Press ctrl+c to copy', `<G><Path d="${d}" /></G>`)
    }
  };

  render() {
    let listSize,
      pageSize,
      { fill, size } = iconProps;
    if (os.isNative) {
      let { view } = iconProps,
        { width, height } = this.props.layout,
        wn = Math.floor(width / view.width),
        // height of toolbar + textInput = 75
        hn = Math.floor((height - 75) / view.height);
      listSize = wn * hn;
      pageSize = wn * 2;
      // console.log('layout', wn, hn, listSize, pageSize);
    }
    // console.log('render', this.state.dataSource, this.data);

    const renderItem = (item, sId, rId) =>
      <TouchableHighlight
        style={styles.item}
        underlayColor={iconColors.active}
        onPress={this.onPress}
      >
        <View style={styles.icon}>
          <SvgIconBase svg={item} fill={fill} size={size} />
        </View>
        <Text style={styles.name}>
          {rId}
        </Text>
      </TouchableHighlight>;

    return (
      <View style={styles.root}>
        <View style={mainCSS.row}>
          <TextInput
            placeholder={this.placeholder}
            style={mainCSS.input}
            keyboardType="default"
            returnKeyType="search"
            autoCapitalize="none"
            onChangeText={this.handleSearchChange}
            autoFocus={this.autoFocus}
          />
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={renderItem}
          enableEmptySections
          contentContainerStyle={styles.wrapper}
          automaticallyAdjustContentInsets={false}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="always"
          initialListSize={listSize}
          pageSize={pageSize}
          ref="listView"
        />
      </View>
    );
  }
}

export default connect(({ app }) => ({ layout: app.layout }))(IconListPage);
