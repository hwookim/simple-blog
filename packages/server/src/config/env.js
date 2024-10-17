const loadEnvironment = (key, defaultValue) => {
  const value = process.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`환경변수 ${key}가 설정되지 않음`);
  }

  return value;
};

const ENV = {
  PORT: loadEnvironment("PORT", 3000),
};

module.exports = ENV;
