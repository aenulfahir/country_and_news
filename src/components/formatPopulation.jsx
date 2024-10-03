
    // src/components/formatPopulation.jsx  
    const formatPopulation = (population) => {  
        if (population >= 1000000000) {  
            return `${(population / 1000000000).toFixed(1)} Miliar`; // Format ke miliar  
        } else if (population >= 1000000) {  
            return `${(population / 1000000).toFixed(1)} Juta`; // Format ke juta  
        } else if (population >= 1000) {  
            return `${(population / 1000).toFixed(1)} Ribu`; // Format ke ribu  
        }  
        return population; // Kembalikan nilai asli jika kurang dari 1000  
    };  

    export default formatPopulation;
