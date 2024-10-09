// src/components/Navbar.jsx  
import React, { useState } from "react";  
import { Link } from "react-router-dom";  
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";  
import CountryLogo from "../assets/Country.svg"; // Import the logo  

export default function Navbar() {  
    const [isOpen, setIsOpen] = useState(false);  

    const toggleMenu = () => {  
        setIsOpen(!isOpen);  
    };  

    const handleMenuClick = () => {  
        setIsOpen(false);  
    };  

    return (  
        <header className="bg-gray-800">  
            <nav className="container mx-auto flex justify-between items-center p-4">  
                <div className="flex items-center">  
                    <div className="bg-white  p-2 rounded-full"> {/* White background with padding and rounded corners */}  
                        <img src={CountryLogo} alt="Country Logo" className="h-10" />  
                    </div>  
                    <span className="text-white text-2xl font-bold ml-2">Country and News</span>  
                </div>  
                <div className="block lg:hidden">  
                    <button onClick={toggleMenu} className="text-white focus:outline-none">  
                        {isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}  
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