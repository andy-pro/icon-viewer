import React from 'react';
import { View, Text, Link, SectionList, Icon } from '../components';
import { colors, mainCSS } from '../styles';
import data from '../data';

import MyIcon from '../__components/Icon';
// import IconBase from '../__components/IconBase';

const HomePage = () => {
  const renderSectionHeader = ({ section }) =>
    <View style={mainCSS.section}>
      <Text style={mainCSS.sectionTitle}>
        {section.name}
      </Text>
    </View>;

  const renderItem = ({ item }) =>
    <Link
      to={`iconlist/${item.folder}`}
      underlayColor={colors.touch}
      style={mainCSS.sectionItem}
      message={item.name}
    />;
  console.log('asdfz');
  return (
    <View>

      <MyIcon name="io-android-camera" color="red" />
      <MyIcon name="go-file-code" color="silver" />
      <MyIcon name="md-photo-filter" color="blue" />
      <MyIcon name="ti-film" color="magenta" />

      <MyIcon name="md-menu" />

      <MyIcon.Button name="md-menu" />

      <MyIcon.Button name="io-android-menu" />

      <MyIcon.Button
        name="io-social-facebook"
        color="white"
        message="Login with Facebook"
        backgroundColor="#449"
      />
      <MyIcon.Button
        name="io-social-facebook"
        message="Login with Facebook"
        style={{ borderColor: '#444' }}
        size={50}
        onPress={() => console.log('ququq')}
      />

      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={this.loginWithFacebook}
      >
        Login with Facebook
      </Icon.Button>

      <SectionList
        sections={data}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={item => item.folder}
      />
    </View>
  );
};

export default HomePage;
