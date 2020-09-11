import http from '../http-common';


class SkillService {
    retrieveAllSkills() {
        return http.execute('GET', "/staff/skill/list");
    }
    deleteSkillById(id){
        return http.execute('DELETE', `/staff/skill/list/${id}`);
    }
    retrieveSkillById(id){
        return http.execute('GET', `/staff/skill/list/${id}`);
    }
    updateSkill(id, data){
        return http.execute('PUT', `/staff/skill/list/${id}`, data);
    }
    createSkills(data){
        return http.execute('POST', "/staff/skill/list/new", data);
    }
    retrieveSkillByIppis(ippis){
        return http.execute('GET', `/staff/skill/list/ippis/${ippis}`);
    }
    getAllSkills(){
        return http.execute('GET', "/staff/skill")
    }
}

export default new SkillService();