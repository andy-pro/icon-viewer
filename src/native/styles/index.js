import { StyleSheet } from 'react-native';
import { opts, colors, iconColors, iconProps } from '../../common/const';

export { colors, iconColors, iconProps };
export { headerCSS } from './header';

const textSize = opts.fontSize * 1.3;

export const mainCSS = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: colors.drawer,
  },
  page: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: colors.background,
  },

  limited: {
    flex: 1,
  },

  textContainer: {
    // flex: 1,
    padding: opts.gaps,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flexFlow: 'row wrap',
    // alignItems: 'flex-start',
    fontSize: textSize,
  },

  h_link: {
    marginHorizontal: 20,
    paddingHorizontal: 15,
    fontSize: textSize,
    color: '#559',
    textDecorationLine: 'underline',
    // backgroundColor: '#ffa',
  },

  divider: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
  },

  form: {
    paddingTop: 6,
    paddingBottom: 4,
    paddingHorizontal: 15,
    backgroundColor: '#ffd',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  between: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    fontSize: textSize,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginTop: 4,
  },

  button: {
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },

  picker: {
    flex: 1,
    // flexDirection: 'row',
    // paddingHorizontal: 8,
    // paddingVertical: 2,
    // marginTop: 4
  },

  menu: {
    paddingHorizontal: 10,
  },
  m_link: {
    color: colors.light,
    fontSize: 18,
    padding: 6,
  },

  /* section list */
  section: {
    backgroundColor: colors.success,
    borderBottomColor: colors.silver,
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: opts.gaps,
    marginHorizontal: 1,
  },
  sectionTitle: {
    fontSize: opts.fontSize * 1.2,
    fontWeight: '600',
  },
  sectionItem: {
    borderTopColor: colors.silver,
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: opts.gaps,
    marginHorizontal: 1,
    // color: colors.dark,
    // fontSize: opts.fontSize,
  },
});

export const checkboxCSS = StyleSheet.create({
  input: {
    flexDirection: 'row',
    marginVertical: 4,
    // marginTop: 6,
    marginLeft: 3,
    alignItems: 'center',
  },
  image: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    // paddingVertical: 10,
    paddingRight: 10,
  },
});

export const iconsPageCSS = StyleSheet.create({
  root: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    // paddingVertical: 10,
    padding: 10,
    width: iconProps.view.width,
  },
  icon: {
    ...colors.border,
  },
  name: {
    fontSize: opts.fontSize * 0.7,
    color: colors.dark,
    textAlign: 'center',
    // wordWrap: 'break-word',
  },
});

export const iconStyles = {
  header: {
    // width: 38,
    // paddingLeft: 11,
    // paddingHorizontal: 10,
  },

  // native set 1
  // size: 30,
  // paddingLeft: 12,
  // paddingRight: 6,

  // native set 2
  // size: 30,
  // paddingLeft: 8,
  // paddingRight: 0,
};
