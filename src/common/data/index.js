// import fa from './fa-index';
// import go from './go-index';
// import io from './io-index';
// import md from './md-index';
// import ti from './ti-index';

export default {
  name: 'Icon sets',
  key: 'all',
  data: [
    { name: 'FontAwesome', key: 'fa' },
    { name: 'Github Octicons', key: 'go' },
    { name: 'Ionicons', key: 'io' },
    { name: 'Material Design Icons', key: 'md' },
    { name: 'Typicons', key: 'ti' },
    { name: 'All icons', key: 'all' },
  ],
  iconData: {
    fa: require('./fa-index').default,
    go: require('./go-index').default,
    io: require('./io-index').default,
    md: require('./md-index').default,
    ti: require('./ti-index').default,
    all: {},
  },
};
