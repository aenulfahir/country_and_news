// src/components/CountryTable.jsx  
import { useState, useEffect } from 'react';  
import PropTypes from 'prop-types';  
import formatPopulation from './formatPopulation';  

const CountryTable = () => {  
    const [countries, setCountries] = useState([]);  
    const [currentPage, setCurrentPage] = useState(1);  
    const countriesPerPage = 20;  

    useEffect(() => {  
        const fetchCountries = async () => {  
            const response = await fetch('https://restcountries.com/v3.1/all');  
            const data = await response.json();  
            setCountries(data);  
        };  
        fetchCountries();  
    }, []);  

    const sortedCountries = [...countries].sort((a, b) => b.population - a.population);  

    const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);  

    const indexOfLastCountry = currentPage * countriesPerPage;  
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;  
    const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);  

    return (  
        <div className="overflow-x-auto">  
            <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">  
                <thead className="bg-gray-200">  
                    <tr>  
                        <th className="border border-gray-300 p-2 text-left text-black">No</th>  
                        <th className="border border-gray-300 p-2 text-left text-black">Flag</th>  
                        <th className="border border-gray-300 p-2 text-left text-black">Country</th>  
                        <th className="border border-gray-300 p-2 text-left text-black">Code (CCA2)</th>  
                        <th className="border border-gray-300 p-2 text-left text-black">Population</th>  
                    </tr>  
                </thead>  
                <tbody>  
                    {currentCountries.map((country, index) => (  
                        <tr key={country.cca2} className="hover:bg-gray-100 transition duration-200">  
                            <td className="border border-gray-300 p-2 text-black">{index + 1 + indexOfFirstCountry}</td>  
                            <td className="border border-gray-300 p-2 ">  
                                <img src={country.flags.svg} alt={`${country.name.common} flag`} className="w-10 h-6" /> {/* Ukuran bendera disesuaikan */}  
                            </td>  
                            <td className="border border-gray-300 p-2 text-black">{country.name.common}</td>  
                            <td className="border border-gray-300 p-2 text-black">{country.cca2}</td>  
                            <td className="border border-gray-300 p-2 text-black">{formatPopulation(country.population)}</td>  
                        </tr>  
                    ))}  
                </tbody>  
            </table>  
            <div className="flex flex-col md:flex-row justify-between mt-4">  
                <button   
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}   
                    disabled={currentPage === 1}   
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"  
                >  
                    Previous  
                </button>  
                <span className="mt-2 md:mt-0">Page {currentPage} of {totalPages}</span>  
                <button   
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}   
                    disabled={currentPage === totalPages}   
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"  
                >  
                    Next  
                </button>  
            </div>  
        </div>  
    );  
};  

export default CountryTable;