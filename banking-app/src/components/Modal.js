import CancelIcon from '@material-ui/icons/Cancel';


const Modal = (props) => {
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
                height: '80vh',
                width:'80vh',
                backgroundColor: 'Whitesmoke',
                marginTop: '15%',
                borderRadius: '12px'
            }}>
                <CancelIcon 
                style={{
                    position: 'absolute',
                    top: '0.8rem',
                    right: '0.8rem',
                    cursor: 'pointer'
                }}
                onClick={()=> props.setModal(false)}
                />
                HELLO
                {props.data}
            </div>
        </div>
    
    )
}

export default Modal
