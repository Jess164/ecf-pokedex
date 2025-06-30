/* 
    Display a search input to filter the Pokémons list
*/

import { Search } from 'lucide-react';

export function FilterInput(props) {
    return <div className='relative w-full border-y border-s border-[#FEC277] rounded-2xl  focus-within:outline-1 focus-within:outline-[#faa946]'>
        <label htmlFor="filter_input" className="sr-only">Pokémon Filtering Input</label>
        <input type="search" name="filter_input" id="filter_input" placeholder="Filter the pokemon list, ex: Pikachu..." onChange={(event) => { props.onChangeInputValue(event.target.value)}} className="pl-8 pr-4 rounded-2xl w-2/3 md:w-3/3 focus:outline-none" /> 
        <Search size={20} color='#FEC277' className='absolute top-1/2 -translate-y-1/2 left-2' />
    
        {props.children}
    </div>
}