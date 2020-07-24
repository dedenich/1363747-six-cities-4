import axios from "axios";
import history from "./history.js";
import {AppRoute} from "./const.js";

const ApiConfig = {
  baseURL: `https://4.react.pages.academy/six-cities`,
  timeout: 5000,
  withCredentials: true,
};

const ErrorsTypes = {
  UNAUTHORIZED: 401,
};

const onUnauthorized = () => {
  history.push(AppRoute.SING_IN);
};

const createAPI = () => {
  const api = axios.create(ApiConfig);

  const onSuccess = (response) => response;
  const onFail = (error) => {
    const {response} = error;

    if (response.status === ErrorsTypes.UNAUTHORIZED) {
      onUnauthorized();
      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
