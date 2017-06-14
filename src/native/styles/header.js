import { StyleSheet } from 'react-native';
import { opts, colors } from '../../common/const';

export const headerCSS = StyleSheet.create({
  root: {
    backgroundColor: colors.header,
    paddingHorizontal: 6,
    height: 46,
  },
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.light,
    fontSize: opts.fontSize * 1.4,
  },
});
