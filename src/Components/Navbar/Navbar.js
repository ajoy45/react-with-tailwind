import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const[open,setOpen]=useState(false);
    const routes=[
        {id:1,name:"Home",link:"/home"},
        {id:1,name:"Contact",link:"/contact"},
        {id:1,name:"Blog",link:"/home"}
    ]
    return (
        <nav >
            <div onClick={()=>setOpen(!open)} className="h-5 w-5 text-blue-500 md:hidden ">
           {open?<XIcon></XIcon>:<MenuIcon ></MenuIcon>}
            </div>
            <ul className={`md:flex items-center justify-center text-white py-1 w-full bg-blue-600 absolute md:static  duration-500 ease-in ${open?'top-6':'top-[-120px]'} `}>
             {
                 routes.map(route=><Link
                 key={route.id}
                 route={route}
                 ></Link>)
             }
            </ul>
        </nav>
    );
};

export default Navbar;