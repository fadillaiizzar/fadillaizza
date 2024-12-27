import DetailSertif from "./DetailSertif";

export default function BoxSertif() {
    return(
        <>
            <DetailSertif 
            imgSertif="/revou.jpeg"
            text="REVOU - JULI 2024"
            textpenjelas="Selama 2 minggu pelatihan di RevoU Fundamental Course, saya mempelajari frontend web development seperti HTML, CSS, JavaScript dan mengerjakan tes serta mini proyek untuk membuat halaman web responsif. Pelatihan ini memperdalam keterampilan praktis saya"
            />

            <DetailSertif 
            imgSertif="/dibimbing.jpeg"
            text="DIBIMBING - JULI 2024"
            textpenjelas="Dalam pelatihan Dibimbing DSF29 - Frontend Developer, saya mendapatkan materi tentang bagaimana menjadi seorang frontend web developer serta cara-cara efektif untuk mengembangkan aplikasi web. Pelatihan ini memberikan pemahaman yang lebih luas mengenai industri pengembangan web"
            />
            
            <DetailSertif 
            imgSertif="/harisenin.jpeg"
            text="HARISENIN - NOVEMBER 2024"
            textpenjelas="Selama mengikuti Harisenin Bookil Bootcamp Kilat sebagai Frontend Developer, saya memperdalam pengetahuan tentang konsep-konsep penting dalam pengembangan web yang memperluas wawasan saya tentang cara kerja dan best practices dalam membangun aplikasi web"
            />
        </>
    );
}