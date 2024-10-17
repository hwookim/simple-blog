const loadEnvironment = (key: string, defaultValue?: string | number) => {
  const value = import.meta.env[key];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`환경변수 ${key}가 설정되지 않음`);
  }

  return value;
};

const ENV = {
  SERVER_URL: loadEnvironment("VITE_SERVER_URL"),
};

export default ENV;
