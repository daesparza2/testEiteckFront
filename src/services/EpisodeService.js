export const getEpisodes = async (ids) => {
    
    const  response = await fetch(`https://rickandmortyapi.com/api/episode/${ids}`);

    return response.json();
};