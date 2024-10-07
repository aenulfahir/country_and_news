//src/components/Navbar.jsx
import React from "react";  
import { Link } from "react-router-dom";  

export default function Navbar() {  
    return (  
        <header className="bg-gray-800">  
            <nav className="container mx-auto flex justify-between items-center p-4">  
                <div className="flex items-center">  
                    <span className="text-white text-2xl font-bold">Country and News</span> {/* Teks sebagai logo */}  
                </div>  
                <ul className="flex space-x-6">  
                    <li>  
                        <Link to="/" className="text-white hover:text-gray-300 transition duration-300">Home</Link>  
                    </li>  
                    <li>  
                        <Link to="/comparision" className="text-white hover:text-gray-300 transition duration-300">Comparision</Link>  
                    </li>  
                    <li>  
                        <Link to="/news" className="text-white hover:text-gray-300 transition duration-300">News</Link>  
                    </li>  
                </ul> 
                 
            </nav>  
        </header>  
    );  
}