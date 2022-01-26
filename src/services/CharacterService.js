export const getCharacters = async () => {
    
    const  response = await fetch('https://rickandmortyapi.com/api/character');

    return response.json();
};

 export const searchCharacter = async (nombre) => {

    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
    
    return response.json();

};

export const getCharacterId = async (id) => {
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    
    return response.json();
};