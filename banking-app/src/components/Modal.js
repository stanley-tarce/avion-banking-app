import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyle, makeStyles } from '@material-ui/core';
import bg from '../assets/bg.svg';

const useStyle = makeStyles({
    container: {
        width: '100%',
        textAlign: 'start',
        marginTop: '0.9rem'
    },
    input: {
        position: 'absolute',
        right: '1.2rem',
        border: '1px solid black',
        borderRadius: '3px',
        height: '1.25rem',
        outlineColor: 'rgba(0,0,0,0.6)'
    },
    label: {
        fontWeight: '500'
    }
})

const Modal = (props) => {

    const classes = useStyle();

    return (
        <div
        style={{
            position: 'absolute',
            bottom: '-1%',
            right: '-2.95%',
            top: '-100%',
            left: '-25%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: '10',
            display: 'flex',
            justifyContent: 'center'}}
        >
            <div
            style={{
                position: 'relative',
                height: '60vh',
                width:'50vh',
                backgroundColor: 'Whitesmoke',
                background: `url${bg}`,
                marginTop: '15%',
                borderRadius: '12px'
            }}>
                <CancelIcon 
                style={{
                    position: 'absolute',
                    top: '1.6rem',
                    right: '0.8rem',
                    cursor: 'pointer'
                }}
                onClick={()=> props.setModals(false)}
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
                        value={props.data} 
                        disabled/>
                    </div>
                    <div
                    className={classes.container}
                    >
                        <label className={classes.label}
                        htmlFor="name"
                        >Name</label>
                        <input 
                        className={classes.input} 
                        type="text" name="Name" 
                        value={props.setName} 
                        readOnly/>
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
                        value={props.accountType} 
                        disabled/>
                    </div>
                    <div
                    className={classes.container}
                    >
                        <label className={classes.label}
                        htmlFor="address"
                        >Address</label>
                        <input 
                        className={classes.input} 
                        type="text" name="address" 
                        value={props.address} 
                        readOnly/>
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
                        value={props.currentBalance} 
                        disabled/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal
