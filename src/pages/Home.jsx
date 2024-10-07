// src/pages/Home.jsx  
import { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { fetchCountries } from '../features/countriesSlice';  
import formatPopulation from '../components/formatPopulation';  
import CountryTable from '../components/CountryTable';

export default function Home() {  
    const dispatch = useDispatch();  
    const { countries, loading, error } = useSelector((state) => state.countries);  

    useEffect(() => {  
        dispatch(fetchCountries());  
    }, [dispatch]);  

    if (loading) return <div className="text-center">Loading...</div>;  
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;  

    const topCountry = countries.reduce((prev, current) => {  
        return (prev.population > current.population) ? prev : current;  
    }, {});  

    return (  
        <div className="container mx-auto p-4">  
            <h1 className="text-2xl font-bold mb-4">Countries Data</h1>  
            <h2 className="text-xl font-semibold mb-2">Negara dengan Populasi Terbesar:</h2>  
            <div className="mb-4 p-4 border rounded-lg shadow-md bg-gray-100">  
                <p className="font-semibold">Nama: {topCountry.name}</p>  
                <p>Populasi: {formatPopulation(topCountry.population)}</p>  
                <p>Kode (CCA2): {topCountry.cca2}</p>  
            </div>  
            <h2 className="text-xl font-semibold mb-2">Tabel Populasi Semua Negara:</h2>  
            <CountryTable countries={countries} />
        </div>  
    );  
}