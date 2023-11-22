import Link from "next/link"
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"



const Navbar = () => {
    return (
        <nav className=" flexBetween max-container shadow padding-container relative z-30 py-2">
            <Link href="/">
                <Image src="/logo.png" alt="logo" width="110" height="80"/>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
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

            <div className="lg:flexCenter hidden">
                <Button 
                    type="button"
                    title="Login"
                    icon="/user.svg"
                    variant="btn_dark_green"
                />
            </div>

            <Image 
                src="menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="inline-block cursor-pointer lg:hidden"
                // onClick={}
            />
    </nav>
    )
}

export default Navbar