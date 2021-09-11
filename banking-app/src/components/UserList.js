import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import JSONDATA from '../assets/MOCK_DATA.json';
import Modal from './Modal';



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
        height: '34px',
        border: '1px solid #C6C6C6',
        
    },
    tagsContainer: {
        position: 'absolute',
        display: 'flex',
        top: '73px',
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
        paddingBottom: '0.4rem'
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
    const [ data, setData ] = useState();

    const showModal = () => {
        setModal(!modal);
    }
    return (
        <div
        className={classes.root}
        >
            <div
            className={classes.inputContainer}>
                <input
                className={classes.input}
                type="text" 
                placeholder='Search User...'
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

            <div
            style={{position: 'absolute',
            left: '0px',
            right: '0px',
            top: '16%',
            bottom: '0',
            display: 'flex',
            flexDirection: 'column'}}>

                {JSONDATA.filter((val) => {
                    if (searchTerm ==='') {
                        return val
                    } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    } return false;
                }).map((val, key) => {
                    const testClick =(e) => {
                    setData(val.AccountNumber)
                    setModal(!modal)
                    }
                    return <div key={key}
                        onClick={testClick}
                        className='highlight'
                        style={{ display: 'flex' }}>
                        <div
                            className={classes.userInfo}
                        >{val.AccountNumber}</div>
                        <div
                            className={classes.userInfo}
                        >{val.Name}</div>
                        <div
                            className={classes.userInfo}
                        >{val.CurrentBalance}</div>
                        <div
                            className={classes.userInfo}
                        >{val.Location}</div>
                        <div
                            className={classes.userInfo}
                        >{val.AccountType}</div>
                    </div>
                    
                })}
                {modal ? <Modal data={data} setModal={setModal} /> : null }
            </div>
        </div>
    )
}

export default UserList
