import { Link } from "react-router";
import { ROUTES } from "../config/routes"
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import { getPokemonById } from "../api/pokemons/getPokemonById"
import { getReviewsById } from "../api/reviews/getReviewsById"

export function UnderHeaderArrow(props) {
    const prevId = parseInt(props.pokemon.id) - 1
    const nextId = parseInt(props.pokemon.id) + 1

    async function loadInfoPokemon(id){
        const pokemonDatas = await getPokemonById(id)
        const reviewsDatas = await getReviewsById(id)
        props.onClickArrowPokemon(pokemonDatas)
        props.onClickArrowReview(reviewsDatas)
    }

    return <div className="flex justify-between w-full my-3">
        {prevId === 0 ? (
            <div className="opacity-50 cursor-pointer">
                <ArrowBigLeft size={30} color='black' />
            </div>
        ) : (
            <Link to={ROUTES.DETAILED_PAGE.replace(":id", prevId)} onClick={prevId!=0 ? () => loadInfoPokemon(prevId) : ''}
            className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
                <ArrowBigLeft size={30} color='black' className="hover:fill-black" />
            </Link>
        )}
      
        {nextId === 152 ? (
            <div className="opacity-50 cursor-pointer">
                <ArrowBigRight size={30} color='black' />
            </div>
        ) : (
            <Link to={ROUTES.DETAILED_PAGE.replace(":id", nextId)} onClick={() => loadInfoPokemon(nextId) } className="cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
                <ArrowBigRight size={30} color='black' className="hover:fill-black" />
            </Link>
        )}  
    </div>
}