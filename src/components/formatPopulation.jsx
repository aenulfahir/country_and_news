
    // src/components/formatPopulation.jsx  
    const formatPopulation = (population) => {  
        if (population >= 1000000000) {  
            return `${(population / 1000000000).toFixed(1)} B`; 
        } else if (population >= 1000000) {  
            return `${(population / 1000000).toFixed(1)} M`; 
        } else if (population >= 1000) {  
            return `${(population / 1000).toFixed(1)} K`; 
        }  
        return population; 
    };  

    export default formatPopulation;
