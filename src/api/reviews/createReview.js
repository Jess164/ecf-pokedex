export async function createReview(pokemonId, contentReview) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_REVIEW_URL}`,
            {   
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({pokemonId: parseInt(pokemonId), author: "Me", content: contentReview})
            }
        )
        return await response.json()
    } catch (error) {
        console.error('Error add review: ' + error)
    }
}