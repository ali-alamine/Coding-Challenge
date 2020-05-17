import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchIcon from '@material-ui/icons/Search';
import Global_search from '../Global_search/Global_search';
import Display_selected from '../Display_selected/Display_selected';
import Item from '../Item/Item';
import axios from 'axios';
import ReactSpinner from 'react-bootstrap-spinner';
import './Home.css';

const Home = () => {

    React.useEffect(()=>{
        get_countries_status_summary();
    },[]);
    
    const [countries_list,set_countries_list] = React.useState([]);

    const [global_status,set_global_status] = React.useState([]);

    /* Get list Summary */
    const get_countries_status_summary = () =>{

        axios.get('https://api.covid19api.com/summary').then(

            response=>{
                var request=response.data;
                set_countries_list(request['Countries']);
                set_global_status(request['Global']);
                console.log(request['Countries'])
            },error =>{
                console.log(error)
            }

        );
    };

    /* Show Loader on response success*/
    const show_spinner = () => {
        return (
            <div Style={countries_list.length > 0 ? 'display:none':'display:block'}>
                <Row >
                    <Col></Col>
                    <Col><ReactSpinner type="border" color="primary" size="5" /></Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }

    /* Handle Select Country */
    const [selected_country_code,set_selected_country_code] = React.useState('');
    const select_country = (country_code) => {
        set_selected_country_code(country_code);
    }

    return (
            <div className='home-page'>
                {
                    countries_list.length > 0 ? 
                    <div >
                        <Global_search />
                        <Row>
                            <Col>
                                <span className='world-wide-label'>Global-Total Confirmed:</span>
                                <span className='world-wide-status'>{global_status.NewConfirmed}</span>
                            </Col>
                        </Row>
                    </div>
                    :''
                }
                {show_spinner()}
                <Row>
                    <Col>
                {
                    countries_list.map((el,index) => {
                        while(index < 5){
                            return (
                                <Row>
                                    <Col>
                                        <div onClick={() =>select_country(el.CountryCode) } >
                                            <Item totalConfirmed={el.TotalConfirmed} CountryCode={el.CountryCode} />
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }
                    })
                }
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Display_selected CountryCode={selected_country_code}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
}
export default Home;