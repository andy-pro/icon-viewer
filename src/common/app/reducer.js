const initialState = {
  currentTheme: 'defaultTheme',
  error: null,
  menuShown: false,
  started: false,
  currentLocale: null,
  defaultLocale: null,
  locales: null,
  layout: {},
  // messages: null,
};

const setLocale = (state, locale) => {
  // state.messages.setLanguage(locale);
  return { ...state, currentLocale: locale };
};

const reducer = (state = initialState, action) => {
  // Because it's called from the server/frontend/createInitialState.
  if (!action) return state;

  let { type, payload } = action;

  // Map all app errors into state.app.error.
  // In React Native, we show errors in one nicely animated unobtrusive alert.
  // In the browser, we prefer local error messages rendering.
  // TODO: Refactor it. We don't want sticky strings.
  if (type.endsWith('_FAIL')) {
    // $FlowFixMe
    state = { ...state, error: payload.error };
  }

  switch (type) {
    case 'APP_ERROR':
      return { ...state, error: payload.error };

    case 'APP_SHOW_MENU':
      if (payload === undefined) {
        payload = !state.menuShown;
      }
      return { ...state, menuShown: payload };

    case 'APP_START':
      return { ...state, started: true };

    case 'APP_LAYOUT':
      return { ...state, layout: payload };

    case 'SET_CURRENT_LOCALE':
      return setLocale(state, payload);

    default:
      return state;
  }
};

export default reducer;
