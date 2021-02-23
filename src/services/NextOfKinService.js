import http from '../auth/http-common';


class NextOfKinService {
    retrieveAllKins() {
        return http.execute('GET', "/staff/kin");
    }
    deleteKinById(id){
        return http.execute('DELETE', `/staff/kin/${id}`);
    }
    retrieveKinById(id){
        return http.execute('GET', `/staff/kin/${id}`);
    }
    updateKin(id, data){
        return http.execute('PUT', `/staff/kin/${id}`, data);
    }
    createKin(data){
        return http.execute('POST', "/staff/kin/new", data);
    }
    retrieveKinByIppis(ippis){
        return http.execute('GET', `/staff/kin/ippis/${ippis}`);
    }
    getStates(){
        return http.execute('GET', "/staff/state");
    }
    retrieveLgaByStateId(id){
        return http.execute('GET', `/staff/lga/${id}`);
    }
}

export default new NextOfKinService();