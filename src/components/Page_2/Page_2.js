import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Global_search from '../Global_search/Global_search';
import axios from 'axios';
import Display_result from '../Display_result/Display_result';
import Operation from '../Operation/Operation'
import './Page_2.css';

const Page_2 = () => {

    const [result,set_result] = React.useState(1);
    const get_result= (value) => {
        set_result(value);
    }

    return (
        <div className='page_2'>
            {/* <Global_search /> */}
            <div className='content'>
                <Row>
                    <Col> <Operation result={result} operation_type='+' get_result={get_result}/> </Col>
                    <Col> <Display_result result={result}/> </Col>
                    <Col> <Operation result={result} operation_type='-' get_result={get_result}/> </Col>
                </Row>
            </div>
        </div>
    )
}
export default Page_2;