import React, { useState } from 'react';
import { advancedSearch, basicSearch } from '../../functions/funcSearch';
import { SearchButton, SearchForm, SearchInput } from '../../elements/SearchForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

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
    const handleSearchByName = (evt) => {
        setNameSearch(evt.target.value)
        if (evt.target.value === '') {
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
                <SearchForm onSubmit={handleSubmit}>
                    <SearchInput
                        id='inpt-search'
                        type='search'
                        placeholder='Nombre de la especie'
                        value={nameSearch}
                        onChange={handleSearchByName} />
                    <SearchButton type='submit' title='Buscar'> <FontAwesomeIcon icon={faSearch} /> </SearchButton>
                    <SearchButton onClick={() => {
                        setAdvanced(true)
                        setSearchState(false)
                    }}
                        title='Búsqueda avanzada'
                    > <FontAwesomeIcon icon={faFilter} /> </SearchButton>
                </SearchForm>
                :
                <SearchForm onSubmit={handleSubmit} column>
                    <fieldset id='fs-clasification'>
                        <legend>Clasificación</legend>
                        <label htmlFor="class-fauna">
                            <input type="checkbox" name="Fauna" id="class-fauna" />
                            Fauna
                        </label>

                        <label htmlFor="class-flora">
                            <input type="checkbox" name="Flora" id="class-flora" />
                            Flora
                        </label>
                    </fieldset>

                    <fieldset id='fs-class'>
                        <legend>Clase</legend>
                        <label htmlFor="class-aves">
                            <input type="checkbox" name="Aves" id="class-aves" />
                            Aves
                        </label>

                        <label htmlFor="class-mamiferos">
                            <input type="checkbox" name="Mamíferos" id="class-mamiferos" />
                            Mamíferos
                        </label>

                        <label htmlFor="class-reptiles">
                            <input type="checkbox" name="Reptiles" id="class-reptiles" />
                            Reptiles
                        </label>

                        <label htmlFor="class-anfibios">
                            <input type="checkbox" name="Anfibios" id="class-anfibios" />
                            Anfibios
                        </label>

                        <label htmlFor="class-insectos">
                            <input type="checkbox" name="Insectos" id="class-insectos" />
                            Insectos
                        </label>

                        <label htmlFor="class-plantas">
                            <input type="checkbox" name="Plantas" id="class-plantas" />
                            Plantas
                        </label>

                        <label htmlFor="class-hongos">
                            <input type="checkbox" name="Hongos" id="class-hongos" />
                            Hongos
                        </label>
                    </fieldset>
                    <fieldset id='fs-color'>
                        <legend>Color del pelaje</legend>
                        <label htmlFor="color-rojo">
                            <input type="checkbox" name="Rojo" id="color-rojo" />
                            Rojo
                        </label>

                        <label htmlFor="color-azul">
                            <input type="checkbox" name="Azul" id="color-azul" />
                            Azul
                        </label>

                        <label htmlFor="color-verde">
                            <input type="checkbox" name="Verde" id="color-verde" />
                            Verde
                        </label>

                        <label htmlFor="color-amarillo">
                            <input type="checkbox" name="Amarillo" id="color-amarillo" />
                            Amarillo
                        </label>

                        <label htmlFor="color-rosa">
                            <input type="checkbox" name="Rosa" id="color-rosa" />
                            Rosa
                        </label>

                        <label htmlFor="color-anaranjado">
                            <input type="checkbox" name="Anaranjado" id="color-anaranjado" />
                            Anaranjado
                        </label>

                        <label htmlFor="color-morado">
                            <input type="checkbox" name="Morado" id="color-morado" />
                            Morado
                        </label>

                        <label htmlFor="color-cafe">
                            <input type="checkbox" name="Café" id="color-cafe" />
                            Café
                        </label>

                        <label htmlFor="color-gris">
                            <input type="checkbox" name="Gris" id="color-gris" />
                            Gris
                        </label>

                        <label htmlFor="color-blanco">
                            <input type="checkbox" name="Blanco" id="color-blanco" />
                            Blanco
                        </label>

                        <label htmlFor="color-negro">
                            <input type="checkbox" name="Negro" id="color-negro" />
                            Negro
                        </label>
                    </fieldset>
                    <fieldset id='fs-habitat'>
                        <legend>Hábitat</legend>
                        <label htmlFor="habitat-pradera">
                            <input type="checkbox" name="Pradera" id="habitat-pradera" />
                            Pradera
                        </label>

                        <label htmlFor="habitat-bosque">
                            <input type="checkbox" name="Bosque" id="habitat-bosque" />
                            Bosque
                        </label>

                        <label htmlFor="habitat-desierto">
                            <input type="checkbox" name="Desierto" id="habitat-desierto" />
                            Desierto
                        </label>

                        <label htmlFor="habitat-montana">
                            <input type="checkbox" name="Montaña" id="habitat-montana" />
                            Montaña
                        </label>

                        <label htmlFor="habitat-marisma">
                            <input type="checkbox" name="Marisma" id="habitat-marisma" />
                            Marisma
                        </label>

                        <label htmlFor="habitat-sabana">
                            <input type="checkbox" name="Sabana" id="habitat-sabana" />
                            Sabana
                        </label>

                        <label htmlFor="habitat-altiplano">
                            <input type="checkbox" name="Altiplano" id="habitat-altiplano" />
                            Altiplano
                        </label>

                        <label htmlFor="habitat-quebrada">
                            <input type="checkbox" name="Quebrada" id="habitat-quebrada" />
                            Quebrada
                        </label>

                        <label htmlFor="habitat-lago">
                            <input type="checkbox" name="Lago" id="habitat-lago" />
                            Lago
                        </label>

                        <label htmlFor="habitat-pantano">
                            <input type="checkbox" name="Pantano" id="habitat-pantano" />
                            Pantano
                        </label>

                        <label htmlFor="habitat-rio">
                            <input type="checkbox" name="Río" id="habitat-rio" />
                            Río
                        </label>

                        <label htmlFor="habitat-playa">
                            <input type="checkbox" name="Playa" id="habitat-playa" />
                            Playa
                        </label>

                    </fieldset>
                    <fieldset id='fs-state'>
                        <legend>Estado</legend>
                        <label htmlFor="state-extinction" style={{ width: '12rem' }}>
                            <input type="checkbox" name="extinction" id="state-extinction" />
                            En vía de extinción
                        </label>
                    </fieldset>
                    <div>
                        <SearchButton type='submit' style={{marginRight: '0.5rem'}}>Filtrar</SearchButton>
                        <SearchButton onClick={() => {
                            setAdvanced(false)
                            setSearchState(false)
                        }}>Búsqueda por nombre</SearchButton>
                    </div>
                </SearchForm>}

        </>
    );
}

export default Search;