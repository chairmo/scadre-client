import http from '../http-common';


class EmploymentService {
    retrieveAllEmployment() {
        return http.execute('GET', "/staff/employment");
    }
    deleteEmployment(id){
        return http.execute('DELETE', `/staff/employment/${id}`);
    }
    retrieveEmployment(id){
        return http.execute('GET', `/staff/employment/${id}`);
    }
    updateEmployment(id, data){
        return http.execute('PUT', `/staff/employment/${id}`, data);
    }
    createEmployment(data){
        return http.execute('POST', "/staff/employment/new", data);
    }
    retrieveEmploymentByIppis(ippis){
        return http.execute('GET', `/staff/employment/ippis/${ippis}`);
    }
    getMda(){
        return http.execute('GET', "/staff/mda");
    }
    getDepartment(){
        return http.execute('GET', "/staff/department");
    }
}

export default new EmploymentService();
