import { FilterItems } from "../components/filter/FilterItems"
import { CardList } from "../components/cards/CardsList"
import { useState } from "react"
import { useEffect } from "react"
import { getPokemons } from "../api/pokemons/getPokemons"

export function HomePage() {
    const [pokemons, setPokemons] = useState([])
    const [nameFilter, setNameFilter] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    console.log(pokemons);

    useEffect(() => {
        loadPokemons()
    }, [])

    async function loadPokemons(){
        const pokemonsDatas = await getPokemons()
        setPokemons(pokemonsDatas)
    }   

    const filteredPokemons = pokemons.filter((pokemon) => {
       return pokemon.name.toLowerCase().includes(nameFilter.toLowerCase()) 
        && pokemon.types.find((type) => { return type.toLowerCase().includes(typeFilter.toLowerCase())})
    })

    return <div className="mb-10">
        <div className="w-[90%] mx-auto mt-10 mb-4">
            <FilterItems onChangeInputValue={setNameFilter} onSelectOption={setTypeFilter} />
        </div>

        <div className="md:w-[80%] mx-auto">
            <CardList pokemonsList={filteredPokemons} />
            <p className={`text-center ${filteredPokemons.length === 0 ? 'visible' : 'hidden'}`}>Aucun résultat pour la recherche <em>« {nameFilter} »</em></p>
        </div>
    </div>
}