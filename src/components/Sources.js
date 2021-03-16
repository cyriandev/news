import React, { useEffect, useContext } from 'react'
import NewsContext from '../context/news/newsContext';



const Sources = () => {
    const newsContext = useContext(NewsContext);
    const { getSources, sources, source_loading } = newsContext;

    useEffect(() => {
        getSources();

        // eslint-disable-next-line 
    }, [])
    return (
        <div className="col-md-4" style={{ position: 'relative' }}>
            <ul className="nav flex-column stick">

                <li className="nav-item">
                    <h4 className="heading">
                        Sources
                  </h4>
                </li>

                {source_loading ? <div className="d-flex justify-content-center mt-5"><div className="spinner"></div></div> :
                    sources.map((item, index) =>

                        <li key={index} className="nav-item">
                            <a className="nav-link malink" href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Sources
