// src/pages/Comparision.jsx  
import { useState, useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { fetchCountries } from '../features/comparisionSlice';  
import BASE_URL from '../constants/baseURL';  

export default function Comparision() {  
    const dispatch = useDispatch();  
    const countries = useSelector((state) => state.comparision.countries);  
    const [country1, setCountry1] = useState('');  
    const [country2, setCountry2] = useState('');  
    const [comparisonData, setComparisonData] = useState(null);  
    const [filteredCountries1, setFilteredCountries1] = useState([]);  
    const [filteredCountries2, setFilteredCountries2] = useState([]);  
    const [alertMessage, setAlertMessage] = useState(''); 

    useEffect(() => {  
        dispatch(fetchCountries());  
    }, [dispatch]);  

    const handleCompare = async () => {  
        if (!country1 && !country2) {  
            setAlertMessage("Belum memilih negara."); 
            return;  
        }  
        if (country1.toLowerCase() === country2.toLowerCase()) {  
            setAlertMessage("Silakan pilih dua negara yang berbeda untuk perbandingan."); 
            return;  
        }  
        const countryData = await Promise.all([  
            fetch(`${BASE_URL}/name/${country1}`),  
            fetch(`${BASE_URL}/name/${country2}`)  
        ]);  

        const data = await Promise.all(countryData.map(res => res.json()));  
        setComparisonData(data);  
    };  

    const handleSearch1 = (e) => {  
        const value = e.target.value;  
        setCountry1(value);  
        if (value) {  
            const filtered = countries.filter(country => country.name.common.toLowerCase().startsWith(value.toLowerCase()));  
            setFilteredCountries1(filtered);  
        } else {  
            setFilteredCountries1([]);  
        }  
    };  

    const handleSearch2 = (e) => {  
        const value = e.target.value;  
        setCountry2(value);  
        if (value) {  
            const filtered = countries.filter(country => country.name.common.toLowerCase().startsWith(value.toLowerCase()));  
            setFilteredCountries2(filtered);  
        } else {  
            setFilteredCountries2([]);  
        }  
    };  

    const clearInput1 = () => {  
        setCountry1('');  
        setFilteredCountries1([]);  
    };  

    const clearInput2 = () => {  
        setCountry2('');  
        setFilteredCountries2([]);  
    };  

    const selectCountry1 = (country) => {  
        setCountry1(country.name.common);  
        setFilteredCountries1([]);  
        setAlertMessage(''); // Clear alert message when a country is selected  
    };  

    const selectCountry2 = (country) => {  
        setCountry2(country.name.common);  
        setFilteredCountries2([]);  
        setAlertMessage(''); // Clear alert message when a country is selected  
    };  

    const handleKeyPress = (e) => {  
        const char = String.fromCharCode(e.which);  
        if (!/^[a-zA-Z\s]*$/.test(char)) {  
            e.preventDefault();   
        }  
    };  

    return (  
        <div className="container mx-auto p-4">  
            <h1 className="text-3xl font-bold text-center mb-6">Country Comparison</h1>  
            {alertMessage && (  
                <div className={`alert ${alertMessage.includes("Belum memilih negara") ? "bg-yellow-100 border-yellow-400 text-yellow-700" : "bg-red-100 border-red-400 text-red-700"} border-l-4 p-4 mb-4 rounded-lg`} role="alert">  
                    <div className="flex items-center">  
                        <svg  
                            xmlns="http://www.w3.org/2000/svg"  
                            className="h-5 w-5 mr-2"  
                            fill="none"  
                            viewBox="0 0 24 24"  
                            stroke="currentColor"  
                        >  
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />  
                        </svg>  
                        <span>{alertMessage}</span>  
                        <button className="ml-auto text-gray-500 hover:text-gray-700" onClick={() => setAlertMessage('')}>  
                            &times;  
                        </button>  
                    </div>  
                </div>  
            )} 
            <div className="flex justify-center mb-4">  
                <div className="relative w-1/3">  
                    <input  
                        type="text"  
                        placeholder="Country 1"  
                        value={country1}  
                        onKeyPress={handleKeyPress}   
                        onChange={handleSearch1}  
                        className="border rounded-lg p-2 w-full pr-8 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"  
                    />  
                    {country1 && (  
                        <span onClick={clearInput1} className="absolute right-2 top-2 cursor-pointer text-gray-500">  
                            &times;  
                        </span>  
                    )}  
                    {filteredCountries1.length > 0 && (  
                        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg">  
                            {filteredCountries1.map((country) => (  
                                <li key={country.cca2} onClick={() => selectCountry1(country)} className="p-2 hover:bg-gray-200 cursor-pointer">  
                                    {country.name.common}  
                                </li>  
                            ))}  
                        </ul>  
                    )}  
                </div>  
                <div className="relative w-1/3 ml-4">  
                    <input  
                        type="text"  
                        placeholder="Country 2"  
                        value={country2}  
                        onKeyPress={handleKeyPress}   
                        onChange={handleSearch2}  
                        className="border rounded-lg p-2 w-full pr-8 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"  
                    />  
                    {country2 && (  
                        <span onClick={clearInput2} className="absolute right-2 top-2 cursor-pointer text-gray-500">  
                            &times;  
                        </span>  
                    )}  
                    {filteredCountries2.length > 0 && (  
                        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg">  
                            {filteredCountries2.map((country) => (  
                                <li key={country.cca2} onClick={() => selectCountry2(country)} className="p-2 hover:bg-gray-200 cursor-pointer">  
                                    {country.name.common}  
                                </li>  
                            ))}  
                        </ul>  
                    )}  
                </div>  
                <button  
                    onClick={handleCompare}  
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 shadow-md hover:bg-blue-600 transition duration-200"  
                >  
                    Compare  
                </button>  
            </div>  

            {comparisonData && (  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                    {comparisonData.map((country, index) => (  
                        <div key={index} className="border rounded-lg p-4 shadow-lg bg-white transition-transform transform hover:scale-105 flex flex-col items-center">  
                            <h2 className="font-semibold text-xl mb-2">{country[0].name.common}</h2>  
                            <img src={country[0].flags.png} alt={country[0].name.common} className="w-full h-48 object-contain rounded-lg mb-2" />  
                            <div className="text-left w-full">  
                                <p><strong>Population:</strong> {country[0].population.toLocaleString()}</p>  
                                <p><strong>Area:</strong> {country[0].area.toLocaleString()} km²</p>  
                                <p><strong>Region:</strong> {country[0].region}</p>  
                                <p><strong>Code (CCA2):</strong> {country[0].cca2}</p>  
                            </div>  
                            <div className="mt-4 w-full">  
                                <h3 className="font-semibold text-lg">Location on OpenStreetMap:</h3>  
                                <iframe  
                                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${country[0].latlng[1]},${country[0].latlng[0]},${country[0].latlng[1] + 0.5},${country[0].latlng[0] + 0.5}&layer=mapnik&marker=${country[0].latlng[0]},${country[0].latlng[1]}`}  
                                    width="100%"  
                                    height="250"  
                                    style={{ border: 0 }}  
                                    allowFullScreen  
                                    loading="lazy"  
                                ></iframe>  
                            </div>  
                        </div>  
                    ))}  
                </div>  
            )}  
        </div>  
    );  
}