import { useState, useEffect } from 'react';
import dataBase from '../firebase/firebaseConfig'
import { collection, onSnapshot, query } from 'firebase/firestore'

/**
 * Hook encargado de cargar todas las especies resgistradas
 * @returns retorna la información de las especies y alguna información de la transacción como
 * si aún hay disponibles o si no hay registros para tomar un control de esta información en los
 * componentes encargados
 */
const useGetSpecies = () => {
    const [species, setSpecies] = useState([]);
    const [empty, setEmpty] = useState(false);

    useEffect(() => {
        const queries = query(
            collection(dataBase, 'species'),
        );

        const unsuscribe = onSnapshot(queries, (snapshot) => {
            if(snapshot.empty){setEmpty(true)}

            setSpecies(snapshot.docs.map((specie) => {
                return { ...specie.data(), id: specie.id }
            }));
        });

        return unsuscribe;
    }, []);

    return [species, empty];
}

export default useGetSpecies;