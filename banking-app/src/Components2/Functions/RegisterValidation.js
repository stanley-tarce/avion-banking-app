
const validate = (object) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const USER_DATA = 'userData'
  let temp = {
    lastname: '',
    firstname: '',
    middlename: '',
    email: '',
    contactnumber: '',
    gender: '',
    homeaddress: '',
    zipcode: '',
    city: '',
    dateofbirth: '',
    accountype: '',
    initialbalance: ''

  }
  if (!object.state.lastname || (/\d/).test(object.state.lastname)) {
    if (!object.state.lastname) {
      temp.lastname = 'Lastname is required'
    }

    if ((/\d/).test(object.state.lastname)) {
      temp.lastname = 'Last Name should only be in letters'
    }
  }
  if (!object.state.firstname || (/\d/).test(object.state.firstname)) {
    if (!object.state.firstname) {
      temp.firstname = 'Firstname is required'
    }
    if (/d/.test(object.state.firstname)) {
      temp.firstname = 'First Name should only be in letters'
    }
  }
  if (!object.state.middlename || (/\d/).test(object.state.middlename)) {
    if (!object.state.middlename) {
      temp.middlename = 'Middlename is required'
    }
    if ((/\d/).test(object.state.middlename)) {
      temp.middlename = 'Middle Name should only be in letters'
    }
  }
  if (!object.state.email || !re.test(object.state.email)) {
    if (!object.state.email) {
      temp.email = 'Email is required'
    }
    if (!re.test(object.state.email)) {
      temp.email = 'Email is not valid'
    }
  }
  if (!object.state.contactnumber || /^[a-zA-Z]+$/.test(object.state.contactnumber)) {
    if (!object.state.contactnumber) {
      temp.contactnumber = 'Contact Number is required'
    }
    if (/^[a-zA-Z]+$/.test(object.state.contactnumber)) {
      temp.contactnumber = 'Contact Number should only be in numbers'
    }
  }
  if (!object.state.gender) {
    temp.gender = "Gender is Required"
  }
  if (!object.state.homeaddress) {
    temp.homeaddress = "Home Address is Required"
  }
  if (!object.state.city) {
    temp.city = "City is required"
  }
  if (!object.state.zipcode || (/^[a-zA-Z]+$/).test(object.state.zipcode)) {
    if (!object.state.zipcode) {
      temp.zipcode = "Zipcode is required"
    }
    if (object.state.zipcode.length !== 4) {
      temp.zipcode = "Zipcode should be 4 digits"
    }
    if ((/^[a-zA-Z]+$/).test(object.state.zipcode)) {
      temp.zipcode = "Zipcode should be in numbers "
    }

  }
  if (!object.state.dateofbirth) {
    temp.dateofbirth = "Date of Birth is required"
  }
  if (!object.state.accountype) {
    temp.accountype = "Account Type is required"
  }

  //Second Part of the validation 

  if (localStorage.getItem(USER_DATA)) {
    for (const userlist of JSON.parse(localStorage.getItem(USER_DATA))) {
      if (object.state.firstname === userlist.firstname) {
        temp.firstname = 'Firstname already exists'
      }
      if (object.state.email === userlist.email) {
        temp.email = 'Email already exists'
      }
    }
  }



  // lastname: state.lastname ? '' : "Last Name is required",
  //   firstname: state.firstname ? '' : "First is required",
  //     middlename: state.middlename ? '' : "Middlename is required",
  //       email: re.test(state.email) ? '' : "Email is required",
  //         contactnumber: state.contactnumber ? "" : "Contact Number is required",
  //           gender: state.gender ? "" : "Gender is required",
  //             homeaddress: state.homeaddress ? "" : "Home Address is required",
  //               zipcode: state.zipcode ? "" : "Zipcode is required",
  //                 city: state.city ? "" : "City is required",
  //                   dateofbirth: state.dateofbirth ? "" : "Date of Birth is required",
  //                     accountype: state.accountype ? "" : "Account Type is required",
  //                       initialbalance: state.initialbalance ? "" : "Initial Balance is required"
  object.setState({ errors: { ...temp } });
  return Object.values(temp).every(x => x === '')
}

export default validate;