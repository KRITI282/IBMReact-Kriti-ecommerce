import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

class authService {

    setData(data) {
        localStorage.setItem("email", data.email);
        localStorage.setItem("uid", data.uid);
        localStorage.setItem("name", data.name);
        localStorage.setItem("userType", data.userType);
    }

    getData() {
        return {
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            uid: localStorage.getItem("uid"),
            userType: localStorage.getItem("userType")
        };
    }

    getUserType() {
        return localStorage.getItem("userType");
    }

    getUid() {
        return localStorage.getItem("uid");
    }

    getEmail() {
        return localStorage.getItem("email");
    }

    logout() {
        localStorage.clear();
        sessionStorage.clear();
        signOut(auth);
    }
}

export default new authService();