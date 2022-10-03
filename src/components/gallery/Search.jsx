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
   const classes = ["Aves", "Mamíferos", "Reptiles", "Anfibios", "Insectos", "Plantas", "Hongos"];
   const colors = ["Rojo", "Azul", "Verde", "Amarillo", "Rosa", "Anaranjado", "Morado", "Café", "Gris", "Blanco", "Negro"];
   const habitats = ["Pradera", "Bosque", "Desierto", "Montaña", "Marisma", "Sabana", "Altiplano", "Quebrada", "Lago", "Pantano", "Río", "Playa"];

   const [advanced, setAdvanced] = useState(false);
   const [nameSearch, setNameSearch] = useState('');

   /**
    * Permite establecer el nombre que se está buscando y si existe una consulta válida o no
    * @param {*} evt información del evento asociado
    */
   const handleSearchByName = (evt) => {
      setNameSearch(evt.target.value)
      
      if (evt.target.value === '') setSearchState(false);
   }

   /**
    * Identifica el tipo de búsqueda y ejecuta la función adecuada según el caso
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

   if (!advanced) {
      return (
         <SearchForm onSubmit={handleSubmit}>
            <SearchInput
               id='inpt-search' type='search'
               placeholder='Nombre de la especie'
               value={nameSearch}
               onChange={handleSearchByName} />

            <SearchButton type='submit' title='Buscar'> 
               <FontAwesomeIcon icon={faSearch} />
            </SearchButton>

            <SearchButton
               title='Búsqueda avanzada'
               onClick={() => {
                  setAdvanced(true)
                  setSearchState(false)
               }}
            ><FontAwesomeIcon icon={faFilter} /></SearchButton>
         </SearchForm>
      );
   } else {
      return (
         <SearchForm onSubmit={handleSubmit} column>
            <Fieldset title="Clasificación" type='clasification' items={["Fauna", "Flora"]} />

            <Fieldset title="Clase" type='class' items={classes} />

            <Fieldset title="Color del pelaje" type='color' items={colors} />

            <Fieldset title="Hábitat" type='habitat' items={habitats} />

            <Fieldset title="Estado" type='state' items={["En vía de extinción"]} style={{ width: '12rem' }} />

            <div>
               <SearchButton type='submit' style={{ marginRight: '0.5rem' }}>Filtrar</SearchButton>
               <SearchButton onClick={() => {
                  setAdvanced(false)
                  setSearchState(false)
               }}>Búsqueda por nombre</SearchButton>
            </div>
         </SearchForm>
      );
   }
}

/**
 * Coponente que permite generar las posibilidades de filtrado dado un arreglo de elementos
 * @param {*} items conjunto de elementos posibles para el filtro por categoría
 * @param {*} type tipo de categoría
 * @param {*} title titulo de la categoría a filtrar
 * @returns componente fieldset e inputs
 */
const Fieldset = ({ items, type, title, style }) => (
   <fieldset id={"fs-" + type}>
      <legend>{title}</legend>
      {items.map((item) => {
         return (<label htmlFor={type + "-" + item} key={"form-" + type + "-" + item} style={style}>
            <input type="checkbox" name={item} id={type + "-" + item} />
            {item}
         </label>
         );
      })}
   </fieldset>
)

export default Search;