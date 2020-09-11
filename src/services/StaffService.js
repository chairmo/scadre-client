import http from '../http-common';


class StaffService {
    retrieveAllStaff() {
        return http.execute('GET', "/staff");
    }
    deleteStaffById(id){
        return http.execute('DELETE', `/staff/${id}`);
    }
    retrieveStaffById(id){
        return http.execute('GET', `/staff/${id}`);
    }
    updateStaff(id, data){
        return http.execute('PUT', `/staff/${id}`, data);
    }
    createStaff(data){
        return http.execute('POST', "/staff/new", data);
    }
    retrieveStaffByIppis(ippis){
        return http.execute('GET', `/staff/ippis/${ippis}`);
    }
    getStates(){
        return http.execute('GET', "/staff/state");
    }
    retrieveLgaByStateId(id){
        return http.execute('GET', `/staff/lga/${id}`);
    }
}

export default new StaffService();