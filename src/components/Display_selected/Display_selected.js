import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './Display_selected.css';
import Flag from 'react-world-flags';

const Display_selected = (props) => {

    return (
        <div className='selected-country'>
            <Flag code={props.CountryCode} fallback={ <span>Unknown</span> }/>
        </div>
    )
}

export default Display_selected;