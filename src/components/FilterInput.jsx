import { Search } from 'lucide-react';

export function FilterInput() {
    return <div className='relative'>
        <label htmlFor="filter_input" className="sr-only">Pokémon Filtering Input</label>
        <input type="search" name="filter_input" id="filter_input" placeholder="Filter the pokemon list, ex: Pikachu..." className="w-full border border-[#FEC277] pl-8 pr-4 rounded-2xl focus:outline-1 focus:outline-[#faa946]" /> 
        <Search size={20} color='#FEC277' className='absolute top-1/2 -translate-y-1/2 left-2' />
    </div>
}