import { MAX_STAT } from "../../utils/statLimits"

export function ProgressBar(props) {    
    function colorProgressBar() {
        switch (props.valuesStats.name) {
            case "Attack":
                return '#52B69A'
            case "Special attack":
                return '#52B69A'
            case "Defense":
                return '#34A0A4'
            case "Special defense":
                return '#41a5c4'
            case "Speed":
                return '#75C893'
            case "HP":
                return '#158AAD'
            default:
                return 'transparent';
        }
    }    

    return <div className="grid grid-cols-1 md:grid-cols-[0.3fr_1fr] grid-flow-rows">
        <p className="font-bold">{props.valuesStats.name}</p>

        <div className="flex items-center gap-3 w-full">
            <span>{props.valuesStats.value}</span>

            <div className="w-full bg-gray-400/50 border border-gray-800 h-3 rounded-full shadow relative box-content overflow-hidden transition duration-300 ease-in-out">
                <div style={{width : `${(props.valuesStats.value / MAX_STAT[props.valuesStats.name]) * 100}%` , backgroundColor: colorProgressBar()}} className="h-3 rounded-full absolute z-10 top-0"></div>
            </div>
        </div>
    </div>
}