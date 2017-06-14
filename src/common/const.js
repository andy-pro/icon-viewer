const _main_ = '#311';

export const opts = {
  fontFamily: 'Arial, sans-serif',
  gaps: 15,
  fontSize: 15,
  iconBlockWidth: 110,
};

export const colors = {
  background: 'white',
  main: _main_,
  header: _main_,
  footer: _main_,
  menu: 'white',
  success: '#e0f0d8',
  drawer: '#333',
  touch: '#eee',
  menuTouch: '#555',
  active: _main_,
  selected: _main_,
  disabled: '#555',
  alarm: '#d66',
  primary: '#18a06a',
  dark: '#555',
  light: '#ddd',
  silver: '#ccc',
  border: {
    borderColor: '#ccc',
    borderWidth: 1,
  },
};

export const iconColors = {
  main: colors.light,
  primary: '#522',
  active: '#eee',
  disabled: '#777',
  bgActive: colors.active,
  bgDisabled: colors.disabled,
  bgDelete: colors.alarm,
  delete: '#fff',
};

export const iconProps = {
  size: opts.fontSize * 2,
  fill: iconColors.primary,
  view: {
    width: 110,
    height: 75,
  },
};
