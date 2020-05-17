import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchIcon from '@material-ui/icons/Search';
import Global_search from '../Global_search/Global_search';
import Item from '../Item/Item';
import axios from 'axios';
import ReactSpinner from 'react-bootstrap-spinner'
import './Home.css'
function Home(){

    React.useEffect(()=>{
        get_status_summary();
    },[]);

    const [countries_list,set_countries_list] = React.useState([]);
    const get_status_summary = () =>{
        axios.get('https://api.covid19api.com/summary').then(
            response=>{
                var request=response.data;
                set_countries_list(request['Countries']);
                console.log(request['Countries'])
            },error =>{
                console.log(error)
            }
        );
    }
    return (
            <div className='home-page'>
                <Global_search />
                <div Style={countries_list.length > 0 ? 'display:none':'display:block'}>
                    <Row >
                        <Col></Col>
                        <Col> <ReactSpinner type="border" color="primary" size="5" /></Col>
                        <Col></Col>
                    </Row>
                </div>
                {
                    countries_list.map((el,index) => {
                        while(index < 5){
                            return <Item totalConfirmed={el.TotalConfirmed} CountryCode={el.CountryCode} />
                        }
                    })
                }
            </div>
        )
}
export default Home;