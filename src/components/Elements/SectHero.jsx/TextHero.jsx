import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function TextHero() {
    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out", 
        once: true, 
        });
    }, []);

    return(
        <div data-aos="zoom-in-up">
            <h1 className="text-lg sm:text-xl">Hi, Disini Dengan </h1>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-8">Fadilla Izza Rahmadani</h2>
            <p className="text-base sm:text-lg font-semibold">Pelajar SMK Negeri 2 Yogyakarta</p>
        </div>
    );
}