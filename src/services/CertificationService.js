import http from '../http-common';


class CertificationService {
    retrieveAllCertifications() {
        return http.execute('GET', '/staff/certification');
    }
    deleteCertificationById(id){
        return http.execute('DELETE', `/staff/certification/${id}`);
    }
    retrieveCertificationById(id){
        return http.execute('GET', `/staff/certification/${id}`);
    }
    updateCertification(id, data){
        return http.execute('PUT', `/staff/certification/${id}`, data);
    }
    createCertification(data){
        return http.execute('POST', "/staff/certification/new", data);
    }
    retrieveCertificationByIppis(ippis){
        return http.execute('GET', `/staff/certification/ippis/${ippis}`);
    }
}

export default new CertificationService();