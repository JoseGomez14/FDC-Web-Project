/**
 * Se encarga de identificar las especies que poseen en su nombre común o en su nombre
 * cientifico una palabra o una frase.
 * 
 * Nota: se realiza un formateo de mayúsculas y de acentos para que la búsqueda no se 
 * vea afectada.
 * 
 * @param {object} species conjunto de especies a filtrar
 * @param {string} word palabra búscada
 * @returns Conjunto de especies que en su nombre poseen la palabra buscada
 */
const basicSearch = (species, word) => {
    let arrSpecies = []

    species.forEach(specie => {
        let commonName = specie.commonName.toLowerCase()
        commonName = commonName.normalize('NFD').replace(/[\u0300-\u036f]/g,"");

        let scientificName = specie.scientificName.toLowerCase()
        scientificName = scientificName.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        
        let wordSearch = word.toLowerCase();
        wordSearch = wordSearch.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
        
        if (commonName.search(wordSearch) !== -1 || scientificName.search(wordSearch) !== -1) {
            arrSpecies.push(specie);
        }
    });

    return arrSpecies;
}

/**
 * Esta función se encarga de filtrar un conjunto de especies dadas unas características establecidas
 * en un formulario de filtros
 * 
 * @param {*} species conjunto de especies a filtrar
 * @param {*} evt información del evento asociado (submit en el formulario)
 * @returns conjunto de especies que cumplen con al menos una de las características solicitadas
 */
const advancedSearch = (species, evt) =>{
    let arrSpecies = []
    let stateFilter = false;

    evt.target.childNodes.forEach(node => {
        if(node.nodeName === 'FIELDSET'){
            node.childNodes.forEach(childNode => {
                if(childNode.nodeName === 'LABEL' && childNode.childNodes[0].checked){
                    stateFilter = true;
                    species.forEach(specie => {
                        let nameInput =  childNode.childNodes[0].name
                        switch (node.id) {
                            case 'fs-clasification':
                                if(specie.kingdom === nameInput) arrSpecies.push(specie)
                                break;
                            case 'fs-class':
                                if(specie.className === nameInput) arrSpecies.push(specie)
                                break;
                            case 'fs-color':
                                if(specie.skinColor === nameInput) arrSpecies.push(specie)
                                break;
                            case 'fs-habitat':
                                if(specie.habitat === nameInput) arrSpecies.push(specie)
                                break;
                            case 'fs-state':
                                if(specie.state === childNode.childNodes[0].checked) arrSpecies.push(specie)
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