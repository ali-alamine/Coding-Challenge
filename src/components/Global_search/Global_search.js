import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchIcon from '@material-ui/icons/Search';
import './Global_search.css'

function Gloabl_search(){
    return (
        <div className='global-search'>
           <Container >
                <Row>
                    <Col>
                        <div class="search-div form-inline justify-content-left md-form form-sm">
                            <input class="search-content form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"/>
                            <div className='btn search-icon'><SearchIcon /></div>
                        </div>
                    </Col>
                </Row>

                <Row>

                    {/* Item Component */}

                    {/* Displau Selected Item*/}
                    
                </Row>
            </Container>
        </div>
    )
}
export default Gloabl_search;