import React, { useContext } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles, Typography } from '@material-ui/core';
import bg from '../../assets/bg.svg';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CreateContext } from '../../Data';

const useStyle = makeStyles({
    container: {
        width: '100%',
        height: '30px',
        textAlign: 'start',
        marginTop: '0.8rem',


        // justifyContent: 'space-around',

    },
    input: {
        position: 'absolute',
        width: '250px',
        right: '-6.5em',
        border: '1px solid black',
        borderRadius: '3px',
        paddingTop: '0.5em',
        paddingBottom: '0.5em',
        outlineColor: 'rgba(0,0,0,0.6)',
        paddingLeft: '1rem'
    },
    label: {
        fontWeight: '500',
        position: 'absolute',
        left: '-2.9em',
    }
})

const Modal = () => {
    const { accounts } = useContext(CreateContext);

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const accountID = searchParams.get('accountID')
    const classes = useStyle();
    let objects = accounts.find(data => data.account_number === accountID)
    return (
        <div
            style={{
                position: 'fixed',
                // bottom: '-1%',
                // right: '-2.95%',
                // top: '-100%',
                // left: '-25%',
                bottom: '0',
                right: '0',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(0,0,0,0.85)',
                zIndex: '10',
                display: 'flex',

                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    position: 'relative',
                    height: '80vh',
                    width: '100vh',
                    backgroundColor: 'Whitesmoke',
                    background: `url${bg}`,
                    marginTop: '5%',
                    borderRadius: '12px',
                    overflowY: 'scroll',
                }}>
                <CancelIcon
                    style={{
                        position: 'absolute',
                        top: '1.6rem',
                        right: '0.8rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => navigate(-1)}
                />
                <Typography style={{
                    position: 'absolute',
                    "fontSize": '1.5rem',
                    "fontWeight": "bold",
                    top: "1.6rem",
                    left: "1.6rem"
                }}>User Information</Typography>

                <form
                    style={{
                        backgroundColor: 'none',
                        position: 'absolute',
                        top: '7em',
                        left: '4.4em',
                        width: '70%',
                        height: '70%',
                    }}>
                    <div
                        className={classes.container}
                    >
                        <label
                            className={classes.label}
                            htmlFor="accountNumber"
                        >Account Number</label>
                        <input
                            className={classes.input}
                            type="text"
                            name="accountNumber"
                            value={objects.account_number}
                            disabled />
                    </div>
                    <div className={classes.container}>
                        <label className={classes.label}
                            htmlFor="accountType"
                        >Account Type</label>
                        <input
                            className={classes.input}
                            type="text"
                            name="accountType"
                            value={objects.account_type}
                            disabled
                        />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="name"
                        >Last Name</label>
                        <input
                            className={classes.input}
                            type="text" name="lastName"
                            value={objects.last_name}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="name"
                        >First Name</label>
                        <input
                            className={classes.input}
                            type="text" name="firstName"
                            value={objects.first_name}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="name"
                        >Middle Name</label>
                        <input
                            className={classes.input}
                            type="text" name="middleName"
                            value={objects.middle_name}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="name"
                        >Email Address</label>
                        <input
                            className={classes.input}
                            type="email" name="emailAddress"
                            value={objects.email}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="name"
                        >Contact Number</label>
                        <input
                            className={classes.input}
                            type="text" name="contactNumber"
                            value={objects.contact_number}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="name"
                        >Gender</label>
                        <input
                            className={classes.input}
                            type="text" name="gender"
                            value={objects.gender}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="address"
                        >Home Address</label>
                        <input
                            className={classes.input}
                            type="text" name="homeAddress"
                            value={objects.home_address}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="address"
                        >City</label>
                        <input
                            className={classes.input}
                            type="text" name="city"
                            value={objects.city}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="address"
                        >Zip Code</label>
                        <input
                            className={classes.input}
                            type="text" name="city"
                            value={objects.zip_code}
                            readOnly />
                    </div>

                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="address"
                        >Date of Birth</label>
                        <input
                            className={classes.input}
                            type="text" name="dateOFBirth"
                            value={objects.birth_date}
                            readOnly />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="currentBalance"
                        >Current Balance</label>
                        <input
                            className={classes.input}
                            type="text"
                            name="currentBalance"
                            value={objects.balance}
                            disabled />
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Modal
