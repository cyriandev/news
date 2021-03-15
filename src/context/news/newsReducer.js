import {
    CLEAR_ERRORS,
    GET_NEWS,
    NEWS_ERROR,
    NEWS_LOADING,
    TOPIC_NEWS_ERROR,
    TOPIC_NEWS_LOADING,
    GET_TOPIC_NEWS
} from '../types';


export default (state, action) => {
    switch (action.type) {
        case NEWS_LOADING:
            return {
                ...state,
                loading: true
            }
        case TOPIC_NEWS_LOADING:
            return {
                ...state,
                topic_loading: true
            }

        case GET_NEWS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case GET_TOPIC_NEWS:
            return {
                ...state,
                topic: action.payload,
                topic_loading: false
            }

        case NEWS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TOPIC_NEWS_ERROR:
            return {
                ...state,
                error: action.payload,
                topic_loading: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }

        default:
            return state;
    }
}