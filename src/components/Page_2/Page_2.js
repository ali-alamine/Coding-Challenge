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
    return (
        <div className='page_2'>
            {/* <Global_search /> */}
            <div className='content'>
                <Row>
                    <Col> <Operation operation_type='+'/> </Col>
                    <Col> <Display_result /> </Col>
                    <Col> <Operation operation_type='-'/> </Col>
                </Row>
            </div>
        </div>
    )
}
export default Page_2;