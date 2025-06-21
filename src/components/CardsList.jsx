import { Card } from "./Card";

export function CardList(props) {

    return <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-center gap-3 mt-10">
        {
            props.pokemonsList.map((pokemon) => {
                return <Card key={pokemon.id} pokemon={pokemon} />
            })
        }
    </div>
}