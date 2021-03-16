import React, { useState, useContext } from 'react';
import NewsContext from '../context/news/newsContext';
import NewsItem from './NewsItem';

const Search = () => {

    const newsContext = useContext(NewsContext);
    const { getResults, results, search_loading } = newsContext;
    const [q, setq] = useState('');

    const search = (e) => {
        e.preventDefault();
        getResults(q);
    }


    return (
        <div>
            <div className="mb-5">

                <form onSubmit={search} className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search (press enter after typing)" aria-label="Search" value={q} onChange={(e) => setq(e.target.value)} />
                    <button type="submit" className="btn btn-light d-flex align-items-center"><ion-icon name="search-outline"></ion-icon></button>
                </form>
            </div>
            {search_loading ? <div className="d-flex justify-content-center"><div className="spinner"></div></div> :
                results.map((item, index) =>
                    <NewsItem key={index} item={item} />
                )
            }
        </div>
    )
}

export default Search
