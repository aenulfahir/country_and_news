// src/components/BaseLayout.jsx  
import { Outlet } from "react-router-dom";  
import Navbar from "./Navbar";  
import Footer from "./Footer"; // Import Footer  

export default function BaseLayout() {  
    return (  
        <div className="flex flex-col min-h-screen"> {/* Use flex and min-h-screen */}  
            <Navbar />  
            <main className="flex-grow"> {/* Allow main content to grow */}  
                <Outlet />  
            </main>  
            <Footer /> {/* Add Footer here */}  
        </div>  
    );  
}