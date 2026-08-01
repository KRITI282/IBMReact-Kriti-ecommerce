import { addDoc, collection } from "firebase/firestore"
import { db } from "../Firebase"
import { Product } from "../Models/Product"
const dbPath="brands"

class ProductService {

    async add(data) {
        // console.log(data);
        const newBrand = new Brand ()
        newBrand .name = data.name
        newBrand .imageUrl= data.imageUrl
        
        const docRef = await addDoc(collection(db, dbPath), {
            ...newBrand
        })
        return newBrand
    }
}
