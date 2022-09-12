import { useState, useEffect } from 'react';
import dataBase from '../firebase/firebaseConfig'
import { collection, onSnapshot, query, limit, startAfter } from 'firebase/firestore'

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