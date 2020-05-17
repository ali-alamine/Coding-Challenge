import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Operation.css';

const Operation = (props) => {

    
    var [temp_result,set_temp_result]=React.useState(0);
    React.useEffect(()=>{
        console.log(props.result)
        set_temp_result(props.result)
    },[]);

    const increment = () => {
        temp_result ++;
        set_temp_result(temp_result)
        props.get_result(temp_result);
    }
    
    const decrement = () => {
        temp_result --;
        set_temp_result(temp_result)
        props.get_result(temp_result);
    }

    const apply_operation = () => {
        if(props.operation_type=='+'){
            increment();
        }else{
            decrement();
        }
    }

    return (
        <div className='operation'>
            <div className='operation-type' onClick={apply_operation}>{props.operation_type}</div>
        </div>
    )
}
export default Operation;