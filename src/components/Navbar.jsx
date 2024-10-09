// src/components/Navbar.jsx  
import React, { useState } from "react";  
import { Link } from "react-router-dom";  
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; // Import ikon hamburger dan ikon close  

export default function Navbar() {  
    const [isOpen, setIsOpen] = useState(false);  

    const toggleMenu = () => {  
        setIsOpen(!isOpen);  
    };  

    const handleMenuClick = () => {  
        setIsOpen(false); // Menutup menu saat item diklik  
    };  

    return (  
        <header className="bg-gray-800">  
            <nav className="container mx-auto flex justify-between items-center p-4">  
                <div className="flex items-center">  
                    <span className="text-white text-2xl font-bold">Country and News</span>  
                </div>  
                <div className="block lg:hidden">  
                    <button onClick={toggleMenu} className="text-white focus:outline-none">  
                        {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />} {/* Ganti ikon berdasarkan status */}  
                    </button>  
                </div>  
                <ul className={`flex-col lg:flex lg:flex-row lg:space-x-6 ${isOpen ? 'flex' : 'hidden'} lg:items-center lg:flex-row absolute lg:static bg-gray-800 lg:bg-transparent w-full lg:w-auto top-16 left-0 z-10`}>  
                    <li className="mb-4 lg:mb-0">  
                        <Link to="/" className="text-white hover:text-gray-300 transition duration-300" onClick={handleMenuClick}>Home</Link>  
                    </li>  
                    <li className="mb-4 lg:mb-0">  
                        <Link to="/comparision" className="text-white hover:text-gray-300 transition duration-300" onClick={handleMenuClick}>Comparision</Link>  
                    </li>  
                    <li className="mb-4 lg:mb-0">  
                        <Link to="/news" className="text-white hover:text-gray-300 transition duration-300" onClick={handleMenuClick}>News</Link>  
                    </li>  
                </ul>   
            </nav>  
        </header>  
    );  
}