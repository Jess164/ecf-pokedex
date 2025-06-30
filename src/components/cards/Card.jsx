/* 
    Display a card of Pokémon
*/

import { Link } from "react-router"
import { NameTagList } from "../nameTag/NameTagList"
import { ROUTES } from "../../config/routes"

export function Card(props) {
    return <Link to={ROUTES.DETAILED_PAGE.replace(":id", props.pokemon.id)} aria-label={`Lien vers la page du pokémon ${props.pokemon.name}`}>
        <article className="border border-[#CCCCCC] w-44 h-48 rounded-2xl shadow p-4 flex flex-col justify-between items-center gap-3">
            <img className="max-w-20 h-24" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`} alt={`Image of the pokemon ${props.pokemon.name}`} />
            
            <div className="flex flex-col items-center gap-2">
                <span>#{props.pokemon.id} {props.pokemon.name}</span>
                <NameTagList pokemonTypes = {props.pokemon.types} />
            </div>
        </article>
    </Link>
}