import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
    return (
    <div className="h-12 text-red-500 px-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase text-sm md:text-base cursor-pointer">
        {
            /*Logo*/ 
        }
        <div className="text-xl ">
            <Link href="/"> Massimo</Link>

        </div>

        {
            /*logo*/
        }
        <div>
        <Menu/>
        </div>
    </div>
    );
}

export default NavBar;