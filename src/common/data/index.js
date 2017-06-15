// import fa from './fa-index';
// import go from './go-index';
// import io from './io-index';
// import md from './md-index';
// import ti from './ti-index';

export default {
  name: 'Icon sets',
  key: 'all',
  data: [
    { key: 'fa' },
    { key: 'go' },
    { key: 'io' },
    { key: 'md' },
    { key: 'ti' },
    { key: 'all' },
  ],
  svgs: {
    fa: require('./fa-index').default,
    go: require('./go-index').default,
    io: require('./io-index').default,
    md: require('./md-index').default,
    ti: require('./ti-index').default,
    all: {},
  },
};
