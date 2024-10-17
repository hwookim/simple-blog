import ENV from "../config/env";

const HTTP_METHOD = {
  POST(data: any) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  PUT(data: any) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    };
  },
  DELETE() {
    return {
      method: "DELETE",
    };
  },
};

const request = (() => {
  const config = {
    baseURI: ENV.SERVER_URL,
  };

  const getRequest = (uri: string) =>
    fetch(config.baseURI + uri).then((response) => response.json());

  const postRequest = (uri: string, data: any) =>
    fetch(config.baseURI + uri, HTTP_METHOD.POST(data)).then((response) =>
      response.json(),
    );

  const putRequest = (uri: string, data: any) =>
    fetch(config.baseURI + uri, HTTP_METHOD.PUT(data)).then((response) =>
      response.json(),
    );

  const deleteRequest = (uri: string) =>
    fetch(config.baseURI + uri, HTTP_METHOD.DELETE());

  return {
    get: getRequest,
    post: postRequest,
    put: putRequest,
    delete: deleteRequest,
  };
})();

export default request;
