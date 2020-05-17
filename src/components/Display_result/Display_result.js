import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Display_result.css';

const Display_result = (props) => {



    return (
        <div className='display-result'>
            <div id="result">
                <div className='content-result'>
                    {props.result}
                </div>
            </div>
        </div>
    )
}
export default Display_result;