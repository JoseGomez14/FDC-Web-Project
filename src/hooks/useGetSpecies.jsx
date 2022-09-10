import { useState, useEffect } from 'react';
import dataBase from '../firebase/firebaseConfig'
import { collection, onSnapshot, query, limit, startAfter } from 'firebase/firestore'

const useGetSpecies = () => {
    const [species, setSpecies] = useState([]);
    const [lastSpecie, setLastSpecie] = useState(null);
    const [moreToLoad, setMoreToLoad] = useState(false);
    const [empty, setEmpty] = useState(false);

    const getMoreSpecies = () => {
        const queries = query(
            collection(dataBase, 'species'),
            limit(10),
            startAfter(lastSpecie)
        );

        onSnapshot(queries, (snapshot) => {
            if (snapshot.docs.length > 0) {
                setLastSpecie(snapshot.docs[snapshot.docs.length - 1]);

                setSpecies(species.concat(snapshot.docs.map((specie) => {
                    return { ...specie.data() }
                })))
            } else {
                setMoreToLoad(false);
            }
        }, error => { console.log(error) });
    }

    useEffect(() => {
        const queries = query(
            collection(dataBase, 'species'),
            limit(10)
        );

        const unsuscribe = onSnapshot(queries, (snapshot) => {
            if (snapshot.docs.length > 0) {
                setLastSpecie(snapshot.docs[snapshot.docs.length - 1]);
                setMoreToLoad(true);
            } else {
                setMoreToLoad(false);
            }
            if(snapshot.empty){setEmpty(true)}

            setSpecies(snapshot.docs.map((specie) => {
                return { ...specie.data(), id: specie.id }
            }));
        });

        return unsuscribe;
    }, []);

    return [species, getMoreSpecies, moreToLoad, empty];
}

export default useGetSpecies;