import http from '../http-common';


class HistoryService {
    retrieveAllHistory() {
        return http.execute('GET', "/staff/history");
    }
    deleteHistoryById(id){
        return http.execute('DELETE', `/staff/history/${id}`);
    }
    retrieveHistoryById(id){
        return http.execute('GET', `/staff/history/${id}`);
    }
    updateHistory(id, data){
        return http.execute('PUT', `/staff/history/${id}`, data);
    }
    createHistory(data){
        return http.execute('POST', "/staff/history/new", data);
    }
    retrieveHistoryByIppis(ippis){
        return http.execute('GET', `/staff/history/ippis/${ippis}`);
    }
    getMda(){
        return http.execute('GET', "/staff/mda");
    }
    getDepartment(){
        return http.execute('GET', "/staff/department");
    }
    getGradeLevel(){
        return http.execute('GET', "/staff/level")
    }
    getRankByLevel(id){
        return http.execute('GET', `/staff/designation/${id}`)
    }
    getLocation(){
        return http.execute('GET', "/staff/state")
    }
}

export default new HistoryService();