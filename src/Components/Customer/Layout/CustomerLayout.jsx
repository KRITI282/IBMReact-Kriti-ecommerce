import { Outlet } from "react-router-dom";
import CustomerFooter from "./CustomerFooter";
import CustomerHeader from "./CustomerHeader";


export default function CustomerLayout()
{
    return(
        <>
        
        <CustomerHeader/>
        <Outlet/>
        <CustomerFooter/>
        
        </>
    )
}