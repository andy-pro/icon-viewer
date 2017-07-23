import React from 'react';
import { TouchableOpacity, Text } from '../components';
import { splitOnce } from '../__lib/utils';
import SvgIconBase from './SvgIconBase';
import appData from '../data';
import { mainCSS } from '../styles';

let { svgs } = appData;

const Icon = ({ name, color, size = 32 }) => {
  // console.log('name', name, svgs[splitOnce(name, '-')[0]]);
  return (
    <SvgIconBase
      name={name}
      svgs={svgs[splitOnce(name, '-')[0]]}
      fill={color}
      size={size}
    />
  );
};

const IconButton = ({
  message,
  children,
  size = 15,
  color = '#555',
  backgroundColor = '#ccc',
  style,
  name,
  onPress,
}) =>
  <TouchableOpacity
    style={[
      mainCSS.button,
      {
        opacity: 0.8,
        borderColor: backgroundColor,
        backgroundColor,
      },
      style,
    ]}
    onPress={onPress}
    activeOpacity={1}
  >
    <Icon size={size * 1.7} color={color} name={name} />
    <Text style={{ fontSize: size, color, fontWeight: '600' }}>
      {message || children}
    </Text>
  </TouchableOpacity>;

// export default Icon;
export { Icon, IconButton };
