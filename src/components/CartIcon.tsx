// CartIcon.js
import Link from "next/link";
import React from "react";
import Image from "next/image";

const CartIcon = () => {
    return (
        <Link href="/cart" className="flex items-center gap-4 cursor-pointer">
            <div className="relative w-8 h-8 md:w-5 md:h-5">
                <Image src="/cart.png" alt="cart" layout="fill" />
            </div>
            <span>Cart (3)</span>
        </Link>
    );
};

export default CartIcon;





// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// const CartIcon = () =>{
//     return (
//         <Link href="/cart" className="flex items-center gap-4 cursor-pointer">
//             <div className="relative w-8 h-8 cursor-pointer">
//                 <Image src="/cart.png" alt="cart" fill/>
//             </div>
//             <span>Cart (3)</span>
//         </Link>

//     )

// }

// export default CartIcon;