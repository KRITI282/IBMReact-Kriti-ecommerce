import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";

import { db } from "../../../Firebase";
import { PacmanLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function ManageOrders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {

    try {

      const snapshot = await getDocs(collection(db, "orders"));

      let orderArray = [];

      snapshot.forEach((item) => {

        orderArray.push({
          id: item.id,
          ...item.data()
        });

      });

      setOrders(orderArray);
      setLoading(false);

    } catch (error) {

      console.log(error);
      setLoading(false);

    }

  };

  const updateStatus = async (id, status) => {

    try {

      await updateDoc(doc(db, "orders", id), {
        orderStatus: status
      });

      toast.success("Order Status Updated");

      fetchOrders();

    } catch (error) {

      console.log(error);

    }

  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <PacmanLoader />
      </div>
    );
  }

  return (

    <div className="container mt-5">

      <h2 className="mb-4">Manage Orders</h2>

      {
        orders.length === 0 ?

          <h4>No Orders Found</h4>

          :

          orders.map((order) => (

            <div className="card mb-4 shadow" key={order.id}>

              <div className="card-header bg-dark text-white">

                <strong>Order ID :</strong> {order.id}

              </div>

              <div className="card-body">

                <h6>
                  User ID : {order.userId}
                </h6>

                <h6>
                  Date :{" "}
                  {
                    order.orderDate
                      ? (
                          order.orderDate.seconds
                            ? new Date(order.orderDate.seconds * 1000)
                            : new Date(order.orderDate)
                        ).toLocaleString()
                      : "N/A"
                  }
                </h6>

                <h6>
                  Payment Status : {order.paymentStatus}
                </h6>

                <h6>
                  Order Status : {order.orderStatus}
                </h6>

                <h5 className="mt-3">
                  Total : ₹{order.total}
                </h5>

                <hr />

                {
                  order.products?.map((item, index) => (

                    <div
                      key={index}
                      className="d-flex align-items-center mb-3"
                    >

                      <img
                        src={item.image}
                        width="70"
                        height="70"
                        className="rounded"
                        alt={item.productName}
                      />

                      <div className="ms-3">

                        <h6>{item.productName}</h6>

                        <p>
                          Quantity : {item.quantity}
                        </p>

                        <p>
                          ₹{item.price}
                        </p>

                      </div>

                    </div>

                  ))
                }

                <hr />

                <select
                  className="form-select"
                  value={order.orderStatus}
                  onChange={(e) =>
                    updateStatus(order.id, e.target.value)
                  }
                >

                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>

                </select>

              </div>

            </div>

          ))
      }

    </div>

  );

}