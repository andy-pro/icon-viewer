import React, { Component } from 'react';

import createIconButton from './iconButton';

const createIconSet = (glyphMap) => {

  class Icon extends Component {
    render() {
      const { name, ...props } = this.props;
      const Glyph = glyphMap[name];
      return (
        <Glyph {...props} />
      )
    }
  }

  Icon.Button = createIconButton(Icon);

  return Icon;
}

export default createIconSet
