// import { Observable } from 'rxjs';

export const appError = error => ({
  type: 'APP_ERROR',
  payload: { error },
});

// export const dispatchError = error => Observable.of(appError(error));

export const appStart = () => ({
  type: 'APP_START',
});

export const appStop = () => ({
  type: 'APP_STOP',
});

export const appShowMenu = menuShown => ({
  type: 'APP_SHOW_MENU',
  payload: menuShown,
});

export const setCurrentLocale = locale => ({
  type: 'SET_CURRENT_LOCALE',
  payload: locale,
});

export const appLayout = ({ width, height }) => ({
  type: 'APP_LAYOUT',
  payload: {
    orientation: width > height ? 'LANDSCAPE' : 'PORTRAIT',
    width,
    height,
  },
});
