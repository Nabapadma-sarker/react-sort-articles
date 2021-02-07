import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [localArticle, setLocalArticle] = useState(articles)
    const upvotedSort=()=>{
        setLocalArticle([...localArticle].sort((a, b) => a.upvotes < b.upvotes ? 1 : -1))
    }
    const mostRecentSort=()=>{
        setLocalArticle([...localArticle].sort((a, b) => a.date < b.date ? 1 : -1))
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={upvotedSort}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={mostRecentSort}>Most Recent</button>
            </div>
            <Articles articles={localArticle}/>
        </div>
    );

}

export default App;
