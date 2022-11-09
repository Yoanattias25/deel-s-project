import { useCallback, useEffect, useMemo, useState } from "react";
import RickAndMortyCharacter from "../models/character";
import { getCharacters } from "../network";

// This is a custom hook that will be used to fetch the characters from the API
// and store them in the state.
const useCharacters = () => {
    const [characters, setCharacters] = useState<RickAndMortyCharacter[]>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(true);
    const [viewingCharacter, setViewingCharacter] = useState<RickAndMortyCharacter>()

    const characterNames = useMemo(() => characters?.map(character => character.name), [characters])

    const onCharacterSelected = useCallback((name: string) => {
        const character = characters?.find(character => character.name === name)
        setViewingCharacter(character)
    }, [characters])

    useEffect(() => {
        (async () => {
            try {
                const chars = await getCharacters()
                setCharacters(chars)
                setViewingCharacter(chars[0])
            } catch (e) { setError(e) }
            setLoading(false)
        })()
    }, [])

    return {
        characters,
        characterNames,
        onCharacterSelected,
        viewingCharacter,
        error,
        loading
    }
}
export default useCharacters