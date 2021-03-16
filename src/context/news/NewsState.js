import React, { useReducer } from 'react';
import axios from 'axios';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import {
    GET_NEWS,
    NEWS_LOADING,
    CLEAR_ERRORS,
    NEWS_ERROR,
    TOPIC_NEWS_ERROR,
    GET_TOPIC_NEWS,
    TOPIC_NEWS_LOADING,
    SEARCH_LOADING,
    GET_RESULTS,
    SEARCH_ERROR,
    SOURCE_LOADING,
    SOURCE_ERROR,
    GET_SOURCES
} from '../types';


const NewsState = ({ children }) => {
    const initialState = {
        news: [],
        error: null,
        loading: false,
        topic_loading: false,
        search_loading: false,
        source_loading: false,
        topic: [],
        results: [],
        sources: []
    }
    const [state, dispatch] = useReducer(NewsReducer, initialState);




    // Get Country
    const getCountry = async () => {

        setNewsLoading();
        try {
            const res = await axios.get(`https://extreme-ip-lookup.com/json/`);

            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }


    // Get News
    const getNews = async () => {

        setNewsLoading();
        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=za&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2`);

            dispatch({
                type: GET_NEWS,
                payload: res.data.articles
            })
        } catch (err) {
            dispatch({
                type: NEWS_ERROR,
                payload: err.response.data
            })
            setTimeout(() => clearErrors(), 5000);
        }
    }

    // Get Topics
    const getTopics = async (topic) => {

        setTopicLoading();
        try {
            const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=za&category=${topic}&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2`);
            dispatch({
                type: GET_TOPIC_NEWS,
                payload: res.data.articles
            })
        } catch (err) {
            dispatch({
                type: TOPIC_NEWS_ERROR,
                payload: err.response.data
            })
            setTimeout(() => clearErrors(), 5000);
        }
    }

    // Get Topics
    const getResults = async (q) => {

        setSearchLoading();
        try {
            const res = await axios.get(`https://newsapi.org/v2/everything?q=${q}&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2`);

            dispatch({
                type: GET_RESULTS,
                payload: res.data.articles
            })
        } catch (err) {
            dispatch({
                type: SEARCH_ERROR,
                payload: err.response.data
            })
            setTimeout(() => clearErrors(), 5000);
        }
    }

    const getSources = async () => {

        setSourceLoading();
        try {
            const res = await axios.get(`https://newsapi.org/v2/sources?country=za&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2`);
            console.log(res.data);
            dispatch({
                type: GET_SOURCES,
                payload: res.data.sources
            })
        } catch (err) {
            dispatch({
                type: SOURCE_ERROR,
                payload: err.response.data
            })
            setTimeout(() => clearErrors(), 5000);
        }
    }


    // Clear Errors
    const clearErrors = () => dispatch({
        type: CLEAR_ERRORS
    })

    // Set Loading
    const setNewsLoading = () => dispatch({ type: NEWS_LOADING })
    const setTopicLoading = () => dispatch({ type: TOPIC_NEWS_LOADING })
    const setSearchLoading = () => dispatch({ type: SEARCH_LOADING })
    const setSourceLoading = () => dispatch({ type: SOURCE_LOADING })


    return <NewsContext.Provider
        value={{
            news: state.news,
            topic_news: state.topic,
            results: state.results,
            sources: state.sources,
            loading: state.loading,
            search_loading: state.search_loading,
            topic_loading: state.topic_loading,
            source_loading: state.source_loading,
            getNews,
            getTopics,
            getCountry,
            getResults,
            getSources

        }}
    >
        {children}
    </NewsContext.Provider>
}

export default NewsState;

