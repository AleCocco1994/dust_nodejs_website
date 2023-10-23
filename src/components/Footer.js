import React from "react";
import Link from 'next/link'; 

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-blue-600 font-medium text-2xl">
            <div className="w-full h-full z-0 bg-light px-32 py-4 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div>
                    Built with <span className="text-red-800 text-2xl px-1">&hearts;</span> by Dust Team
                </div>
                <Link href="https://opensource.org/license/mit/" target={"_blank"} className="underline">MIT Licence</Link>
            </div> 
        </footer>
    )
}

export default Footer;