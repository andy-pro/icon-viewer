import React from 'react';
import PropTypes from 'prop-types';
import transformStyle from './transformStyle';

function createComponent(type = 'div', passThroughProps = []) {
  var FelaComponent = function FelaComponent(
    { children, className, id, style = {}, passThrough = [], ...ruleProps },
    { renderer, theme = {} }
  ) {
    // style = style || {};

    // console.log('create component', type, 'theme:', theme, 'style:', style);

    if (style instanceof Array) style = Object.assign({}, ...style);

    var componentProps = passThroughProps.reduce(function(output, prop) {
      if (typeof prop === 'object') {
        Object.assign(output, prop);
      } else {
        switch (prop) {
          case 'enabled':
          case 'editable':
            if (ruleProps.enabled === false || ruleProps.editable === false)
              output.disabled = true;
            break;
          case 'onChangeText':
            output.onChange = ruleProps.onChangeText;
            break;
          case 'selectedValue':
            output.value = ruleProps.selectedValue;
            break;
          case 'onValueChange':
            output.onChange = ruleProps.onValueChange;
            break;
          case 'onPress':
            output.onClick = ruleProps.onPress;
            break;
          case '$ref':
            output.ref = ruleProps.$ref;
            break;
          case 'source':
            output.src = ruleProps.source;
            break;
          case 'underlayColor':
            style[':hover'] = {
              backgroundColor: ruleProps.underlayColor,
              cursor: 'pointer',
            };
            break;
          default:
            output[prop] = ruleProps[prop];
        }
      }
      return output;
    }, {});

    componentProps.id = id;
    var cls = className ? className + ' ' : '';
    componentProps.className =
      cls + renderer.renderRule(transformStyle, { theme, style });

    return React.createElement(type, componentProps, children);
  };

  FelaComponent.contextTypes = {
    renderer: PropTypes.object,
    theme: PropTypes.object,
  };

  return FelaComponent;
}

export default createComponent;
