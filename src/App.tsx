import React, { useCallback } from "react";
import AutoComplete from "./components/AutoComplete";
import CharacterCard from "./components/CharacterCard";
import useCharacters from "./hooks/useCharacters";


// main app component
function App() {
  const {
    characters,
    viewingCharacter,
    characterNames,
    error,
    loading,
    onCharacterSelected
  } = useCharacters()

  // render the character card
  const renderComponent = useCallback(() => {
    if (loading) return <div>Loading...</div>
    if (error || !characterNames) return <div>Something went wrong</div>

    return <React.Fragment>
      <AutoComplete items={characterNames} onSelected={onCharacterSelected} />
      <CharacterCard character={viewingCharacter!} />
    </React.Fragment>
  }, [characters, viewingCharacter])


  return (
    <div className="App-header">
      <h3>Rick And Morty Auto-Complete</h3>
      {renderComponent()}
    </div>
  );
}

export default App;
