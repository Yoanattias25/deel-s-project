import RickAndMortyCharacter from "../../models/character";
import './styles.css'

type CharacterCardProps = {
    character: RickAndMortyCharacter
}

// character card component
const CharacterCard = ({ character }: CharacterCardProps) => {
    return (
        <div className="card">
            <img src={character.image} alt={character.name} />
            <div className="card-body">
                <h3>{character.name}</h3>
                <p>
                    <strong>Species:</strong> {character.species}
                </p>
                <p>
                    <strong>Status:</strong> {character.status}
                </p>
                <p>
                    <strong>Origin:</strong> {character.origin.name}
                </p>
                <p>
                    <strong>Last known location:</strong> {character.location.name}
                </p>
            </div>
        </div>
    );
};
export default CharacterCard