export async function getPokemonById(idPokemon) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${idPokemon}`)
        return await response.json()
    } catch (error) {
        console.error('Error retrieving pokemon: ' + error)
    }
}