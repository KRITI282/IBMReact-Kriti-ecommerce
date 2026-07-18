import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Customer/Pages/Home";
import CustomerLayout from "./Components/Customer/Layout/CustomerLayout";
import Contact from "./Components/Customer/Pages/Contact";
import About from "./Components/Customer/Pages/About";
import MyOrders from "./Components/Customer/Pages/MyOrders";
import ViewCart from "./Components/Customer/Pages/ViewCart";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Product from "./Components/Customer/Pages/Product";
import ViewCategory from "./Components/Customer/Pages/ViewCategory";
import Profile from "./Components/Customer/Pages/Profile";


// admin
import Layout from "./Components/Admin/Layout/Layout";
import Dashboard from "./Components/Admin/Dashboard";
import ManageProduct from "./Components/Admin/Product/ManageProduct";
import AddProduct from "./Components/Admin/Product/AddProduct";

import ManageCategory from "./Components/Admin/category/ManageCategory";
import AddCategory from "./Components/Admin/category/AddCategory";
import EditCategory from "./Components/Admin/category/EditCategory";
import EditProduct from "./Components/Admin/Product/EditProduct";
import ManageOrder from "./Components/Admin/Order/ManageOrder";
import ManageUsers from "./Components/Admin/User/ManageUser";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerLayout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/Myorders" element={<MyOrders />} />
            <Route path="/ViewCart" element={<ViewCart />} />
            <Route path="/login" element={< Login />} />
            <Route path="/register" element={< Register />} />
            <Route path='/product' element={<Product />} />
            <Route path="/category" element={<ViewCategory />} />
            <Route path="/profile" element={<Profile />} />

          </Route>





          <Route path="/admin" element={<Layout />}>

            <Route index element={<Dashboard />} />
            <Route path='category' element={<ManageCategory />} />
            <Route path='category/add' element={<AddCategory />} />
            <Route path='category/edit/:id' element={<EditCategory />} />

            <Route path='product' element={<ManageProduct />} />
            <Route path='product/add' element={<AddProduct />} />
            <Route path='product/edit/:id' element={<EditProduct />} />

           
            <Route path='user' element={<ManageUsers />} />
             <Route path='order' element={< ManageOrder />} />

          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}
