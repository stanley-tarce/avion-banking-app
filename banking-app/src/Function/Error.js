export function parseError(obj) {
    let entries = Object.entries(obj)
    let output = {}
    entries.forEach(entry => {
        if (entry[1].length > 1) {
            let newObj = {
                [entry[0]]: `${convertKeyToString(entry[0])} ${entry[1].join(' & ')}`
            }
            output = { ...output, ...newObj }
        }
        else {
            let newObj = { [entry[0]]: entry[1].map(error => `${convertKeyToString(entry[0])} ${error}`) }
            output = { ...output, ...newObj }
        }
    })
    return output
}
function convertKeyToString(key) {

    if (key === 'first_name') return 'First Name'
    else if (key === 'last_name') return 'Last Name'
    else if (key === 'middle_name') return 'Middle Name'
    else if (key === 'first_name') return 'First Name'
    else if (key === 'birth_date') return 'Birth Date'
    else if (key === 'contact_number') return 'Contact Number'
    else if (key === 'email') return 'Email'
    else if (key === 'gender') return 'Gender'
    else if (key === 'city') return 'City'
    else if (key === 'home_address') return 'Home Address'
    else if (key === 'zip_code') return 'Zip Code'
    else if (key === 'balance') return 'Balance'
    else if (key === 'account_number') return 'Account Number'
    else if (key === 'account_type') return 'Account Type'

}