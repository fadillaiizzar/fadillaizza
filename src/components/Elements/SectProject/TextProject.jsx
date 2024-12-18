import HeadingSatu from "../Text/HeadingSatu";

export default function TextProject() {
    return(
        <div className="mb-14">
            <div className="flex justify-center px-auto">
                <HeadingSatu 
                mdMb = "mb-3"
                pt = "pt-28"
                htext="Perjalanan Karya Digital"
                />
            </div>

            <p className="flex justify-center text-center px-12">Proyek-proyek ini menjadi bukti nyata perjalanan saya dalam belajar dan menciptakan, dimulai dari elemen sederhana hingga aplikasi web yang terstruktur dan terintegrasi</p>
        </div>
    );
}