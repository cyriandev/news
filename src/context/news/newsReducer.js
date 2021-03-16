import {
    CLEAR_ERRORS,
    GET_NEWS,
    NEWS_ERROR,
    NEWS_LOADING,
    TOPIC_NEWS_ERROR,
    TOPIC_NEWS_LOADING,
    GET_TOPIC_NEWS,
    SEARCH_LOADING,
    GET_RESULTS,
    SEARCH_ERROR,
    SOURCE_LOADING,
    SOURCE_ERROR,
    GET_SOURCES
} from '../types';


export default (state, action) => {
    switch (action.type) {
        case NEWS_LOADING:
            return {
                ...state,
                loading: true
            }

        case SEARCH_LOADING:
            return {
                ...state,
                search_loading: true
            }
        case SOURCE_LOADING:
            return {
                ...state,
                source_loading: true
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
        case GET_SOURCES:
            return {
                ...state,
                sources: action.payload,
                source_loading: false
            }
        case GET_RESULTS:
            return {
                ...state,
                results: action.payload,
                search_loading: false
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

        case SEARCH_ERROR:
            return {
                ...state,
                error: action.payload,
                search_loading: false
            }

        case TOPIC_NEWS_ERROR:
            return {
                ...state,
                error: action.payload,
                topic_loading: false
            }
        case SOURCE_ERROR:
            return {
                ...state,
                error: action.payload,
                source_loading: false
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