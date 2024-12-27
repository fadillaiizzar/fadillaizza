import DetailProject from "./DetailProject";

export default function BoxProject() {
    return(
        <div className="px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                <DetailProject 
                text="Socialse"
                penjelasan="Membahas strategi dan tips terkini untuk mengelola media sosial secara efektif"
                imgProject="/socialse.png"
                tools1="HTML"
                tools2="TAILWIND"
                tools3="JS"
                link="https://socialse.vercel.app/"
                />

                <DetailProject 
                text="Luxury Room"
                penjelasan="Mempermudah Anda menyewa apartemen dengan layanan terbaik"
                imgProject="/luxuryroom.png"
                tools1="REACT"
                tools2="TAILWIND"
                bg=""
                link="https://luxuryroom.vercel.app/"
                />
                
                <DetailProject 
                text="Berlian Tiga"
                penjelasan="Membuat dan mencetak nota pembelian pelanggan pada bengkel mobil"
                imgProject="/nota berlian tiga.png"
                tools1="REACT"
                tools2="TAILWIND"
                bg=""
                link="https://berliantiga.vercel.app/"
                />
            </div>
        </div>
    );
}