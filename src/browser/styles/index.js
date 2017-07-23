import { opts, colors, iconColors, iconProps } from '../../common/const';

export { colors, iconColors, iconProps };
export { headerCSS } from './header';

export const mainCSS = {
  page: {
    fontFamily: opts.fontFamily,
    // fontSize: opts.fontSize,
    backgroundColor: colors.background,
  },
  limited: {
    position: 'relative',
    marginHorizontal: 'auto',
    maxWidth: 630,
  },
  main: {
    marginHorizontal: opts.gaps,
    paddingVertical: 60,
    minHeight: '100vh',
  },
  centerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: opts.fontSize,
    color: colors.dark,
  },

  form: {
    paddingBottom: 10,
  },

  divider: {
    borderBottomColor: colors.silver,
    borderBottomWidth: 1,
    // marginBottom: 10,
  },

  row: {
    display: 'flex',
    // align-items: flex-start | flex-end | center | baseline | stretch (default)
    // alignItems: 'flex-start',
    alignItems: 'baseline',
  },
  between: {
    display: 'flex',
    alignItems: 'flex-start',
    // justify-content: flex-start (default) | flex-end | center | space-between | space-around
    justifyContent: 'space-between',
  },
  pullRightRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  pullRightCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  active: {
    backgroundColor: colors.selected,
  },

  /* text-type input */
  input: {
    width: 0,
    outline: 0,
    flex: '1 0 auto',
    fontSize: opts.fontSize * 0.9,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 6,
    borderRadius: 4,
    ...colors.border,
  },

  /* menu & links */
  menu: {
    backgroundColor: colors.menu,
    position: 'absolute',
    zIndex: 10,
    top: 44,
    right: 30,
    boxShadow: '2px 2px 5px ' + colors.silver,
    // width: 150,
    ...colors.border,
  },
  v_link: {
    ':hover': {
      textDecoration: 'underline',
      backgroundColor: colors.touch,
    },
    cursor: 'pointer',
    fontSize: opts.fontSize * 0.9,
    fontFamily: opts.fontFamily,
  },
  h_link: {
    display: 'inline-block',
    padding: '0 0.3em',
  },
  a_link: {
    color: colors.dark,
    textDecoration: 'none',
    padding: '8px 20px',
    display: 'block',
  },

  /* section list */
  section: {
    backgroundColor: colors.success,
    borderBottomColor: colors.silver,
    borderBottomWidth: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: opts.fontSize,
    fontWeight: '600',
  },
  sectionItem: {
    borderTopColor: colors.silver,
    borderTopWidth: 1,
    color: colors.dark,
  },
  /* footer */
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.footer,
    paddingHorizontal: opts.gaps,
    bottom: 0,
    color: colors.light,
    position: 'fixed',
    width: '100%',
    height: 40,
  },
  f_link: {
    color: colors.light,
    fontSize: opts.fontSize * 0.8,
  },
};

// global button styles for Ionicons
export const buttonCSS = {
  backgroundColor: colors.success,
  color: colors.dark,
  outline: 0,
  border: 0,
  borderRadius: 4,
};

export const checkboxCSS = {
  input: {},
  image: {
    top: 4,
    position: 'relative',
    width: 18,
    marginRight: 10,
  },
  label: {
    color: colors.dark,
    fontSize: opts.fontSize * 0.9,
    paddingRight: 10,
    // cursor: 'pointer',
  },
};

export const iconsPageCSS = {
  root: {
    marginTop: 10,
  },
  wrapper: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    textAlign: 'center',
    paddingVertical: 10,
    width: iconProps.view.width,
  },
  name: {
    fontSize: opts.fontSize * 0.7,
    color: colors.dark,
    display: 'block',
    // wordWrap: 'break-word',
  },
  icon: {
    ...colors.border,
    display: 'inline-flex',
  },
};

mainCSS.picker = mainCSS.input;
mainCSS.textContainer = mainCSS.container;

export const iconStyles = {
  header: {
    display: 'flex',
    marginLeft: 5,
    marginRight: 5,
  },
};
