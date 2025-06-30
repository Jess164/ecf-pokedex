/* 
    Create a new review for a specific Pokémon in the API
*/


export async function getReviewsById(idPokemon) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_REVIEW_URL}/?pokemonId=${idPokemon}`)
        return await response.json()
    } catch (error) {
        console.error('Error retrieving pokemon: ' + error)
    }
}