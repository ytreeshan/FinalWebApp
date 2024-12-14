"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/components/CartIcon"; // Correct path to your CartIcon component

const links = [
    { id: 1, title: "HomePage", url: "/" },
    { id: 2, title: "Menu", url: "/Menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
    // Initialize the state properly
    const [open, setOpen] = React.useState(false);
    const user = false; // Replace with actual logic for user authentication

    // Handler for toggling the menu
    const toggleMenu = () => {
        setOpen(!open); // Toggle the menu visibility
    };

    return (
        <div>
            {/* Menu toggle button */}
            <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
                {!open ? (
                    <Image
                        src="/open.png"
                        alt="Open menu"
                        width={20}
                        height={20}
                    />
                ) : (
                    <Image
                        src="/close.png"
                        alt="Close menu"
                        width={20}
                        height={20}
                    />
                )}
            </div>

            {/* Menu items */}
            {open && (
                <div className="bg-red-500 text-white absolute left-0 top-12 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
                    {links.map((item) => (
                        <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
                            {item.title}
                        </Link>
                    ))}
                    {!user ? (
                        <Link href="/login" onClick={() => setOpen(false)}>
                            Login
                        </Link>
                    ) : (
                        <Link href="/orders" onClick={() => setOpen(false)}>
                            Orders
                        </Link>
                    )}
                    <Link href="/cart" onClick={() => setOpen(false)}>
                        <CartIcon />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Menu;


//Completed  26 minutes of the video
//code crashes but will fixed later





// "use client"

// import React from "react";
// import Image from 'next/image';
// import exp from "constants";
// import { title } from "process";
// import Link from "next/link";
// import ChartPage from "@/app/chart/page";
// import ChartIcon from "@/components/CartIcon"; // Adjust the path as necessary
// import CartIcon from "@/components/CartIcon";

// const links = [
//     {id:1, title: "HomePage", url: "/"},
//     {id:2, title: "Menu", url: "/Menu"},
//     {id:3, title: "Working Hours", url: "/"},
//     {id:4, title: "Contact", url: "/"},

// ];

    

// const Menu = () => {
//     const [open, setOpen] = React.useState(false);
//     const user = false;
//     return (
//         <div>
//            { !open ?(
//            <Image src="/open.png" alt="menu" width={20} height={20} onClick={()=>setOpen(true)}/>
//               ):(
//             <Image src="/close.png" alt="menu" width={20} height={20}  onClick={()=>setOpen(false)}/>

//     )}

//        { open && (
//        <div className="bg-red-500 text-white absolute left-0 top-12 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
//             { links.map(item=>(
//                 <Link href = {item.url} key= {item.id} onClick={() => { setOpen(false) }}>
//                     {item.title}
//                     </Link>
//             ))}
//             {!user ? (
//             <Link href="/login" onClick={() => { setOpen(false) }}>Login</Link>
//     ):(
//             <Link href="/orders" onClick={() => { setOpen(false) }}>Orders</Link>
//             )}

//             <Link href="/cart" onClick={() => { setOpen(false) }}>
//                 <CartIcon/>
//             </Link>

//         </div>
//         )}
//         </div>
//     )
// }

// export default Menu;