import React from 'react';
import { View, Text, Link, SectionList } from '../components';
import { colors, mainCSS } from '../styles';
import data from '../data';
import os from '../os';

const HomePage = () => {
  const renderSectionHeader = ({ section }) =>
    <View style={mainCSS.section}>
      <Text style={mainCSS.sectionTitle}>
        {section.name}
      </Text>
    </View>;

  const renderItem = ({ item }) =>
    <Link
      to={`/iconlist/${item.key}`}
      underlayColor={colors.touch}
      style={mainCSS.sectionItem}
      message={os.messages[`links.iconlist/${item.key}.title`]}
    />;

  return (
    <SectionList
      sections={[data]}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
    />
  );
};

export default HomePage;
