import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../Firebase";
import { Cart } from "../Models/Cart";
const dbPath = "Carts";

class CartService {
  async add(data) {
    const newCart = new Cart();
    newCart.userId = data.userId;
    newCart.productId = data.productId;
    newCart.quantity = data.quantity;

    await addDoc(collection(db, dbPath), {
      ...newCart,
    });
    return newCart;
  }

  async all() {
    const querySnapshot = await getDocs(collection(db, dbPath));
    const carts = [];
    querySnapshot.forEach((docSnap) => {
      carts.push({ id: docSnap.id, ...docSnap.data() });
    });
    console.log("Fetched carts:", carts);
    return carts;
  }

  async delete(id) {
    return await deleteDoc(doc(db, dbPath, id));
  }
}

export default new CartService();