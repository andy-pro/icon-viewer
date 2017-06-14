import { opts, colors } from '../../common/const';

export const headerCSS = {
  root: {
    backgroundColor: colors.header,
    position: 'fixed',
    top: 0,
    width: '100%',
    color: colors.light,
    zIndex: 1,
  },
  toolbar: {
    display: 'flex',
    height: 40,
    paddingHorizontal: 15,
    alignItems: 'center',
    // justify-content: flex-start (default) | flex-end | center | space-between | space-around
    justifyContent: 'space-between',
  },
  text: {
    fontSize: opts.fontSize * 1.2,
  },
};
