import http from '../auth/http-common';


class AccountService {
    retrieveAllAccount() {
        return http.execute('GET', '/staff/account', null, {
            transformResponse: [function (data) {
                return data ? JSON.parse(data): data;
            }]

        });
    }
    deleteAccountById(id){
        return http.execute('DELETE',`/staff/account/${id}`);
    }
    retrieveAccountById(id){
        return http.execute('GET',`/staff/account/${id}`);
    }
    updateAccount(id, data){
        return http.execute('PUT', `/staff/account/${id}`, data);
    }
    createAccount(data){
        return http.execute('POST', "/staff/account/new", data);
    }
    retrieveAccountByIppis(ippis){
        return http.execute('GET', `/staff/account/ippis/${ippis}`);
    }
    getBanks(){
        return http.execute('GET',"/staff/bank");
    }
    getPensions(){
        return http.execute('GET',"/staff/pension");
    }
}

export default new AccountService();