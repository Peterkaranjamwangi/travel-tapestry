import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (


<nav className=" -z-30 flex-between w-full mb-16 pt-3">
<div className=" flex flexCol gap-11">
    <div className="md:hidden flex-1">
        <ul className=" h-full">
                {NAV_LINKS.map((link) => (
                    <Link 
                    href={link.href} 
                    key={link.key}  
                    className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold" 
                    >
                        {link.label}
                    </Link>
                ))}
        </ul>
    </div>
</div>


</nav>
  )
}

export default SideBar