import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flag from 'react-world-flags';

import './Item.css'

function Item(props){
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          marginTop:50,
          cursor:'pointer'
        }
    }));
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className='home-page'>
            <Row>
                <Col lg={6}>
                    <Card className={classes.root}>
                        <Flag code={props.CountryCode} height="120" />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4">
                              Total: 
                               {props.totalConfirmed}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mac Miller
                            </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Item;