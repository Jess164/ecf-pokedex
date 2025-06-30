/* 
    Display the list of tagnames
*/

import { NameTag } from "./NameTag"

export function NameTagList(props) {
    return <div className="flex items-center justify-center gap-2">
        {
            props.pokemonTypes.map((type, index) => {
                return <NameTag typePokemon={type} key={`${type}-${index}`} />
            })
        }
    </div>
}