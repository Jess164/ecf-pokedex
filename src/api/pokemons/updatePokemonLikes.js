export async function updatePokemonLikes(idPokemon, datasLikes) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${idPokemon}`,
            {   
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ like: datasLikes }),
            }
        )

        return await response.json()
        
    } catch (error) {
        console.error('Error updating like pokemon: ' + error)
    }
}