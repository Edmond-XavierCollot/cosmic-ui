let config = {
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
  },
};

export const updateConfig = (newConfig) => {
  for (const key in newConfig) {
    if (Object.hasOwnProperty.call(newConfig, key)) {
      config[key] = newConfig[key];
    }
  }
  config = newConfig;
};

export default config;
