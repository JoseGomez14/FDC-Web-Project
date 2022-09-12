import React, { useState } from 'react';
import { advancedSearch, basicSearch } from '../../functions/funcSearch';

const Search = ({ setSearchState, setFilterSpecies, species }) => {

    const [advanced, setAdvanced] = useState(false);
    const [nameSearch, setNameSearch] = useState('');

    const handleSearchByName = (evt)=>{
        setNameSearch(evt.target.value)
        if(evt.target.value === ''){
            setSearchState(false);
        }
    }

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
                        <input type="checkbox" name="fauna" id="class-fauna" />

                        <label htmlFor="class-flora">Flora</label>
                        <input type="checkbox" name="flora" id="class-flora" />
                    </fieldset>
                    <fieldset id='fs-group'>
                        <legend>Grupo</legend>
                        <label htmlFor="group-aves">Aves</label>
                        <input type="checkbox" name="aves" id="group-aves" />

                        <label htmlFor="group-mamiferos">Mamíferos</label>
                        <input type="checkbox" name="mamiferos" id="group-mamiferos" />

                        <label htmlFor="group-reptiles">Reptiles</label>
                        <input type="checkbox" name="reptiles" id="group-reptiles" />

                        <label htmlFor="group-anfibios">Anfibios</label>
                        <input type="checkbox" name="anfibios" id="group-anfibios" />

                        <label htmlFor="group-insectos">Insectos</label>
                        <input type="checkbox" name="insectos" id="group-insectos" />

                        <label htmlFor="group-plantas">Plantas</label>
                        <input type="checkbox" name="plantas" id="group-plantas" />

                        <label htmlFor="group-hongos">Hongos</label>
                        <input type="checkbox" name="hongos" id="group-hongos" />
                    </fieldset>
                    <fieldset id='fs-color'>
                        <legend>Color del pelaje</legend>
                        <label htmlFor="color-rojo">Rojo</label>
                        <input type="checkbox" name="rojo" id="color-rojo" />

                        <label htmlFor="color-azul">Azul</label>
                        <input type="checkbox" name="azul" id="color-azul" />

                        <label htmlFor="color-verde">Verde</label>
                        <input type="checkbox" name="verde" id="color-verde" />

                        <label htmlFor="color-amarillo">Amarillo</label>
                        <input type="checkbox" name="amarillo" id="color-amarillo" />
                    </fieldset>
                    <fieldset id='fs-habitat'>
                        <legend>Hábitat</legend>
                        <label htmlFor="habitat-pradera">Pradera</label>
                        <input type="checkbox" name="pradera" id="habitat-pradera" />

                        <label htmlFor="habitat-bosque">Bosque</label>
                        <input type="checkbox" name="bosque" id="habitat-bosque" />

                        <label htmlFor="habitat-desierto">Desierto</label>
                        <input type="checkbox" name="desierto" id="habitat-desierto" />

                        <label htmlFor="habitat-montana">Montaña</label>
                        <input type="checkbox" name="montana" id="habitat-montana" />

                        <label htmlFor="habitat-marisma">Marisma</label>
                        <input type="checkbox" name="marisma" id="habitat-marisma" />

                        <label htmlFor="habitat-sabana">Sabana</label>
                        <input type="checkbox" name="sabana" id="habitat-sabana" />

                        <label htmlFor="habitat-altiplano">Altiplano</label>
                        <input type="checkbox" name="altiplano" id="habitat-altiplano" />

                        <label htmlFor="habitat-quebrada">Quebrada</label>
                        <input type="checkbox" name="" id="habitat-quebrada" />

                        <label htmlFor="habitat-lago">Lago</label>
                        <input type="checkbox" name="lago" id="habitat-lago" />

                        <label htmlFor="habitat-pantano">Pantano</label>
                        <input type="checkbox" name="pantano" id="habitat-pantano" />

                        <label htmlFor="habitat-rio">Río</label>
                        <input type="checkbox" name="rio" id="habitat-rio" />

                        <label htmlFor="habitat-playa">Playa</label>
                        <input type="checkbox" name="playa" id="habitat-playa" />

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