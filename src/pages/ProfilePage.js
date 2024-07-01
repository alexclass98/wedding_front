import React, {useState} from 'react';
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {Checkbox, FormGroup, IconButton, Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
        marginBottom: '20px'
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
        '& .MuiTypography-body1': {
            color: 'rgba(66, 66, 66, 1)',
            fontFamily: 'Lora',
        }
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
    const [first, setFirst] = useState(null);
    const [first1, setFirst1] = useState(null);
    const [first2, setFirst2] = useState(null);


    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("error");

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };


    const handleFormSubmit = () => {
        axios.post('http://khatnyanskiewedding.ru:8082/api/GuestForm/create/', {
            fullName: name,
            helpSelector: [first, first1, first2].filter(a => a !== null),
            preferences: drinkPreferences
        }).then((response) => {
            setSnackbarMessage('Анкета принята');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
        }).catch((error) => {
            console.log(error)
            setSnackbarMessage('Технические неполадки');
            setSnackbarSeverity("error");
            setSnackbarOpen(true);
        })
    };

    const labelStyle = {
        fontFamily: 'Lora',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    };

    return (
        <div className={classes.container}>
            <Snackbar
                open={snackbarOpen}
                positi
                anchorOrigin={{vertical: "top", horizontal: "right"}}
                sx={{width: "100%", maxWidth: "100%"}}
                autoHideDuration={5000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    sx={{width: "100%"}}
                    severity={snackbarSeverity}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <div className={classes.title}>АНКЕТА ГОСТЯ</div>
            <ThemeProvider theme={theme}>
                <TextField
                    variant="standard"
                    placeholder="Хатнянский Максим, Романова Ирина"
                    label="Фамилия и имя"
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
                    control={<Checkbox checked={first === 0}
                                       onChange={() => {
                                           if (first === null) {
                                               setFirst1(null);
                                               setFirst2(null);
                                           }
                                           setFirst(first === 0 ? null : 0)
                                       }}/>}
                    label="Нет"
                />
                <FormControlLabel
                    control={<Checkbox checked={first1}
                                       onChange={() => {
                                           if (first1 === null) setFirst(null)
                                           setFirst1(first1 === 1 ? null : 1)
                                       }}/>}
                    label="Да, нужна помощь с организацией жилья"
                />
                <FormControlLabel
                    control={<Checkbox checked={first2}
                                       onChange={() => {
                                           if (first2 === null) setFirst(null)
                                           setFirst2(first2 === 2 ? null : 2)
                                       }}/>}
                    label="Да, нужна помощь с организацией транспорта"
                />
            </FormGroup>
            <ThemeProvider theme={theme}>
                <TextField
                    fontFamily='Lora'
                    variant="standard"
                    placeholder="Сок, б/а пиво, шампанское, вино, коньяк..."
                    label="Ваши предпочтения по напиткам"
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
            <Button disabled={name === ''} className={classes.button} onClick={handleFormSubmit}>
                ОТПРАВИТЬ
            </Button>
        </div>
    );
}

export default ProfilePage;
