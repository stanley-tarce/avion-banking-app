import { useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core';
import user from '../assets/user.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import philippines from '../assets/flags/philippines.png';
import united from '../assets/flags/united.png';
import unitedK from '../assets/flags/unitedK.png';
import china from '../assets/flags/china.png';
import MyAccount from './MyAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles({
    card: {
        position: 'absolute',
        top: '20px',
        left: '318px',
        right: 0,
        backgroundColor: 'white',
        height: '150px',
    },
    image: {
        position: 'absolute',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        objectFit: 'cover',
        top: '81px',
        right: '134px'
    },
    user: {
        position: 'absolute',
        top: '88px',
        right: '65px',
        margin: 0,
        color: '#4B4848'
    },
    icon: {
        position: 'absolute',
        top: '88px',
        right: '40px',
        margin: 0,
        color: '#4B4848'
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'initial',
        marginTop: '43px',
        marginLeft: '29px'
    },
    cardCurrency: {
        height: '70px',
        width: '135px',
        backgroundColor: 'white',
        position: 'absolute',
        top: '65px',
        left: '170px',
        border: '1px solid rgba(0, 0, 0, 0.28)',
        borderRadius: '5px',
        display: 'flex'
    },
    flag: {
        height: '42px',
        width: '40px',
        marginLeft: '20px',
        alignSelf: 'center'
    },
    textCurrency: {
        marginLeft: '10px',
        marginTop: '15px',
        color: '#393939'
    },
    rateCurrency: {
        position: 'absolute',
        left: '69px',
        marginTop: '32px',
        fontSize: '18px',
        fontWeight: '500'
    }
});



const Header = (props) => {

    const todayMonth = new Date().toLocaleString('en-us', {month: 'short'});
    const todayDate = new Date().toLocaleString('en-us', {day: 'numeric'});
    const todayYear = new Date().getFullYear();
    const today = `${todayMonth} ${todayDate}, ${todayYear}`;

    const [ logOut, setLogOut ] = useState(false);
    const [ logOff, setLogOff] = useState(false);
    const showAccount = () => {
        setLogOut(!logOut);
    }

    const [usd, setUsd] = useState();
    const [php, setPhp] = useState();
    const [sgd, setSgd] = useState();
    const [jpy, setJpy] = useState();

    const api = 'http://data.fixer.io/api/latest?access_key=303bd3298954de3bac20d002582cf351';
    const fetchCurrency = () =>{ 
        fetch(api)
        .then(response => response.json())
        .then(data => {
            const { USD, PHP, GBP, CNY } = data.rates

            setUsd(USD.toFixed(2))
            setPhp(PHP.toFixed(2))
            setSgd(GBP.toFixed(2))
            setJpy(CNY.toFixed(2))
    })
    }

    fetchCurrency()

    const classes = useStyles();
    return (
        <div>
            { logOut ? <MyAccount setLogOff={setLogOff} /> : null }
            { logOff ? props.setLogOut(true) : null}
            <Card
            className={classes.card}
            elevation={0}
            >
                {/* <div
                style={{
                    width:'250px',
                    height: '60px',
                    backgroundColor: '#384859',
                    position:'absolute',
                    right: '40px',
                    top: '68px',
                    borderTopLeftRadius: '35.5px',
                    borderBottomLeftRadius: '35.5px'
                    }}></div> */}
                <NotificationsIcon
                className={classes.image}
                style={{
                    marginRight: '2.15em',
                    height: '24px',
                    width: '24px',
                    marginTop: '0.5rem',
                    cursor: 'pointer',
                    color: '#4B4848'
                }} />
                <img 
                className={classes.image}
                src={user} 
                alt="" 
                />
                <h4
                className={`${classes.user} user-name`}
                onClick={showAccount}
                style={{userSelect:'none'}}
                >
                    Admin
                </h4>
                <ArrowDropDownIcon className={`${classes.icon} acct-icon`}
                onClick={showAccount}
                />
                <div
                className={classes.div}
                >
                    <h4
                    style={{fontSize: '24px', marginBottom: 0, color: '#5F5E5E'}}
                    >1 EUR =</h4>
                    <span>as of {today}</span>
                </div>
                <Card 
                className={classes.cardCurrency}>
                   
                        <img 
                        className={classes.flag}
                        src={philippines} 
                        alt='PH'
                        />
                        <h4
                        className={classes.textCurrency}>
                            PHP
                        </h4>
                        <h4
                        className={classes.rateCurrency}
                        >
                            {php}
                        </h4>
                </Card>
                <Card 
                className={classes.cardCurrency}
                style={{marginLeft: '170px'}}
                >
                        <img 
                        className={classes.flag}
                        src={united} 
                        alt='USA'
                        />
                        <h4
                        className={classes.textCurrency}>
                            USD
                        </h4>
                        <h4
                        className={classes.rateCurrency}
                        >
                            {usd}
                        </h4>
                </Card>
                <Card 
                className={classes.cardCurrency}
                style={{marginLeft: '340px'}}
                >
                        <img 
                        className={classes.flag}
                        src={unitedK} 
                        alt='UK'
                        />
                        <h4
                        className={classes.textCurrency}>
                            GBP
                        </h4>
                        <h4
                        className={classes.rateCurrency}
                        >
                            {sgd}
                        </h4>
                </Card>
                <Card 
                className={classes.cardCurrency}
                style={{marginLeft: '510px'}}
                >
                        <img 
                        className={classes.flag}
                        src={china} 
                        alt='CHN'
                        />
                        <h4
                        className={classes.textCurrency}>
                            CNY
                        </h4>
                        <h4
                        className={classes.rateCurrency}
                        >
                            {jpy}
                        </h4>
                </Card>
            </Card>
        </div>
    )
}

export default Header
