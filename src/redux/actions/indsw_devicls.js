import { failure, success } from "../../helpers/redux";
import { apiGet } from "../../services/api";
import { TYPE } from "../reducers/insw_devicls";

export const listCountry = ({ params }) => async (dispatch) => {
  let response = ""
  try {
    response = await apiGet(`${"/negara"}`, params);
    console.log(response?.data);
    dispatch({
      type: success(TYPE.LIST_COUNTRY),
      payload: response?.data,
    });
  } catch (error) {
    dispatch({
      type: failure(TYPE.LIST_COUNTRY),
      error: "error",
    });
  }
};

export const listPelabuhan = ({ params }) => async (dispatch) => {
  let response = ""
  console.log("PARAMS: ", params);
  try {
    response = await apiGet(`${"/pelabuhan"}`, params);
    console.log(response?.data);
    dispatch({
      type: success(TYPE.LIST_PELABUHAN),
      payload: response?.data,
    });
  } catch (error) {
    dispatch({
      type: failure(TYPE.LIST_PELABUHAN),
      error: "error",
    });
  }
};

export const getDetailHsCode = ({ params }) => async (dispatch) => {
  let response = ""
  try {
    response = await apiGet(`${"/barang"}`, params);
    console.log(response?.data);
    dispatch({
      type: success(TYPE.LIST_DETAIL_HS),
      payload: response?.data,
    });
  } catch (error) {
    dispatch({
      type: failure(TYPE.LIST_DETAIL_HS),
      error: "error",
    });
  }
};

export const getDetailTarif = ({ params }) => async (dispatch) => {
  let response = ""
  try {
    response = await apiGet(`${"/tarif"}`, params);
    console.log(response?.data);
    dispatch({
      type: success(TYPE.LIST_DETAIL_TARIF),
      payload: response?.data,
    });
  } catch (error) {
    dispatch({
      type: failure(TYPE.LIST_DETAIL_TARIF),
      error: "error",
    });
  }
};