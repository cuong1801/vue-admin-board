import Repository from './Repository';

const resource = "/user"

export default {
    getAllUsers(payload, option) {
        return Repository.post(`${resource}`, payload, option)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error.response.data;
            })
    },

    blockUser(payload) {
        return Repository.post(`${resource}//block-account/`, payload)
            .then(response => {
                return response.data
            })
            .catch(error => {
                return error.response.data;
            });
    }
}