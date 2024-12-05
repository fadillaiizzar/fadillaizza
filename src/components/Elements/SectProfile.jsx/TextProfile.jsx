import HeadingSatu from "../Text/HeadingSatu";
import FindProfile from "./FindProfile";

export default function TextProfile() {
    return(
        <>
            <div className="flex flex-col text-center lg:w-2/3 py-10 px-14 lg:pl-0 lg:pr-24">
                <HeadingSatu 
                htext = "Sekilas Tentang Saya"
                />
                <p className="mb-8">Halo! Saya Fadilla Izza Rahmadani, seorang pelajar dari Bantul, Yogyakarta. Saat ini, saya sedang menjalani tahun ketiga di SMKN 2 Yogyakarta, jurusan Sistem Informasi dan Jaringan Aplikasi. Dalam tiga tahun terakhir, saya secara mendalam mengeksplorasi dunia teknologi informasi, dengan fokus utama pada pengembangan web</p>

                <FindProfile />
            </div>
        </>
    );
}