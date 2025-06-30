/* 
    Display a like counter that increase when clicked on
*/

import { Heart } from 'lucide-react';
import { updatePokemonLikes } from '../api/pokemons/updatePokemonLikes';

export function LikeCounter(props) {
    async function updatePokemon() {
        await updatePokemonLikes(props.pokemon.id, props.pokemon.like + 1)
        props.onClickLike()
    }

    return <div className='flex items-center gap-2'>
        <button type="button" className='cursor-pointer' onClick={updatePokemon}>
            <Heart size={25} color='#E64C3C' className='hover:fill-[#E64C3C]' />
        </button>

        <p>{props.pokemon.like}</p>
    </div>
}