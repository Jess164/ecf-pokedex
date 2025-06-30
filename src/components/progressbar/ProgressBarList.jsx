/* 
    Display the list of progress bars
*/

import { ProgressBar } from "./ProgressBar";

export function ProgressBarList(props) {
    return <div className="w-full">
        {
            Object.keys(props.statsPokemon).map(statKey => {
               return <ProgressBar key={statKey} valuesStats={{name: statKey, value : props.statsPokemon[statKey]}} />
            })
        }
    </div>
}