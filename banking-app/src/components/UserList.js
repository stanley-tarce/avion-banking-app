import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import JSONDATA from '../assets/MOCK_DATA.json';
import Modal from './Modal';
import { TablePagination } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        height: '70vh',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: '20px',
        right: '40px',
        left: '350px',
        borderTop: '1px solid grey'
    },
    input: {
        width: '95%',
        position: 'absolute',
        left: 0,
        height: '95%',
        border: 'none',
        paddingLeft: '14px',
        fontSize: '16px'
    },
    Icon: {
        position: 'absolute',
        right: '10px',
        marginTop: '7px',
        color: '#C6C6C6'
    },
    inputContainer: {
        width: '327px',
        position: 'relative',
        marginTop: '1.2em',
        left: '0',
        top:'-8px', //Added to fix the issue of the input being cut off
        height: '34px',
        border: '1px solid #C6C6C6',
        
    },
    tagsContainer: {
        position: 'absolute',
        display: 'flex',
        top: '50px', //from 75 to 50px
        left: '0',
        right: '0px',
        backgroundColor: '#384859'
    },
    tags: {
        position: 'relative',
        borderRight: '1px solid #F7F9FE',
        fontWeight: '700',
        textAlign: 'center',
        color: '#F7F9FE',
        fontSize: '1.05rem',
        paddingTop: '0.4rem',
        paddingBottom: '0.4rem',

    },
    foldIcon: {
        position: 'absolute',
        height: '19px',
        marginTop: '2px',
        right: '0px',
        color: '#F7F9FE'
    },
    userInfo: {
        width: '20%',
        fontWeight: '500',
        height: '15%',
        /* paddingTop: '0.05rem', */
        paddingBottom: '1.1rem',
        marginTop: '0.9rem',
        textAlign: 'center',
        color: '#4E4E4E',
        cursor: 'default'
    }
});

const UserList = () => {

    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const [ modal, setModal ] = useState(false);
    const [ accountNumber, setAccountNumber ] = useState();
    const [ name, setName ] = useState();
    const [ accountType, setAccountType] = useState();
    const [ address, setAddress ] = useState();
    const [ currentBalance, setCurrentBalance] = useState();
    const [ city, setCity] = useState();
    const [ contactNumber, setContactNumber] = useState();
    const [ birthDate, setBirthDate] = useState();
    const [ email, setEmail] = useState();
    const [ gender, setGender] = useState();
    const [ locCode, setLocCode] = useState();
    const [ firstName, setFirstName] = useState();
    const [ lastName, setLastName] = useState();
    const [ middleName, setMiddleName] = useState();
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(7);
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    }
    const showModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        const escapeSearchBar = (event) => {
            if (event.keyCode === 27) {
                setSearchTerm('')
            }
        };
        window.addEventListener('keydown', escapeSearchBar);
        return () => {
            window.removeEventListener('keydown', escapeSearchBar);
        };
    }, []);

    const USER_DATA = JSON.parse(localStorage.getItem('userData'))
    const dataContainer =[...USER_DATA]
    console.log(dataContainer)
    return (
        <div>
        <div
        className={classes.root}
        >
            <div
            className={classes.inputContainer}>
                <input
                className={classes.input}
                type="text" 
                placeholder='Search User...'
                style={{
                    outlineColor: '#A7B2D6'}}
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
                />
                <SearchIcon 
                className={classes.Icon}/>
            </div>
            
            <div 
            className={classes.tagsContainer}
            >
                <div
                className={classes.tags}
                style={{
                paddingLeft: '0px',
                width: '20%'}}
                >Account Number 
                    <UnfoldMoreIcon 
                    className={classes.foldIcon}
                    /></div>
                <div
                className={classes.tags}
                style={{width: '20%'}}
                >Name
                    <UnfoldMoreIcon 
                    className={classes.foldIcon}
                    /></div>
                <div
                className={classes.tags}
                style={{width: '20%'}}
                >Current Balance
                <UnfoldMoreIcon 
                    className={classes.foldIcon}
                    /></div>
                <div
                className={classes.tags}
                style={{width: '20%'}}
                >Location
                <UnfoldMoreIcon 
                    className={classes.foldIcon}
                    /></div>
                <div
                className={classes.tags}
                style={{width: '20%'}}
                >Account Type
                <UnfoldMoreIcon 
                className={classes.foldIcon}
                /></div>
            </div>
            {/* <hr 
            style={{position: 'absolute',
            left: '29px',
            right: '5px',
            bottom: '82%'}}
            /> */}
            <TablePagination style={{
                position: 'absolute',
                bottom: '0px',
                right: '0px',
                zIndex: '1'
            }}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={rowsPerPage}
            count={dataContainer.length}
            onChangePage={handlePageChange}
            component = 'div'

        />

            <div
            style={{position: 'absolute',
            left: '0px',
            right: '0px',
            top: '16%',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column'}}>

                {dataContainer.filter((val) => {
                    if (searchTerm ==='') {
                        return val
                    } else if (val.lastname.toLowerCase().includes(searchTerm.toLowerCase())
                                || val.firstname.toLowerCase().includes(searchTerm.toLowerCase())
                                || val.accountID.toLowerCase().includes(searchTerm.toLowerCase())
                                || val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    } return false;
                }).slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((val, key) => {
                    const testClick =(e) => {
                    setAccountNumber(val.accountID)
                    setName(`${val.firstname} ${val.lastname}`)
                    setAccountType(val.accountype)
                    setAddress(val.homeaddress)
                    setCurrentBalance(val.initialbalance);
                    setModal(!modal)

                    setLastName(val.lastname)
                    setFirstName(val.firstname)
                    setMiddleName(val.middlename)
                    setEmail(val.email)
                    setContactNumber(val.contactnumber)
                    setGender(val.gender)
                    setLocCode(val.zipcode)
                    setCity(val.city)
                    setBirthDate(val.dateofbirth)
                    }
                    return <div key={key}
                        onClick={testClick}
                        className='highlight'
                        style={{ display: 'flex' }}>
                        <div
                            className={classes.userInfo}
                        >{val.accountID}</div>
                        <div
                            className={classes.userInfo}
                        >{`${val.firstname} ${val.lastname}`}</div>
                        <div
                            className={classes.userInfo}
                        >{val.initialbalance}</div>
                        <div
                            className={classes.userInfo}
                        >{val.city}</div>
                        <div
                            className={classes.userInfo}
                        >{val.accountype}</div>
                    </div>
                    
                })}
                {modal ? <Modal 
                setModals={setModal} 
                setAccountNumber={accountNumber} 
                setLastName={lastName} 
                setFirstName={firstName} 
                setMiddleName={middleName} 
                accountType={accountType}
                address={address}
                currentBalance={currentBalance}
                setAccountType={accountType}
                setCity={city}
                setContactNumber={contactNumber}
                setBirthDate={birthDate}
                setEmail={email}
                setAddress={address}
                setGender={gender}
                setLocCode={locCode}
                setCurrentBalance={currentBalance}
                /> : null }
            </div>

        </div>

        </div>
    )
}

export default UserList
