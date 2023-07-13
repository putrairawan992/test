import {
  serviceWithAxios,
} from "./httpClient";

export const apiGet = (url, params) => {
  return serviceWithAxios().get(url, {
    params: params
  });
};
