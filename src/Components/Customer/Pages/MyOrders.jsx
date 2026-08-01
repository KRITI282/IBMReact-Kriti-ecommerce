import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { auth, db } from "../../../Firebase";
import { PacmanLoader } from "react-spinners";

export default function MyOrder() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {

    try {

      const user = auth.currentUser;

      if (!user) return;

      const q = query(
        collection(db, "orders"),
        where("userId", "==", user.uid)
      );

      const snapshot = await getDocs(q);

      let orderArray = [];

      snapshot.forEach((doc) => {
        orderArray.push({
          id: doc.id,
          ...doc.data()
        });
      });

      setOrders(orderArray);
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
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

      <h2 className="mb-4">My Orders</h2>

      {
        orders.length === 0 ?

          <h5>No Orders Found</h5>

          :

          orders.map((order) => (

            <div
              className="card mb-4 shadow"
              key={order.id}
            >

              <div className="card-header bg-primary text-white">
                <strong>Order ID :</strong> {order.id}
              </div>

              <div className="card-body">

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
                  Payment Status :{" "}
                  {order.paymentStatus || "N/A"}
                </h6>

                <h6>
                  Order Status :{" "}
                  {order.orderStatus || "Pending"}
                </h6>

                <hr />

                {
                  order.products?.map((item, index) => (

                    <div
                      className="d-flex align-items-center mb-3"
                      key={index}
                    >

                      <img
                        src={item.image}
                        width="80"
                        height="80"
                        className="rounded"
                        alt={item.productName}
                      />

                      <div className="ms-3">

                        <h6>{item.productName}</h6>

                        <p>
                          Quantity : {item.quantity}
                        </p>

                        <p>
                          Price : ₹{item.price}
                        </p>

                      </div>

                    </div>

                  ))
                }

                <hr />

                <h5>
                  Total Amount : ₹{order.total}
                </h5>

              </div>

            </div>

          ))
      }

    </div>

  );
}