import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className="flex flex-col md:hidden border-b pl-3">
            <ul className="flex flex-col">
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
  )
}

export default SideBar