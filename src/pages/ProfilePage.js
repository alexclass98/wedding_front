import React, {useState} from 'react';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '500px',
        padding: '40px',
        background: 'rgba(216, 216, 216, 1)',
    },
    title: {
        fontFamily: 'Playfair Display',
        fontSize: '32px',
        color: 'rgba(66, 66, 66, 1)',
        fontWeight: '500',
        lineHeight: '42.66px',
        textAlign: 'center',
        margin: '20px 0',
    },
    text: {
        width: '100%',
        fontFamily: 'Lora',
        color: 'rgba(66, 66, 66, 1)',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'left',
        margin: '10px 0',
    },
    button: {
        fontFamily: 'Lora',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20.48px',
        textAlign: 'center',
        width: '300px',
        height: '46px',
        borderRadius: '5px',
        marginTop: '20px',
        background: 'white',
    },
    radioGroup: {
        color: '#212121!important',
    },
    radioChecked: {
        width: '100%',
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color: '#000000', // Set color to black
        },
    },
    radio: {
        borderRadius: '50%', // Make the radio button itself square
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: "#212121",
        },
    },
});

function ProfilePage() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [drinkPreferences, setDrinkPreferences] = useState('');
    const [transportationNeeds, setTransportationNeeds] = useState([0, 0, 0]);

    const handleTransportationChange = (event) => {
        const newTransportationNeeds = [0, 0, 0];
        newTransportationNeeds[event.target.value] = 1;
        setTransportationNeeds(newTransportationNeeds);
    };

    const handleFormSubmit = () => {
        axios.post('http://localhost:8082/api/GuestForm/create/', {
            fullName: name,
            helpSelector: transportationNeeds,
            preferences: drinkPreferences
        })
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>АНКЕТА ГОСТЯ</div>
            <ThemeProvider theme={theme}>
                <TextField
                    variant="standard"
                    label="Хатнянский Максим, Романова Ирина"
                    placeholder="Фамилия и имя"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </ThemeProvider>
            <div className={classes.text}>
                Нужна ли Вам помощь в организации жилья и транспорта до / от места проведения свадьбы
            </div>
            <FormControl component="fieldset" className={classes.radioChecked}>
                <RadioGroup className={classes.radioGroup} value={transportationNeeds[0] ? 0 : transportationNeeds[1] ? 1 : 2} onChange={handleTransportationChange}>
                    <FormControlLabel value={0} label="Нет" control={<Radio className={classes.radio}/>} />
                    <FormControlLabel value={1} label="Да, нужна помощь с организацией жилья" control={<Radio className={classes.radio}/>} />
                    <FormControlLabel value={2} label="Да, нужна помощь с организацией транспорта" control={<Radio className={classes.radio}/>} />
                </RadioGroup>
            </FormControl>
            <ThemeProvider theme={theme}>
                <TextField
                    variant="standard"
                    label="Сок, б/а пиво, шампанское, вино, коньяк..."
                    placeholder="Ваши предпочтения по напиткам"
                    fullWidth
                    margin="normal"
                    value={drinkPreferences}
                    onChange={(e) => setDrinkPreferences(e.target.value)}
                />
            </ThemeProvider>
            <Button className={classes.button} onClick={handleFormSubmit}>
                ОТПРАВИТЬ
            </Button>
        </div>
    );
}

export default ProfilePage;
