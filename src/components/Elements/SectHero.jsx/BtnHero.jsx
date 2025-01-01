import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";

export default function BtnHero(props) {
    const { backg = "bg-black" , textcolor = "text-white" , width , text } = props;

    useEffect(() => {
        AOS.init({
        duration: 1200, 
        easing: "ease-in-out",
        once: true,
        });
    }, []);

    return(
        <div data-aos="zoom-in" className={`${backg} ${textcolor} ${width} hover:text-orange-200 opacity-70 hover:opacity-100 px-7 py-2 rounded-3xl mt-16`}>
            <a href ="#profile">
                <button>{text}</button>
            </a>
        </div>
    );
}