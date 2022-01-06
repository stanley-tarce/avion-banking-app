import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core';
import { Modal } from '@material-ui/core';
import bg from '../assets/bg.svg';

// const useStyle = makeStyles({
//     container: {
//         width: '100%',
//         height: '30px',
//         textAlign: 'start',
//         marginTop: '0.8rem'
//     },
//     input: {
//         position: 'absolute',
//         width: '250px',
//         right: '-2.5em',
//         border: '1px solid black',
//         borderRadius: '3px',
//         height: '1.25rem',
//         outlineColor: 'rgba(0,0,0,0.6)',
//         paddingLeft: '1rem'
//     },
//     label: {
//         fontWeight: '500'
//     }
// })

const ValidateModal = ({ open, setOpen, result }) => {

    // const classes = useStyle();

    return (
        <Modal open={open} onClose={() => setOpen(false)}
            style={{
                position: 'absolute',
                // bottom: '-1%',
                // right: '-2.95%',
                // top: '-20%',
                // left: '-25%',
                backgroundColor: 'rgba(0,0,0,0.85)',
                zIndex: '10',
                display: 'flex',
                justifyContent: 'center',
                height: '100%'
            }}
        >
            <div
                style={{
                    position: 'fixed',
                    top: '10%',
                    height: '20vh',
                    width: '60vh',
                    backgroundColor: 'Whitesmoke',
                    background: `url${bg}`,
                    marginTop: '14%',
                    borderRadius: '12px'
                }}>
                <CancelIcon
                    style={{
                        position: 'absolute',
                        top: '1.6rem',
                        right: '0.8rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => setOpen(false)}
                />
                <div style={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }
                }>
                    <h2 style={{ textAlign: 'center' }}>Result: </h2>
                    <div>
                        <h1 {...result}>{result.value}</h1>

                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default ValidateModal
