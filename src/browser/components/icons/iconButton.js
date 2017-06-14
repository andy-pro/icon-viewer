import React, { Component } from 'react';

import { Button } from '../fela';
import { buttonCSS } from '../../styles';

export default function createIconButtonComponent(Icon) {
  return class IconButton extends Component {
    render() {
      let {
        type,
        color = 'white',
        buttonStyle,
        backgroundColor,
        onPress,
        children,
        title,
        message,
        ...props
      } = this.props;
      const style = {
        ...buttonCSS,
        ...buttonStyle,
        backgroundColor,
        color,
        cursor: 'pointer',
        paddingLeft: 2,
        paddingRight: 2,
      };
      message = message || children;
      // console.log('icon props', title, props, style, message);

      props.style = props.style || {};
      props.style.marginTop = -4;
      props.size = props.size || 24;
      if (message) {
        style.paddingRight = 6;
        props.style.marginRight = 2;
      }
      style.height = props.size + 2;
      style.paddingTop = Math.round((style.height - 13) / 2.6);
      return (
        <Button style={style} onClick={onPress} type={type} title={title}>
          <Icon {...props} />
          {message}
        </Button>
      );
    }
  };
}
