
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Product} from "../models/Product";
import { db } from "../Firebase";
const dbPath = "products"
import { toast } from "react-toastify";

class ProductService {
  
    async add(data) {
        console.log("PD: ", data);
        const newProduct = new Product()
        newProduct.categoryId = data.categoryId
        newProduct.name = data.name
        newProduct.description = data.description
        newProduct.price = data.price
        newProduct.stock = data.stock
        newProduct.imageUrl = data.imageUrl
        const docRef = await addDoc(collection(db, dbPath), {
            ...newProduct
        })
        return newProduct
    }

    async all() {
        const querySnapshot = await getDocs(collection(db, dbPath));
        var categories = []
        querySnapshot.forEach((doc) => {
            categories.push({ id: doc.id, ...doc.data() })
        });
        return categories;
    }


    async single(id) {
        const docRef = doc(db, dbPath, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }

        } else {
            toast.error("No such document!");
            console.log("No such document!");
            return false
        }
    }

    async update(id, payload) {
        const productRef = doc(db, dbPath, id);
        return await updateDoc(productRefRef, payload);
    }
    async delete(id) {
        return await deleteDoc(doc(db, dbPath, id));
    }
}



export default new ProductService()

