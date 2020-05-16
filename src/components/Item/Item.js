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

function Item(props){
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        details: {
          display: 'flex',
          flexDirection: 'column',
        },
        content: {
          flex: '1 0 auto',
        },
        cover: {
          width: 151,
        },
        controls: {
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        },
        playIcon: {
          height: 38,
          width: 38,
        },
    }));
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className='home-page'>
            <Row>
                <Col lg={6}>
                    <Card className={classes.root}>
                    <Flag code={props.CountryCode} height="50" />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mac Miller
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>

                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Item;