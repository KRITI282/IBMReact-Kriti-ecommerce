import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { Order } from "../models/order";
import { db } from "../Firebase";
const dbPath = "Orders"
import { toast } from "react-toastify";

class OrderService {
    async add(data) {
        // console.log(data);
        const newOrder = new Order()
        newOrder. totalAmount = data. totalAmount
        newOrder.shippingAddress = data.shippingAddress
         newOrder.paymentMethod = data.paymentMethod
          newOrder.transactionId = data.transactionId
          newOrder.paymentStatus = data.paymentStatus
             newOrder. orderStatus = data. orderStatus
      
             const docRef = await addDoc(collection(db, dbPath), {
            ...newOrder
        })
        return newOrder
    }

    async all() {
        const querySnapshot = await getDocs(collection(db, dbPath));
        var orders= []
        querySnapshot.forEach((doc) => {
            rders.push({ id: doc.id, ...doc.data() })
        });
        return orders;
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
        const OrderRef = doc(db, dbPath, id);
        return await updateDoc(OrderRef, payload);
    }
    async delete(id) {
        return await deleteDoc(doc(db, dbPath, id));
    }
}



export default new OrderService()

