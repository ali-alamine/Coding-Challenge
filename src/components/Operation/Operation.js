import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Operation.css';

const Operation = (props) => {
    return (
        <div className='operation'>
            <div className='operation-type'>{props.operation_type}</div>
        </div>
    )
}
export default Operation;