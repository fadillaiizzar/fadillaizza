import BtnHero from "./BtnHero";
import TitleHero from "./TextHero";

export default function HeroSection() {
    return(
        <div className="flex flex-col mt-28 py-5 items-center">
            <TitleHero />
            <BtnHero
            text="Selengkapnya"
            />
        </div>
    );
}