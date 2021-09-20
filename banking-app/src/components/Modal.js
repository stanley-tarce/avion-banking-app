import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core';
import bg from '../assets/bg.svg';

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
        height: '1.25rem',
        outlineColor: 'rgba(0,0,0,0.6)',
        paddingLeft: '1rem'
    },
    label: {
        fontWeight: '500',
        position: 'absolute',
        left: '-2.9em',
    }
})

const Modal = (props) => {

    const classes = useStyle();

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
                    height: '75vh',
                    width: '60vh',
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
                    onClick={() => props.setModals(false)}
                />
                <h2>User Information</h2>

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
                            value={props.setAccountNumber}
                            disabled />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <label className={classes.label}
                            htmlFor="accountType"
                        >Account Type</label>
                        <input
                            className={classes.input}
                            type="text" name="accountType"
                            value={props.setAccountType}
                            disabled />
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
                            value={props.setLastName}
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
                            value={props.setFirstName}
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
                            value={props.setMiddleName}
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
                            value={props.setEmail}
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
                            value={props.setContactNumber}
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
                            value={props.setGender}
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
                            value={props.address}
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
                            value={props.setCity}
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
                            value={props.setLocCode}
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
                            value={props.setBirthDate}
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
                            value={props.setCurrentBalance}
                            disabled />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
