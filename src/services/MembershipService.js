import http from '../http-common';


class MembershipService {
    retrieveAllMembership() {
        return http.execute('GET', "/staff/membership");
    }
    deleteMembershipById(id){
        return http.execute('DELETE', `/staff/membership/${id}`);
    }
    retrieveMembershipById(id){
        return http.execute('GET', `/staff/membership/${id}`);
    }
    updateMembership(id, data){
        return http.execute('PUT', `/staff/membership/${id}`, data);
    }
    createMembership(data){
        return http.execute('POST', "/staff/membership/new", data);
    }
    retrieveMembershipByIppis(ippis){
        return http.execute('GET', `/staff/membership/ippis/${ippis}`);
    }
    getMembershipTypes(){
        return http.execute('GET', "/staff/membership/type");
    }
}

export default new MembershipService();