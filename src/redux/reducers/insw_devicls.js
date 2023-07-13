import { failure, success } from '../../helpers/redux';

const initialState = {
    listCountry: [],
    listPelabuhan: [],
    listDetailHs: [],
    listDetailTarif: [],
    error: null,
}

export const TYPE = {
    LIST_COUNTRY: 'LIST_COUNTRY',
    LIST_PELABUHAN: 'LIST_PELABUHAN',
    LIST_DETAIL_HS: 'LIST_DETAIL_HS',
    LIST_DETAIL_TARIF: 'LIST_DETAIL_TARIF',
}


export default (state = initialState, action) => {
    switch (action.type) {
        case success(TYPE.LIST_COUNTRY):
            return {
                ...state,
                listCountry: action.payload,
            }
        case failure(TYPE.LIST_COUNTRY):
            return {
                ...state,
                listCountry: [],
                error: action.error,
            }
        case success(TYPE.LIST_PELABUHAN):
            return {
                ...state,
                listPelabuhan: action.payload,
            }
        case failure(TYPE.LIST_PELABUHAN):
            return {
                ...state,
                listPelabuhan: [],
                error: action.error,
            }
        case success(TYPE.LIST_DETAIL_HS):
            return {
                ...state,
                listDetailHs: action.payload,
            }
        case failure(TYPE.LIST_DETAIL_HS):
            return {
                ...state,
                listDetailHs: [],
                error: action.error,
            }

        case success(TYPE.LIST_DETAIL_TARIF):
            return {
                ...state,
                listDetailTarif: action.payload,
            }
        case failure(TYPE.LIST_DETAIL_TARIF):
            return {
                ...state,
                listDetailTarif: [],
                error: action.error,
            }
        default:
            return state
    }
}