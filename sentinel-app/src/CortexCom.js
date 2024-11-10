import axios from "axios";

export default class CortexCom {
    static host = "http://localhost:9001";

    static async authenticate(user, password) {
        try {
            const response = await axios.post(CortexCom.host + '/api/login', {
                user,
                password
            }, {
                withCredentials: true
            });

            return response.data;
        } catch (error) {
            return null;
        }
    }

    static async getDetails(user) {
        try {
            const response = await axios.get(CortexCom.host + '/api/user/' + user.id)
            return response.data;
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}