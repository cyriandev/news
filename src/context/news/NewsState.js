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
    TOPIC_NEWS_LOADING
} from '../types';


const NewsState = ({ children }) => {
    const initialState = {
        news: [],
        error: null,
        loading: false,
        topic_loading: false,
        topic: []
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
            const res = await axios.get(`http://newsapi.org/v2/top-headlines?country=za&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2`);

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
            const res = await axios.get(`http://newsapi.org/v2/top-headlines?country=za&category=${topic}&apiKey=29d594ac0cdb45f5a510d0abb7b0b1f2`);
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


    // Clear Errors
    const clearErrors = () => dispatch({
        type: CLEAR_ERRORS
    })

    // Set Loading
    const setNewsLoading = () => dispatch({ type: NEWS_LOADING })
    const setTopicLoading = () => dispatch({ type: TOPIC_NEWS_LOADING })


    return <NewsContext.Provider
        value={{
            news: state.news,
            topic_news: state.topic,
            loading: state.loading,
            topic_loading: state.topic_loading,
            getNews,
            getTopics,
            getCountry

        }}
    >
        {children}
    </NewsContext.Provider>
}

export default NewsState;

