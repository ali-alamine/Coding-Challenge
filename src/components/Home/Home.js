import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchIcon from '@material-ui/icons/Search';
import Gloabl_search from '../Global_search/Global_search';
import './Home.css'
function Home(){

    return (
        <div className='home-page'>
           <Container>
                <Gloabl_search />
            </Container>
        </div>
    )
}
export default Home;