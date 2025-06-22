import { TypeNameTag } from "./TypeNameTag"

export function Card(props) {

    function displayTypeNameTag() {
        if (props.pokemon.types.length <= 1) {
            return <TypeNameTag typePokemon={props.pokemon.types[0]} />
        }
        else{
            return props.pokemon.types.map((type, index) => {
                return <TypeNameTag key={index} typePokemon={type} />
            })
        }
    }

    return <article className="border border-[#CCCCCC] w-44 h-48 rounded-2xl shadow p-4 flex flex-col justify-between items-center gap-3">
        <img className="max-w-20 h-24" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`} alt={`Image of the pokemon ${props.pokemon.name}`} />
        
        <div className="flex flex-col items-center gap-2">
            <span>#{props.pokemon.id} {props.pokemon.name}</span>
            <div className="flex items-center justify-center gap-2">{displayTypeNameTag()}</div>
        </div>
       
    </article>
}