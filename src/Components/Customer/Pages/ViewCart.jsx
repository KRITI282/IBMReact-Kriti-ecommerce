import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

import { auth, db } from "../../../Firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function ViewCart() {
const nav = useNavigate()
  function handlePay(e) {

    var options = {
      "key": "rzp_test_Q8bKRaQdmgftXW", // Enter the Key ID generated from the Dashboard
     "amount": totalAmount * 100, // Amount is in currency subunits.
      "currency": "INR",
      "name": "Aashirwad Enterprises", //your business name
      "description": "Test Transaction",
      "image": "https://www.google.com/imgres?q=Aashirwad%20enterprises&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064024395975&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fashirwadenterprise93%2F&docid=E-z1RLFfsgzk-M&tbnid=pV-5pM1d6IE4JM&vet=12ahUKEwjQwMycitKVAxXEwzgGHXBhCIgQnPAOegQIOBAA..i&w=644&h=644&hcb=2&ved=2ahUKEwjQwMycitKVAxXEwzgGHXBhCIgQnPAOegQIOBAA",
    "handler": async function (response) {

    toast.success("Payment Successful");

    await placeOrder();

    nav("/Myorders");


        // eg. Add order ....
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    // document.getElementById('rzp-button1').onclick = function (e) {
    //     e.preventDefault();
    // }

  }

  const [cart, setCart] = useState([]);

  const shippingCharge = 0;



  // GET CART DATA

  const getCart = async () => {

    try {

      if (!auth.currentUser) {

        toast.error("Please login first");
        return;

      }


      const uid = auth.currentUser.uid;


      const q = query(
        collection(db, "cart"),
        where("userId", "==", uid)
      );


      const snapshot = await getDocs(q);


      let cartItems = [];


      snapshot.forEach((item) => {

        cartItems.push({

          id: item.id,
          ...item.data()

        });

      });


      setCart(cartItems);


    }

    catch (error) {

      console.log(error);

    }

  };




  useEffect(() => {

    getCart();

  }, []);





  // INCREASE QUANTITY

  const increaseQuantity = async (id, quantity) => {


    try {


      const cartRef = doc(db, "cart", id);


      await updateDoc(cartRef, {

        quantity: quantity + 1

      });


      setCart(

        cart.map(item => {

          if (item.id === id) {

            return {

              ...item,
              quantity: item.quantity + 1

            };

          }

          return item;

        })

      );


    }

    catch (error) {

      console.log(error);

    }


  };






  // DECREASE QUANTITY


  const decreaseQuantity = async (id, quantity) => {


    try {


      if (quantity <= 1) {

        toast.info("Minimum quantity is 1");
        return;

      }



      const cartRef = doc(db, "cart", id);


      await updateDoc(cartRef, {

        quantity: quantity - 1

      });



      setCart(

        cart.map(item => {


          if (item.id === id) {


            return {

              ...item,

              quantity: item.quantity - 1

            };


          }


          return item;


        })

      );



    }

    catch (error) {

      console.log(error);

    }


  };






  // REMOVE ITEM


  const removeItem = async (id) => {


    try {


      await deleteDoc(

        doc(db, "cart", id)

      );


      setCart(

        cart.filter(item => item.id !== id)

      );


      toast.success("Item removed from cart");


    }

    catch (error) {

      console.log(error);

    }


  };







  // TOTAL


  const subtotal = cart.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  );


  const totalAmount = subtotal + shippingCharge;








  // PLACE ORDER


  const placeOrder = async () => {


    try {


      if (cart.length === 0) {

        toast.error("Cart is empty");
        return;

      }



      const uid = auth.currentUser.uid;



      await addDoc(
  collection(db, "orders"),
  {
    userId: uid,

    // Products
    products: cart,

    // Amounts
    subtotal: subtotal,
    shipping: shippingCharge,
    total: totalAmount,

    // Payment
    paymentStatus: "Paid",

    // Order Status
    orderStatus: "Pending",

    // Date
    orderDate: new Date()
  }
);




      const snapshot = await getDocs(

        query(

          collection(db, "cart"),

          where("userId", "==", uid)

        )

      );



      snapshot.forEach(async (item) => {


        await deleteDoc(

          doc(db, "cart", item.id)

        );


      });





      setCart([]);


      toast.success("Order placed successfully");


    }

    catch (error) {

      console.log(error);

      toast.error("Order failed");

    }


  };







  return (

    <>


      <div className="container-fluid page-header py-5">

        <h1 className="text-center text-white display-6">
          My Cart
        </h1>

      </div>






      <div className="container py-5">


        {

          cart.length === 0 ?

            <h3 className="text-center">
              Your cart is empty
            </h3>


            :


            <>


              {

                cart.map((item) => (


                  <div
                    className="row mb-4 border p-3 align-items-center"
                    key={item.id}
                  >



                    <div className="col-md-3">

                      <img

                        src={item.image}

                        className="img-fluid"

                        width="120"

                      />

                    </div>





                    <div className="col-md-5">


                      <h4>

                        {item.productName}

                      </h4>



                      <p>

                        Price : ₹{item.price}

                      </p>




                      <div className="d-flex align-items-center">


                        <button

                          className="btn btn-danger"

                          onClick={() => decreaseQuantity(item.id, item.quantity)}

                        >

                          -

                        </button>




                        <h5 className="mx-3">

                          {item.quantity}

                        </h5>




                        <button

                          className="btn btn-success"

                          onClick={() => increaseQuantity(item.id, item.quantity)}

                        >

                          +

                        </button>


                      </div>



                      <button

                        className="btn btn-outline-danger mt-3"

                        onClick={() => removeItem(item.id)}

                      >

                        Remove

                      </button>


                    </div>






                    <div className="col-md-4">


                      <h5>

                        ₹ {item.price * item.quantity}

                      </h5>


                    </div>




                  </div>


                ))

              }







              <div className="card p-4 mt-5">


                <h3>
                  Order Summary
                </h3>


                <hr />




                <div className="d-flex justify-content-between">

                  <h5>
                    Subtotal
                  </h5>


                  <h5>
                    ₹ {subtotal}
                  </h5>


                </div>






                <div className="d-flex justify-content-between">


                  <h5>
                    Shipping Charges
                  </h5>


                  <h5>
                    ₹ {shippingCharge}
                  </h5>


                </div>






                <hr />




                <div className="d-flex justify-content-between">


                  <h4>
                    Total
                  </h4>


                  <h4>
                    ₹ {totalAmount}
                  </h4>


                </div>
<div className="col-lg text-center">

    <button
        className="btn btn-lg btn-primary text-light"
        onClick={handlePay}
    >
        Pay ₹{totalAmount}
    </button>

</div>

              </div>
            
            </>
        }
</div>
    </>
  );
}