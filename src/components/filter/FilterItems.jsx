/* 
    Display the whole items of filter
*/


import { FilterInput } from "./FilterInput"
import { SelectType } from "./SelectType"

export function FilterItems(props) {
    return <div>
       <FilterInput onChangeInputValue={props.onChangeInputValue}>
            <SelectType onSelectOption={props.onSelectOption} />
       </FilterInput>
    </div>
}