const basicSearch = (species, word) => {
    let arrSpecies = []

    species.forEach(specie => {
        let commonName = specie.commonName.toLowerCase()
        commonName = commonName.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        
        let wordSearch = word.toLowerCase();
        wordSearch = wordSearch.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        
        if (commonName.search(wordSearch) !== -1) {
            arrSpecies.push(specie);
        }
    });

    return arrSpecies;
}

const advancedSearch = (species, evt) =>{
    let arrSpecies = []
    let stateFilter = false;

    evt.target.childNodes.forEach(node => {
        if(node.nodeName === 'FIELDSET'){
            node.childNodes.forEach(childNode => {
                if(childNode.nodeName === 'INPUT' && childNode.checked){
                    stateFilter = true;
                    species.forEach(specie => {
                        switch (node.id) {
                            case 'fs-clasification':
                                if(specie.kingdom === childNode.name) arrSpecies.push(specie)
                                break;
                            case 'fs-class':
                                if(specie.className === childNode.name) arrSpecies.push(specie)
                                break;
                            case 'fs-color':
                                if(specie.skinColor === childNode.name) arrSpecies.push(specie)
                                break;
                            case 'fs-habitat':
                                if(specie.habitat === childNode.name) arrSpecies.push(specie)
                                break;
                            case 'fs-state':
                                if(specie.state === childNode.checked) arrSpecies.push(specie)
                                break;
                            default:
                                break;
                        } 
                    });
                }
            });
        }
    });

    const arrSpeciesReduce = arrSpecies.reduce((specie, item)=>{
        if(!specie.includes(item)){
            specie.push(item);
        }
        return specie;
    },[])

    return stateFilter? arrSpeciesReduce: species;
}

export {basicSearch, advancedSearch}