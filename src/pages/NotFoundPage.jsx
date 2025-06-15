import { Link } from "react-router"
import { House } from 'lucide-react';
import { ROUTES } from "../config/routes"

export function NotFoundPage() {
    return <div className="h-dvh flex flex-col justify-center items-center">
        <span className="text-[#EA1950] uppercase font-semibold text-4xl md:text-6xl tracking-widest mb-3">Sorry</span>

        <div id="title_not_found_page" className="flex justify-center relative">
            <span className="text-9xl md:text-[12rem] font-semibold">4</span>
            <img src="/public/opened_pokeball.png" alt="0" className="w-40 h-auto md:w-52" />
            <span className="text-9xl md:text-[12rem] font-semibold">4</span>
        </div>

        <div className="mt-12 md:mt-15 flex flex-col items-center gap-6">
            <p className="font-semibold text-lg md:text-3xl tracking-widest">Page not found</p>
            <Link to={ROUTES.HOME} className="font-semibold text-xl md:text-2xl uppercase flex items-center gap-2 hover:underline hover:decoration-2 hover:underline-offset-5"> <House /> Back Home</Link>
        </div>
    </div>
}