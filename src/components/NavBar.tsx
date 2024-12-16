import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const NavBar = () => {

    const user = false;
    return (
    <div className="h-12 text-red-500 px-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase text-sm md:text-base cursor-pointer">
        {
            /*Left Links*/ 
        }
        <div className= "hidden md:flex gap-4"> 
            <Link href="/">HomePage</Link>
            <Link href="/">Menu</Link>
            <Link href="/">Contact</Link>

        </div>
        
        
        {
            /*Logo*/ 
        }
        <div className="text-xl ">
            <Link href="/"> Massimo</Link>

        </div>

        {
            /*logo*/
        }
        <div className="hidden">
        <Menu/>
        </div>
        {
            /*Right Links*/
        }
        <div className="hidden md:flex gap-4">
                <Image src="/phone.png" alt=" " width={20} height={20} />
    
                <span>123-456-7890</span>

            </div>

            {!user ? (
            
            <Link href="/login">Login</Link>
            ) : (
            <Link href="/orders">Orders</Link>
            )}
            <CartIcon/>
            
            
    </div>
    );
}

export default NavBar;