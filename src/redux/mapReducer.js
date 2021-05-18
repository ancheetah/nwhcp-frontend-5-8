import { MAP_LOADING, MAP_SUCCESS, MAP_FAILED } from './ActionTypes';

const initialMapState = {
    center: [47, -122],
    zoom: 13,
    scrollWheelZoom: false,
    loading: false,
    error: null
};

export default function mapReducer( state = initialMapState, action ) {
    switch(action.type) {
        case MAP_LOADING:
            // mark state as loading, reset any errors
            return {
                ...state,
                loading: true,
                error: null
            };
        case MAP_SUCCESS:
            // all done - set loading to false, update state with data from server
            const map = action.payload.map;
            return {
                ...state,
                center: map.center,
                zoom: map.zoom,
                loading: false
            };
        case MAP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.errMess
            }
        default:
            return state;
    }
}