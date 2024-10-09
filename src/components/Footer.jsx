// src/components/Footer.jsx  
import React from 'react';  
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons  

export default function Footer() {  
    return (  
        <footer className="footer footer-center p-10 bg-gray-800 text-white">  
            <div className="flex flex-col lg:flex-row justify-between items-center">  
                <div className="text-center lg:text-left">  
                    <h1 className="text-lg font-bold">Country and News</h1>  
                    <p className="text-sm">© 2024 Country and News. All rights reserved.</p>  
                </div>  
                <div className="flex space-x-4 mt-4 lg:mt-0">  
                    <a href="https://www.instagram.com/aenulfahir_03" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">  
                        <FaInstagram size={24} className="mr-1" />   
                    </a>  
                    <a href="https://www.tiktok.com/@muhammadaenulfahir" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">  
                        <FaTiktok size={24} className="mr-1" />   
                    </a>  
                    <a href="https://www.linkedin.com/in/muhammad-aenul-fahir" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">  
                        <FaLinkedin size={24} className="mr-1" />   
                    </a>  
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="link link-hover flex items-center">  
                        <FaGithub size={24} className="mr-1" />   
                    </a>  
                </div>  
            </div>  
        </footer>  
    );  
}