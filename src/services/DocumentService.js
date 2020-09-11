import http from '../http-common';


class DocumentService {
    uploadDocumentByIppis(ippis, file, onUploadProgress) {
        let formData = new FormData();
        formData.append("file", file);

        return http.execute('POST',`/staff/document/new/${ippis}`, formData, null, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onUploadProgress
        });
    }
    deleteDocumentById(id){
        return http.execute('DELETE', `/staff/document/${id}`);
    }
    retrieveDocumentsByIppis(ippis) {
        return http.execute('GET', `/staff/document/ippis/${ippis}`);
    }
}

export default new DocumentService();