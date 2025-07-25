/* 
    Display this app logo and redirect to the home page when clicked on
*/

import { Logo } from "./Logo"

export function Header() {
    return <div className="bg-[#FFF1E0] py-4 md:px-4 flex justify-center md:justify-start">
        <Logo/>
    </div>
}