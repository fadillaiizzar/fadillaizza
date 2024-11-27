import { useState } from "react";
import BtnNav from "../../Elements/SectNav/BtnNav";

export default function Navbar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const handleHamburger = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return(
        <>
            <div className="hidden md:flex justify-center pt-10 cursor-pointer font-semibold">
                <BtnNav
                textnav="Beranda"
                radius="rounded-l-full"
                padx="pl-10 px-4"
                />

                <BtnNav 
                textnav="Profile"
                />

                <BtnNav 
                textnav="Pendidikan"
                />

                <BtnNav 
                textnav="Keahlian"
                />

                <BtnNav 
                textnav="Proyek"
                />

                <BtnNav 
                textnav="Sertifikat"
                radius="rounded-r-full"
                padx="pr-10 px-4"
                />
            </div>

            <div id="hamburger" className="md:hidden flex cursor-pointer pt-10 justify-end mr-7">
                <BtnNav 
                textnav="☰"
                radius="rounded-full"
                padx="px-6"
                onClick={handleHamburger}
                />
            </div>

            <div id="mobile-menu" className={`md:hidden mr-7 ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="flex items-end mt-10 py-4 cursor-pointer flex-col font-semibold bg-black w-fit ml-auto pl-24 rounded-lg">
                    <BtnNav
                    textnav="Beranda"
                    />

                    <BtnNav 
                    textnav="Profile"
                    />

                    <BtnNav 
                    textnav="Pendidikan"
                    />

                    <BtnNav 
                    textnav="Keahlian"
                    />

                    <BtnNav 
                    textnav="Proyek"
                    />

                    <BtnNav 
                    textnav="Sertifikat"
                    />
                </div>
            </div>
        </>
    );
}