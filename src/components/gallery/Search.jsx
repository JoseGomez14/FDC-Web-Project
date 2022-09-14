import React, { useState } from 'react';
import { advancedSearch, basicSearch } from '../../functions/funcSearch';

/**
 *  Componente encargado del formulario de búsqueda y de filtrado
 * 
 * @param {*} setSearchState función que modifica el estado de búsqueda para identificar si en el
 * momento de hacer cambios en los formularios hay consultas válidas para efectuar el filtro o si
 * no es el caso para mostrar todas las especies
 * @param {*} setFilterSpecies función que permite establecer el conjunto de especies que cumplen
 * con las caracteristicas establecidas en los formularios
 * @param {*} species conjunto de todas las especies
 * @returns el formulario que permite realizar una consulta simple (por nombre) o el formulario que
 * permite realizar una consulta avanzada (por características)
 */
const Search = ({ setSearchState, setFilterSpecies, species }) => {

    const [advanced, setAdvanced] = useState(false);
    const [nameSearch, setNameSearch] = useState('');

    /**
     * Permite establecer el nombre que se está buscando y si existe una consulta válida o no
     * @param {*} evt información del evento asociado
     */
    const handleSearchByName = (evt)=>{
        setNameSearch(evt.target.value)
        if(evt.target.value === ''){
            setSearchState(false);
        }
    }

    /**
     * Identifica el tipo de búsqueda y ejecuta la función adecuada según el caso
     * 
     * @param {*} evt información del evento asociado
     */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (advanced) {
            setFilterSpecies(advancedSearch(species, evt));
        } else {
            setFilterSpecies(basicSearch(species, nameSearch));
        }

        setSearchState(true)
    }
    return (
        <>
            {!advanced ?
                <form onSubmit={handleSubmit}>
                    <label htmlFor='inpt-search'></label>
                    <input
                        id='inpt-search'
                        type='search'
                        placeholder='Nombre de la especie'
                        value={nameSearch}
                        onChange={handleSearchByName}/>
                    <button type='submit'>Buscar</button>
                    <button onClick={() => {
                        setAdvanced(true)
                        setSearchState(false)
                    }}>Búsqueda avanzada</button>
                </form>
                :
                <form onSubmit={handleSubmit}>
                    <fieldset id='fs-clasification'>
                        <legend>Clasificación</legend>
                        <label htmlFor="class-fauna">Fauna</label>
                        <input type="checkbox" name="Fauna" id="class-fauna" />

                        <label htmlFor="class-flora">Flora</label>
                        <input type="checkbox" name="Flora" id="class-flora" />
                    </fieldset>
                    <fieldset id='fs-class'>
                        <legend>Clase</legend>
                        <label htmlFor="class-aves">Aves</label>
                        <input type="checkbox" name="Aves" id="class-aves" />

                        <label htmlFor="class-mamiferos">Mamíferos</label>
                        <input type="checkbox" name="Mamíferos" id="class-mamiferos" />

                        <label htmlFor="class-reptiles">Reptiles</label>
                        <input type="checkbox" name="Reptiles" id="class-reptiles" />

                        <label htmlFor="class-anfibios">Anfibios</label>
                        <input type="checkbox" name="Anfibios" id="class-anfibios" />

                        <label htmlFor="class-insectos">Insectos</label>
                        <input type="checkbox" name="Insectos" id="class-insectos" />

                        <label htmlFor="class-plantas">Plantas</label>
                        <input type="checkbox" name="Plantas" id="class-plantas" />

                        <label htmlFor="class-hongos">Hongos</label>
                        <input type="checkbox" name="Hongos" id="class-hongos" />
                    </fieldset>
                    <fieldset id='fs-color'>
                        <legend>Color del pelaje</legend>
                        <label htmlFor="color-rojo">Rojo</label>
                        <input type="checkbox" name="Rojo" id="color-rojo" />

                        <label htmlFor="color-azul">Azul</label>
                        <input type="checkbox" name="Azul" id="color-azul" />

                        <label htmlFor="color-verde">Verde</label>
                        <input type="checkbox" name="Verde" id="color-verde" />

                        <label htmlFor="color-amarillo">Amarillo</label>
                        <input type="checkbox" name="Amarillo" id="color-amarillo" />

                        <label htmlFor="color-rosa">Rosa</label>
                        <input type="checkbox" name="Rosa" id="color-rosa" />

                        <label htmlFor="color-anaranjado">Anaranjado</label>
                        <input type="checkbox" name="Anaranjado" id="color-anaranjado" />

                        <label htmlFor="color-morado">Morado</label>
                        <input type="checkbox" name="Morado" id="color-morado" />

                        <label htmlFor="color-cafe">Café</label>
                        <input type="checkbox" name="Café" id="color-cafe" />

                        <label htmlFor="color-gris">Gris</label>
                        <input type="checkbox" name="Gris" id="color-gris" />

                        <label htmlFor="color-blanco">Blanco</label>
                        <input type="checkbox" name="Blanco" id="color-blanco" />

                        <label htmlFor="color-negro">Negro</label>
                        <input type="checkbox" name="Negro" id="color-negro" />
                    </fieldset>
                    <fieldset id='fs-habitat'>
                        <legend>Hábitat</legend>
                        <label htmlFor="habitat-pradera">Pradera</label>
                        <input type="checkbox" name="Pradera" id="habitat-pradera" />

                        <label htmlFor="habitat-bosque">Bosque</label>
                        <input type="checkbox" name="Bosque" id="habitat-bosque" />

                        <label htmlFor="habitat-desierto">Desierto</label>
                        <input type="checkbox" name="Desierto" id="habitat-desierto" />

                        <label htmlFor="habitat-montana">Montaña</label>
                        <input type="checkbox" name="Montaña" id="habitat-montana" />

                        <label htmlFor="habitat-marisma">Marisma</label>
                        <input type="checkbox" name="Marisma" id="habitat-marisma" />

                        <label htmlFor="habitat-sabana">Sabana</label>
                        <input type="checkbox" name="Sabana" id="habitat-sabana" />

                        <label htmlFor="habitat-altiplano">Altiplano</label>
                        <input type="checkbox" name="Altiplano" id="habitat-altiplano" />

                        <label htmlFor="habitat-quebrada">Quebrada</label>
                        <input type="checkbox" name="Quebrada" id="habitat-quebrada" />

                        <label htmlFor="habitat-lago">Lago</label>
                        <input type="checkbox" name="Lago" id="habitat-lago" />

                        <label htmlFor="habitat-pantano">Pantano</label>
                        <input type="checkbox" name="Pantano" id="habitat-pantano" />

                        <label htmlFor="habitat-rio">Río</label>
                        <input type="checkbox" name="Río" id="habitat-rio" />

                        <label htmlFor="habitat-playa">Playa</label>
                        <input type="checkbox" name="Playa" id="habitat-playa" />

                    </fieldset>
                    <fieldset id='fs-state'>
                        <legend>Estado</legend>
                        <label htmlFor="state-extinction">En vía de extinción</label>
                        <input type="checkbox" name="extinction" id="state-extinction" />
                    </fieldset>
                    <button type='submit'>Filtrar</button>
                    <button onClick={() => {
                        setAdvanced(false)
                        setSearchState(false)
                    }}>Búsqueda por nombre</button>
                </form>}

        </>
    );
}

export default Search;