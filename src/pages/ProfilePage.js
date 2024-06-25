import React, {useState} from 'react';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {Checkbox, FormGroup} from "@material-ui/core";

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
        width: '300px',
        marginBottom: '20px',
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
        '& .MuiCheckbox-colorSecondary.Mui-checked': {
            color: '#000000', // изменить цвет чекбокса на зеленый при выборе
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
    const [drinkPreferences, setDrinkPreferences] = useState('')
    const [first, setFirst] = useState(0);
    const [first1, setFirst1] = useState(0);
    const [first2, setFirst2] = useState(0);


    const handleFormSubmit = () => {
        axios.post('http://localhost:8082/api/GuestForm/create/', {
            fullName: name,
            helpSelector: [first, first1, first2],
            preferences: drinkPreferences
        }).catch((error) => {
            console.log(error)
        })
    };

    const labelStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
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
                    InputLabelProps={{
                        shrink: true,
                        style: labelStyle,
                    }}
                />
            </ThemeProvider>
            <div className={classes.text}>
                Нужна ли Вам помощь в организации жилья и транспорта до / от места проведения свадьбы
            </div>
            <FormGroup className={classes.radioChecked}>
                <FormControlLabel
                    control={<Checkbox checked={first}
                                       onChange={() => setFirst(first === 1 ? 0 : 1)}/>}
                    label="Нет"
                />
                <FormControlLabel
                    control={<Checkbox checked={first1}
                                       onChange={() => setFirst1(first1 === 1 ? 0 : 1)}/>}
                    label="Да, нужна помощь с организацией жилья"
                />
                <FormControlLabel
                    control={<Checkbox checked={first2}
                                       onChange={() => setFirst2(first2 === 1 ? 0 : 1)}/>}
                    label="Да, нужна помощь с организацией транспорта"
                />
            </FormGroup>
            <ThemeProvider theme={theme}>
                <TextField
                    variant="standard"
                    label="Сок, б/а пиво, шампанское, вино, коньяк..."
                    placeholder="Ваши предпочтения по напиткам"
                    fullWidth
                    margin="normal"
                    value={drinkPreferences}
                    onChange={(e) => setDrinkPreferences(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                        style: labelStyle,
                    }}
                />
            </ThemeProvider>
            <Button className={classes.button} onClick={handleFormSubmit}>
                ОТПРАВИТЬ
            </Button>
        </div>
    );
}

export default ProfilePage;
