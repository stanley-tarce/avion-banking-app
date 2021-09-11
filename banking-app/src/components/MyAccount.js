import Card from '@material-ui/core/Card';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const MyAccount = () => {

    
    return (
        <Card
        style={{
            position: 'absolute',
            right: '48px',
            top: '14%',
            width: '135px',
            height: '88px',
            zIndex: '10',
            border: '1px solid #C6C6C6',
            borderRadius: '5px',
            backgroundColor: 'rgba(104, 111, 128, 0.05)'
        }}
        >
            <h5
            style={{
                fontWeight:'500',
                fontSize: '14px',
                marginTop: '8px'
            }}>My Account</h5>
            <h4
            style={{
                width: '80%',
                fontSize: '14px',
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '50%',
                transform: 'translateX(-50%)',
                marginTop: '-0.5rem',
                borderTop: '1px solid #C6C6C6',
                paddingTop: '0.8rem'
            }}>
            <ExitToAppIcon
            style={{paddingRight: '4px',
            width: '18px',
            height: '18px',
            marginTop: '2px'
            }}/>
            Log out
            </h4>
        </Card>
    )
}

export default MyAccount
