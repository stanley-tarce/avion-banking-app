import axios from 'axios'
const API_URL = `https://avion-banking-api.herokuapp.com`

export const api = (func, obj) => {
    switch (func) {
        case 'devise#login':
            return axios.post(`${API_URL}/login`, obj.body);
        case 'devise#signup':
            return axios.post(`${API_URL}/signup`, obj.body);
        case 'devise#logout':
            return axios.delete(`${API_URL}/logout`, { headers: obj.headers });
        case 'devise#oauth2':
            return axios.post(`${API_URL}/auth/google_oauth2`)
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
        case 'users#show':
            return axios.get(`${API_URL}/user`, { headers: obj.headers })
        default:
            return 0;
    }

}