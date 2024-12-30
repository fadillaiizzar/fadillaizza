import HeadingSatu from "../Text/HeadingSatu";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function TextSertif() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return(
        <div data-aos="zoom-in-up">
            <HeadingSatu 
            htext="Sertifikat Pelatihan"
            mdMb = "mb-3"
            />

            <p className="flex justify-center text-center mb-14">Sertifikat pelatihan menunjukkan bahwa saya telah mengikuti pelatihan yang memperluas wawasan saya tentang frontend web development, serta memberikan pengetahuan teknis dan soft skills yang penting untuk pengembangan aplikasi web</p>
        </div>
    );
}