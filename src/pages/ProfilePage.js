import React, {useState} from 'react';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
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
        fontWeight: '500',
        lineHeight: '42.66px',
        textAlign: 'center',
        margin: '20px 0',
    },
    text: {
        width: '100%',
        fontFamily: 'Lora',
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
        width: '200px',
        height: '46px',
        borderRadius: '5px',
        marginTop: '20px',
        background: 'white',
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
    const [transportationNeeds, setTransportationNeeds] = useState([1, 0, 0]); // Example format: [1, 0, 0]

    const handleTransportationChange = (index) => {
        const newTransportationNeeds = [0, 0, 0];
        newTransportationNeeds[index] = 1;
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
            <div className={classes.text}>
                <label>
                    <input type="radio" name="help" value="Нет" checked={transportationNeeds[0] === 1}
                           onChange={() => handleTransportationChange(0)}/> Нет
                </label>
                <br/>
                <label>
                    <input type="radio" name="help" value="Да, нужна помощь с организацией жилья"
                           checked={transportationNeeds[1] === 1}
                           onChange={() => handleTransportationChange(1)}/> Да, нужна помощь с
                    организацией жилья
                </label>
                <br/>
                <label>
                    <input type="radio" name="help" value="Да, нужна помощь с организацией транспорта"
                           checked={transportationNeeds[2] === 1}
                           onChange={() => handleTransportationChange(2)}/> Да, нужна
                    помощь с организацией транспорта
                </label>
            </div>
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