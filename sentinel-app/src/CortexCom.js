import axios from "axios";
const cookie = require("cookie");

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

            return {...response.data, session: Cookie.parse(response.headers["set-cookie"][0])?.CORTEX_SESSION};
        } catch (error) {
            return null;
        }
    }

    static async getDetails(token, user) {
        try {
            const response = await axios.get(CortexCom.host + '/api/user/' + user, {
                headers: {
                    Cookie: "CORTEX_SESSION="+token
                }
            })
            return response.data;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    static async getAnalyzers(token) {
        try {
            const response = await axios.get(CortexCom.host + '/api/analyzers/?range=all', {
                headers: {
                    Cookie: "CORTEX_SESSION="+token
                }
            })
            return response.data;
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}