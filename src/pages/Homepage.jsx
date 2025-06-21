import { FilterInput } from "../components/FilterInput"
import { CardList } from "../components/CardsList"
import { useState } from "react"
import { useEffect } from "react"
import { getPokemons } from "../api/getPokemons"

export function HomePage() {
    const [pokemons, setPokemons] = useState([])
    console.log(pokemons);

    useEffect(() => {
        loadPokemons()
    }, [])

    async function loadPokemons(){
        const pokemonsDatas = await getPokemons()
        setPokemons(pokemonsDatas)
    }

    return <div>
        <div className="w-[90%] mx-auto mt-10 mb-4">
            <FilterInput/>
        </div>

        <CardList pokemonsList={pokemons} />
    </div>
}