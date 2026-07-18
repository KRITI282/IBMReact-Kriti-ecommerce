import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase";
const dbPath = "users"
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "../models/User";
import AuthService from "./AuthService";

class UserService {

async register(data) {

    // Create user in Firebase Authentication
    let userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
    );

    // Create User Object
    const newUser = new User();

    newUser.uid = userCredential.user.uid;
    newUser.name = data.name;
    newUser.email = data.email;
    newUser.contact = data.contact;

    // Profile Details (Initially Empty)
    newUser.address = "";
    newUser.city = "";
    newUser.state = "";
    newUser.pincode = "";
    newUser.gender = "";
    newUser.dob = "";

    // Profile Image
    newUser.profileImage = "";

    // User Role


    // Save User in Firestore
    await setDoc(
        doc(db, dbPath, userCredential.user.uid),
        {
            ...newUser
        }
    );

    return newUser;
}
    async login(data) {
        let userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        const docRef = doc(db, dbPath, userCredential.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let user = docSnap.data()
          let authData = {
    name: user.name,
    email: user.email,
    uid: user.uid,
    userType: user.usertype
}
            AuthService.setData(authData)
            return user
        } else {
            toast.error("No such document!");
            console.log("No such document!");
            return false
        }
    }
}



export default new UserService()

