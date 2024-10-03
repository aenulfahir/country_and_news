// src/components/CountryTable.jsx  
import React, { useState } from 'react';  
import PropTypes from 'prop-types';  
import formatPopulation from './formatPopulation';  

const CountryTable = ({ countries }) => {  
    const [currentPage, setCurrentPage] = useState(1);  
    const countriesPerPage = 15;  

    // Mengurutkan negara berdasarkan populasi (dari terbesar ke terkecil)  
    const sortedCountries = [...countries].sort((a, b) => b.population - a.population);  

    // Menghitung total halaman  
    const totalPages = Math.ceil(sortedCountries.length / countriesPerPage);  

    // Menentukan indeks awal dan akhir untuk negara yang ditampilkan  
    const indexOfLastCountry = currentPage * countriesPerPage;  
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;  
    const currentCountries = sortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);  

    return (  
        <div className="overflow-x-auto">  
            <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">  
                <thead className="bg-gray-200">  
                    <tr>  
                        <th className="border border-gray-300 p-2 text-left">No</th>  
                        <th className="border border-gray-300 p-2 text-left">Country</th>  
                        <th className="border border-gray-300 p-2 text-left">Code (CCA2)</th>  
                        <th className="border border-gray-300 p-2 text-left">Population</th>  
                    </tr>  
                </thead>  
                <tbody>  
                    {currentCountries.map((country, index) => (  
                        <tr key={index} className="hover:bg-gray-100 transition duration-200">  
                            <td className="border border-gray-300 p-2">{index + 1 + indexOfFirstCountry}</td>
                            <td className="border border-gray-300 p-2">{country.name}</td>  
                            <td className="border border-gray-300 p-2">{country.cca2}</td>  
                            <td className="border border-gray-300 p-2">{formatPopulation(country.population)}</td>  
                        </tr>  
                    ))}  
                </tbody>  
            </table>  
            <div className="flex justify-between mt-4">  
                <button   
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}   
                    disabled={currentPage === 1}   
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"  
                >  
                    Previous  
                </button>  
                <span>Page {currentPage} of {totalPages}</span>  
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

// Menambahkan validasi props  
CountryTable.propTypes = {  
    countries: PropTypes.arrayOf(  
        PropTypes.shape({  
            name: PropTypes.string.isRequired,  
            population: PropTypes.number.isRequired,  
            cca2: PropTypes.string.isRequired,  
        })  
    ).isRequired,  
};  

export default CountryTable;