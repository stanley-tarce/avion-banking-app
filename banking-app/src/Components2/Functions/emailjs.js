import emailjs from 'emailjs-com'

const template_id = 'template_bxujani'
const service_id = 'service_dvy7e62'
const user_id = 'user_O6vbwtMvNmFvbRfxb2zla'
const access_token = '6bdbfe7f4ef9a03671b85d93eafe5e10'



const emailFormat = (accountname, accountemail,transactionid, accountnumber, balance, amount, transactiontype,timestamp) => {
     let template_params = {
          to_name: accountname, //User's name
          accountnumber: accountnumber, //Account Number
          account_email: accountemail, //User's email
          transactionid: transactionid, //Transaction ID,
          amount: amount, 
          balance: balance,
          from_email: 'email.avionbanking@gmail.com',
          transactiontype: transactiontype,
          timestamp: timestamp
     }

     console.log(template_params)
     return emailjs.send(service_id, template_id, template_params, user_id).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
     }
     , (error) => {
          console.log('FAILED...', error);
     }
     );
}


export default emailFormat