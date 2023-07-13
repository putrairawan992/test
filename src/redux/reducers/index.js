import { combineReducers } from 'redux';
import insw_devicls from './insw_devicls';


const reducers = combineReducers({
    list: insw_devicls
});

export default reducers;
