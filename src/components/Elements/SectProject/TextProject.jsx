import HeadingSatu from "../Text/HeadingSatu";

export default function TextProject() {
    return(
        <div className="mb-6">
            <div className="flex justify-center text-center">
                <HeadingSatu 
                mdMb = "mb-3"
                pt = "pt-24"
                htext="Perjalanan Karya Digital"
                />
            </div>

            <p className="flex justify-center text-center">Proyek-proyek ini menjadi bukti perjalanan saya dalam belajar dan menciptakan, dimulai dari elemen sederhana hingga aplikasi web yang terstruktur dan terintegrasi</p>
        </div>
    );
}