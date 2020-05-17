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

    const [global_total_confirmed,set_global_total_confirmed] = React.useState([]);
    
    /* Get list Summary */
    const get_countries_status_summary = () =>{

        axios.get('https://api.covid19api.com/summary').then(

            response=>{
                var request=response.data;
                set_countries_list(request['Countries']);
                set_global_total_confirmed(request['Global'].TotalConfirmed);
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
    const [selected_country_data,set_selected_country_data] = React.useState({"CountryCode":"LB"});
    const select_country = (country_code) => {
        console.log(country_code)
        set_selected_country_data(country_code);
    }

    /* Search by country name */
    const search_by_country_name = (search_query) => {
        if(search_query.query==''){
            get_countries_status_summary();
        }

        countries_list.map((el,index )=> {
            return el.Country==search_query.query? set_countries_list([el]):''
        });
    }


    return (
            <div className='home-page'>
                {show_spinner()}
                {
                    countries_list.length > 0 ?
                        <div>
                            <Global_search search_by_country_name={search_by_country_name}/>
                            <div className="global-total-confirmed" >
                                <Row>
                                    <Col>
                                        <span className='world-wide-label'>Global-Total Confirmed: </span>
                                        <span className='world-wide-status'>{global_total_confirmed.toLocaleString()}</span>
                                    </Col>
                                </Row>
                            </div>
                
                            <Row>
                                <Col>
                            {
                                countries_list.map((el,index) => {
                                    while(index < 5){
                                        return (
                                            <Row>
                                                <Col>
                                                    <div onClick={() => select_country(el) } >
                                                        <Item county_name={el.Country} total_confirmed={el.TotalConfirmed} total_recovered={el.TotalRecovered} total_deaths={el.TotalDeaths} CountryCode={el.CountryCode} />
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
                                            <Display_selected country_data={selected_country_data}/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    : ''
                }
            </div>
        )
}
export default Home;