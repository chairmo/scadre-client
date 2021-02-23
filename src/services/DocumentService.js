import http from '../auth/http-common';


class DocumentService {
    uploadDocumentByIppis(ippis, file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);

        return http.execute('POST',`/staff/document/new/${ippis}`, formData, null, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress
        });
    }
    retrieveDocumentByName(name){
        return http.execute('GET', `/staff/document/name/${name}`);
    }
    retrieveDocumentByIppisAndName(ippis, name){
        return http.execute('GET', `/staff/document/${ippis}/name/${name}`);
    }
    deleteDocumentById(id){
        return http.execute('DELETE', `/staff/document/${id}`);
    }
    retrieveDocumentsByIppis(ippis) {
        return http.execute('GET', `/staff/document/ippis/${ippis}`);
    }
}

export default new DocumentService();