import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Global_search.css'

function Global_search(){
    return (
        <div className='global-search'>
            <div className="search-div form-inline justify-content-left md-form form-sm">
                <input className="search-content form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"/>
                <div className='btn search-icon'><SearchIcon /></div>
            </div>
        </div>
    )
}
export default Global_search;