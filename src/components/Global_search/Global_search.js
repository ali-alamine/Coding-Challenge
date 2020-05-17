import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Global_search.css'

const Global_search =(props) => {
    
    const [search_query,set_search_query] = React.useState({"query":''});
    /* Handle search country */
    const search_country_handler = (e) => {
        let name=e.target.name;
        let value=e.target.value;
        search_query[name]=value;
        set_search_query(search_query);
        props.search_by_country_name(search_query)
    }
    return (
        <div className='global-search'>
            <div className="search-div form-inline justify-content-left md-form form-sm">
                <input onChange={search_country_handler} name='query' className="search-content form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"/>
                <div className='btn search-icon'><SearchIcon /></div>
            </div>
        </div>
    )
}
export default Global_search;