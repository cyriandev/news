import React from 'react'
import moment from 'moment'
import Logo from '../assets/n-logo.png';

const NewsItem = ({ item }) => {
    return (
        <div className="col-md-12 card">
            <a className="link" href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="title">{item.title}</h1>
                        <p className="source">{item.source.name} &#183; {moment(item.publishedAt).fromNow()}</p>
                        <p className="description">{item.description}</p>
                    </div>
                    <div className="col-md-4">
                        <img src={item.urlToImage ? item.urlToImage : Logo} alt={item.title} />
                    </div>

                </div>
            </a>
        </div>

    )
}

export default NewsItem
