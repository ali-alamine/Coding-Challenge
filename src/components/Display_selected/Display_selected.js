import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './Display_selected.css';
import Flag from 'react-world-flags';

const Display_selected = (props) => {
    const [country_code,set_country_code] = React.useState('');

    React.useEffect(()=>{
        set_country_code(props.country_data.CountryCode)
    },[props.country_data]);

    return (
        <div className='selected-country'>
            <Flag code={country_code} fallback={ <span>Unknown</span> }/>
            <div Style={props.country_data.NewConfirmed == undefined ? 'display:none':'display:block'}>
                • <span>New Confirmed: <span Style="color:green">{props.country_data.NewConfirmed}</span></span> - 
                • <span>New Deaths: <span Style="color:red" >{props.country_data.NewDeaths}</span></span> -
                • <span>Total Recovered: <span Style="color:blue">{props.country_data.TotalRecovered}</span></span>
            </div>
        </div>
    )
}

export default Display_selected;