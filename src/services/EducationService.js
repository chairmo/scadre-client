import http from '../auth/http-common';


class EducationService {
    retrieveAllEducation() {
        return http.execute('GET', "/staff/education");
    }
    deleteEducationById(id){
        return http.execute('DELETE', `/staff/education/${id}`);
    }
    retrieveEducation(id){
        return http.execute('GET', `/staff/education/${id}`);
    }
    updateEducation(id, data){
        return http.execute('PUT', `/staff/education/${id}`, data);
    }
    createEducation(data){
        return http.execute('POST', "/staff/education/new", data);
    }
    getAllByIppis(ippis){
        return http.execute('GET', `/staff/education/ippis/${ippis}`);
    }
    getQualifications(){
        return http.execute('GET', "/staff/qualification");
    }
    getCourses(){
        return http.execute('GET', "/staff/course");
    }
}

export default new EducationService();
