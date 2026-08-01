import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import authService from "../../../Services/authService";
import { useEffect } from "react";


export default function Layout()
{
     const userType = authService.getUserType()
    const email =authService.getEmail()
    const nav = useNavigate()

    useEffect(() => {
            if (email !== null && userType == "admin") {
                nav("/admin")
            }
        }, [])


    return(
        <>
        
        
          
                <Header/>
                <Outlet/>
                <Footer/>
                
        </>
    )
}