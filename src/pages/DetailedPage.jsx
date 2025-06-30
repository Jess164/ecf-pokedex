/* 
    Display the detailed page of a specific pokémon
*/

import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getPokemonById } from "../api/pokemons/getPokemonById"
import { getReviewsById } from "../api/reviews/getReviewsById"
import { NameTagList } from "../components/nameTag/NameTagList"
import { ProgressBarList } from "../components/progressbar/ProgressBarList"
import { LikeCounter } from "../components/LikeCounter"
import { ReviewsSection } from "../components/reviews/ReviewsSection"
import { UnderHeaderArrow } from "../components/UnderHeaderArrow"

export function DetailedPage() {
    const [pokemon, setPokemon] = useState(null)
    const [reviews, setReviews] = useState(null)
    const { id } = useParams()

    console.log('infos pokemon', pokemon)
    console.log('reviews pokemon', reviews)
    
    useEffect(() => {
        loadInfoPokemon()
    }, [])

    async function loadInfoPokemon(){
        const pokemonDatas = await getPokemonById(id)
        const reviewsDatas = await getReviewsById(id)
        setPokemon(pokemonDatas)
        setReviews(reviewsDatas)
    }

    function addLike() {
        setPokemon((prev) => (
            {...prev, like: prev.like + 1,}
        ))
    }

     function addReview(newReview) {
        setReviews((prev) => (
            [...prev, newReview] 
        ))
    }

    if(!pokemon) return <h2>Loading...</h2>

    return <div className="flex flex-col items-center justify-between w-[90%] lg:w-[95%] m-auto max-h-dvh bg-[url(/pokeball_bg.svg)] bg-center bg-contain md:bg-size-[600px] bg-no-repeat">
        <UnderHeaderArrow reviews={reviews} pokemon={pokemon} onClickArrowPokemon={setPokemon} onClickArrowReview={setReviews}/> 
        
        <div className="flex items-center justify-end w-full mb-6">
            <LikeCounter pokemon={pokemon} onClickLike={addLike} />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10 items-center m-auto lg:m-0 h-[80dvh] w-full">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt={`Image of the pokemon ${pokemon.name}`} className="lg:w-1/5" />

            <div className="w-full lg:w-[40%] lg:m-auto">
                <div className="flex flex-col items-center gap-5">
                    <h2 className="text-4xl font-semibold">{pokemon.name}</h2>
                    <NameTagList pokemonTypes={pokemon.types}  />
                </div>
                
                <div className="mt-5 mb-10">
                    <ProgressBarList statsPokemon={pokemon.base} />
                </div>
            </div>
            
            
            <ReviewsSection reviews={reviews} onSubmitForm={addReview} />
        </div>
    </div>
}