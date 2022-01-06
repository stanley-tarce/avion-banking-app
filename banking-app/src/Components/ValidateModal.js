import CancelIcon from '@material-ui/icons/Cancel';
import { Modal } from '@material-ui/core';
import bg from '../assets/bg.svg';


const ValidateModal = ({ open, setOpen, result }) => {


    return (
        <Modal open={open} onClose={() => setOpen(false)}
            style={{
                position: 'absolute',
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
