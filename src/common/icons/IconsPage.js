import React from 'react';
import { connect } from 'react-redux';

import { View, Text, TextInput, FlatList } from '../components';
import SvgIconBase from '../__components/SvgIconBase';
import { mainCSS, iconStyles, iconsPageCSS as styles } from '../styles';
import data from '../data';
import os from '../os';

class IconListPage extends React.Component {
  constructor(props) {
    super(props);
    this.all = data.iconData;
    this.state = this.init(props.match.params.name);
  }

  componentWillReceiveProps(nextProps) {
    let { name } = nextProps.match.params;
    if (name !== this.props.match.params.name) {
      this.setState(this.init(name));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.icons !== this.state.icons ||
      nextProps.width !== this.props.width
    );
  }

  init = name => {
    let ph = 'placeholders.iconlist',
      set = this.all,
      all = name === 'all';
    this.autoFocus = all;
    if (all) {
      ph += '.all';
      set = Object.assign({}, set.fa, set.go, set.io, set.md, set.ti);
    } else {
      set = set[name];
    }
    this.placeholder = os.messages[ph];
    this.data = set;
    this.fontName = name;
    return {
      icons: this.getFilteredGlyphs(set, this.query),
    };
  };

  getFilteredGlyphs(set, query = '') {
    if (this.fontName === 'all' && query.length < 3) return [];
    query = query.toLowerCase();
    return Object.keys(set)
      .filter(item => query === '' || item.toLowerCase().indexOf(query) !== -1)
      .sort()
      .map(name => ({ name }));
  }

  handleSearchChange = e => {
    this.query = typeof e === 'object' ? e.target.value : e;
    this.setState({
      icons: this.getFilteredGlyphs(this.data, this.query),
    });
  };

  render() {
    let { width } = this.props,
      gaps = 15,
      itemWidth = 110,
      cols = Math.floor((width - gaps * 2) / itemWidth),
      { fill, size } = iconStyles.list;

    // console.log('render', this.state.icons, this.data);

    const renderItem = ({ item }) =>
      <View style={styles.item}>
        <View style={styles.icon}>
          <SvgIconBase
            name={item.name}
            svgs={this.data}
            fill={fill}
            size={size}
          />
        </View>
        <Text style={styles.name}>
          {item.name}
        </Text>
      </View>;

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

        <FlatList
          data={this.state.icons}
          keyExtractor={item => item.name}
          renderItem={renderItem}
          numColumns={cols}
          columnWrapperStyle={styles.wrapper}
        />

      </View>
    );
  }
}
export default connect(({ app }) => ({ width: app.layout.width }))(
  IconListPage
);
