import { PKMN_TYPES } from "../../utils/pokemonTypes"

export function SelectType(props) {
    return <div className="w-max h-full absolute right-0 top-1/2 -translate-y-1/2 flex justify-end items-center border-e border-s-2 border-[#FEC277] rounded-e-2xl">
        <label htmlFor="type_select" className="sr-only">Sort by a pokemon type :</label>

        <select name="type_select" id="type_select" className="rounded-2xl ps-2 text-center" onChange={(event) => {props.onSelectOption(event.target.value)}}>
            <option value="" className="text-[#AAAAAA]">--All types--</option>
            {
               PKMN_TYPES.map((type, index) => {
                return <option className="text-center" key={`${index}-${type.name}`} value={type.name}>{`--${type.name}--`}</option>
               }) 
            }
        </select>
    </div>
}