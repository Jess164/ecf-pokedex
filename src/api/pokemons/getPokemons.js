/* 
    Fetch Pokémons datas in the API
*/

export async function getPokemons() {
    try {
        const response = await fetch(import.meta.env.VITE_API_BASE_URL)
        return await response.json()
    } catch (error) {
        console.error('Error retrieving pokemons: ' + error)
    }
}