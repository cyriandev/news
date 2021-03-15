import React, { useContext, useEffect } from 'react'
import NewsContext from '../context/news/newsContext';
import NewsItem from './NewsItem';

const Home = () => {
    const newsContext = useContext(NewsContext);
    const { getNews, news, loading } = newsContext;

    useEffect(() => {
        getNews();
    }, [])



    return (
        <>
            {loading ? <div className="d-flex justify-content-center"><div class="spinner"></div></div> :
                news.map((item, index) =>
                    <NewsItem key={index} item={item} />
                )
            }

        </>
    )
}

export default Home
