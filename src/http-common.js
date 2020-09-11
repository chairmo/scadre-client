import Vue from 'vue';
import axios from 'axios';


let client = axios.create({
    baseURL: "http://localhost:8090/api",
    json: true
});

export default {
    async execute (method, resource, data, config) {
        // inject the accessToken for each request
        let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            ...config
        })
    }
};
