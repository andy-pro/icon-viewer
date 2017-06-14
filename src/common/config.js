const config = {
  storage: 'local',
  appName: 'IconExplorer',
};

config.locally = config.storage === 'local' || config.storage === 'localfake';

export default config;
