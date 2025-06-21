import { PKMN_TYPES } from "../utils/pokemonTypes"

export function TypeNameTag(props) {
    function changeColor(typeNamePokemon){
        let colorType = undefined

        PKMN_TYPES.map(item => {
            if (typeNamePokemon.toLowerCase() === (item.name.toLowerCase())) {                
                colorType = item.color 
            }
        })
        return colorType
    }

    return <div style={{backgroundColor : changeColor(props.typePokemon) }} className="w-16 text-center rounded-full shadow text-white text-sm py-0.5">
       {props.typePokemon}
    </div>
}