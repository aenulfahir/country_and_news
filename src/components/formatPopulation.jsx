
    // src/components/formatPopulation.jsx  
    const formatPopulation = (population) => {  
        if (population >= 1000000000) {  
            return `${(population / 1000000000).toFixed(1)} Miliyar`; 
        } else if (population >= 1000000) {  
            return `${(population / 1000000).toFixed(1)} Juta`; 
        } else if (population >= 1000) {  
            return `${(population / 1000).toFixed(1)} Ribu`; 
        }  
        return population; 
    };  

    export default formatPopulation;
