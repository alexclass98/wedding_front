import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import place from '../images/place.png';
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        height: '400px',
        position: 'relative',
        background: `url(${place}) 53% no-repeat;`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgba(241, 241, 241, 1)',
        overflow: 'hidden',
        margin: 0,
    },
    itemsContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(30, 30, 30, 0.5)',
        padding: '20px',
        color: '#D9D9D9',
        marginBottom: '20px',
        fontFamily: 'Lora',
        fontSize: '24px',
        fontWeight: '400',
        lineHeight: '25px',
        letterSpacing: '0.03em',
        textAlign: 'center',
    },
    button: {
        fontFamily: 'Lora',
        fontSize: '16px',
        width: '300px',
        height: '46px',
        borderRadius: '5px',
        opacity: '1',
        margin: '20px 0px',
        background: 'white',
        "&:hover": {
            backgroundColor: '#808080'
        }
    },
}));

function PlacePage() {
    const classes = useStyles();

    const handleShowMap = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=Дивный+Лес+Красногорский+район');
    };

    return (
        <div className={classes.container}>
            <div className={classes.itemsContainer}>
                Ждем вас по адресу <br />
                Веранда “Дивный Лес” <br />
                Красногорский район
            <Button className={classes.button} onClick={handleShowMap}>Показать на карте</Button>
            </div>
        </div>
    );
}

export default PlacePage;