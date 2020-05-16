import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SearchIcon from '@material-ui/icons/Search';
import Global_search from '../Global_search/Global_search';
import Item from '../Item/Item';
import axios from 'axios';
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
                console.log('error')
                console.log(error)
            }
        );
        
    }
    return (
        <div className='home-page'>
            <Container>
                <Global_search />
                {
                    countries_list.map((el,index) => {
                        while(index < 5){
                            return <Item CountryCode={el.CountryCode} />
                        }
                    })
                }
            </Container>
        </div>
        )
}
export default Home;