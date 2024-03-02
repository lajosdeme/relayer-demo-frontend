const axios = require("axios");


class Api {
    constructor() {
        console.log(process.env.VUE_APP_BASE_API_URL)
        this.baseUrl = process.env.VUE_APP_BASE_API_URL
    }

    register = async function (name, email, password, passwordConfirm) {
        const url = this.baseUrl + "/register"
        const signUpInput = {
            name: name,
            email: email,
            password: password,
            password_confirm: passwordConfirm,
        }

        try {
            console.log(url)
            const resp = await axios.post(url, signUpInput)
            console.log("response: ", resp)
            return resp.data;
        } catch (error) {
            console.log("Error: ", error)
            return {
                "status": "fail",
                "error": error.message,
            }
        }
    }

    login = async function (email, password) {
        const url = this.baseUrl + "/login"
        const loginInput = {
            email: email,
            password: password,
        }

        try {
            const resp = await axios.post(url, loginInput);
            console.log("response: ", resp)
            // handle status
            return resp.data;
        } catch (error) {
            console.log("Error: ", error)
            // handle error
            return {
                "status": "fail",
                "error": error.message,
            }
        }
    }

    getUser = async function(token) {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' // Assuming JSON data
        };
        console.log(token, "  TTTTTTTT")

        const url = this.baseUrl + "/user"
        try {
            const resp = await axios.get(url, {
                headers
            });
            console.log(resp)
            if (resp.status == 200) {
                return resp.data
            } else {
                return resp.error
            }
        } catch(error) {
            return error
        }
    }
}

export default Api