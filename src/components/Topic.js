import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import NewsContext from '../context/news/newsContext';
import NewsItem from './NewsItem';

const Topic = () => {
    let { topic } = useParams()

    const newsContext = useContext(NewsContext);
    const { getTopics, topic_news, topic_loading } = newsContext;

    useEffect(() => {
        getTopics(topic);
    }, [topic])
    return (
        <div>
            {topic_loading ? <div className="d-flex justify-content-center"><div class="spinner"></div></div> :
                topic_news.map((item, index) =>
                    <NewsItem key={index} item={item} />
                )
            }
        </div>
    )
}

export default Topic
