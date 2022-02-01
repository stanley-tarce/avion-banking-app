import { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { TablePagination } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { CreateContext } from '../../Data'



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
        marginTop: '.9em',
        left: '0',
        top: '-8px', //Added to fix the issue of the input being cut off
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
        color: '#F7F9FE',
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
        cursor: 'default',
        pointerEvents: 'none',
    }
});

const UserList = () => {

    const { accounts } = useContext(CreateContext)
    const navigate = useNavigate()
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(0);
    const rowsPerPage = 7;
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
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
    const dataContainer = [...USER_DATA]
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
                            outlineColor: '#A7B2D6'
                        }}
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }}
                    />
                    <SearchIcon
                        className={classes.Icon} />
                </div>

                <div
                    className={classes.tagsContainer}
                >
                    <div
                        className={classes.tags}
                        style={{
                            paddingLeft: '0px',
                            width: '20%'
                        }}
                    >Account Number
                        <UnfoldMoreIcon
                            className={classes.foldIcon}
                        /></div>
                    <div
                        className={classes.tags}
                        style={{ width: '20%' }}
                    >Name
                        <UnfoldMoreIcon
                            className={classes.foldIcon}
                        /></div>
                    <div
                        className={classes.tags}
                        style={{ width: '20%' }}
                    >Current Balance
                        <UnfoldMoreIcon
                            className={classes.foldIcon}
                        /></div>
                    <div
                        className={classes.tags}
                        style={{ width: '20%' }}
                    >Location
                        <UnfoldMoreIcon
                            className={classes.foldIcon}
                        /></div>
                    <div
                        className={classes.tags}
                        style={{ width: '20%' }}
                    >Account Type
                        <UnfoldMoreIcon
                            className={classes.foldIcon}
                        /></div>
                </div>
                <TablePagination style={{
                    position: 'absolute',
                    bottom: '0px',
                    right: '0px',
                    zIndex: '1'
                }}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={rowsPerPage}
                    count={accounts.length}
                    onChangePage={handlePageChange}
                    component='div'

                />

                <div
                    style={{
                        position: 'absolute',
                        left: '0px',
                        right: '0px',
                        top: '16%',
                        bottom: '0',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    {accounts && accounts.filter((val) => {
                        return Object.keys(val).filter(val => (val !== "initialbalance")).some(key => val[key].toString().toLowerCase().search(searchTerm.toLowerCase()) !== -1)
                    }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((val, key) => {
                        const testClick = () => {
                            return navigate(`info?accountID=${val.account_number}`)
                        }
                        return <div key={key}
                            onClick={testClick}
                            className='highlight'
                            style={{ display: 'flex' }}
                        >
                            <div
                                className={classes.userInfo}
                            >{val.account_number}</div>
                            <div
                                className={classes.userInfo}
                            >{`${val.first_name} ${val.last_name}`}</div>
                            <div
                                className={classes.userInfo}
                            >{`$ ${val.balance}`}</div>
                            <div
                                className={classes.userInfo}
                            >{val.city}</div>
                            <div
                                className={classes.userInfo}
                            >{val.account_type}</div>
                        </div>

                    })}

                </div>

            </div>

        </div>
    )
}

export default UserList
