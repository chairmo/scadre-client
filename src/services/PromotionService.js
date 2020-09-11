import http from '../http-common';


class PromotionService {
    retrieveAllPromotions() {
        return http.execute('GET', "/staff/promotion");
    }
    deletePromotionById(id){
        return http.execute('DELETE', `/staff/promotion/${id}`);
    }
    retrievePromotionById(id){
        return http.execute('GET', `/staff/promotion/${id}`);
    }
    updatePromotion(id, data){
        return http.execute('PUT', `/staff/promotion/${id}`, data);
    }
    createPromotion(data){
        return http.execute('POST', "/staff/promotion/new", data);
    }
    retrievePromotionByIppis(ippis){
        return http.execute('GET', `/staff/promotion/ippis/${ippis}`);
    }
    getGradeLevel(){
        return http.execute('GET', "/staff/level")
    }
    getRankByLevel(id){
        return http.execute('GET', `/staff/designation/${id}`)
    }
}

export default new PromotionService();