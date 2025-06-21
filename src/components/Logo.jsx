import { Link } from "react-router"
import { ROUTES } from "../config/routes"

export function Logo() {
    return <Link to={ROUTES.HOME} aria-label="Back to the homepage">
        <div className="flex items-center gap-1">
            <img src="/pokeball.png" alt="" className="w-5 h-auto"/>
            <img src="/pokedex.png" alt="Pokédex website logo" className="w-25 h-auto" />
        </div>
    </Link>
}