import BtnNav from "../../Elements/BtnNav/BtnNav";

export default function Navbar() {
    return(
        <div className="flex justify-center mt-10 cursor-pointer font-semibold">
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
    );
}