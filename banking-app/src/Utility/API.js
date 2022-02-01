import axios from 'axios'

const API_URL = `http://localhost:3002`
export const api = (func, obj) => {
    switch (func) {
        case 'devise#login':
            return axios.post(`${API_URL}/login`, obj.body);
        case 'devise#signup':
            return axios.post(`${API_URL}/signup`, obj.body);
        case 'accounts#index':
            return axios.get(`${API_URL}/accounts`, { headers: obj.headers });
        case 'accounts#create':
            return axios.post(`${API_URL}/accounts`, obj.body, { headers: obj.headers })
        case 'accounts#withdraw':
            return axios.patch(`${API_URL}/accounts/${obj.id}/withdraw`, obj.body, { headers: obj.headers })
        case 'accounts#deposit':
            return axios.patch(`${API_URL}/accounts/${obj.id}/deposit`, obj.body, { headers: obj.headers })
        case 'accounts#transfer':
            return axios.patch(`${API_URL}/accounts/${obj.id}/transfer?account_number=${obj.transferId}`, obj.body, { headers: obj.headers })

        default:
            return 0;
    }

}