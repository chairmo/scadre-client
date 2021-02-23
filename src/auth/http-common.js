import axios from 'axios';


let client = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    json: true
});

export default {
    async execute (method, resource, data, config) {
        // inject the accessToken for each request

        let user = JSON.parse(localStorage.getItem('user'));

        if (user && user.accessToken) {
            return client({
                method,
                url: resource,
                data,
                headers: {
                    Authorization: 'Bearer ' + user.accessToken
                },
            ...config
        })
    } else {
            return {}
        }
    }
};
