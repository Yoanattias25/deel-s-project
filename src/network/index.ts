import { Axios } from "axios";
import RickAndMortyCharacter from "../models/character";

const api = new Axios({
    baseURL: 'https://rickandmortyapi.com/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});


export async function getCharacters(): Promise<RickAndMortyCharacter[]> {
    return api.get('/character')
        .then(response => JSON.parse(response.data))
        .then(parsed => parsed.results as RickAndMortyCharacter[])
}