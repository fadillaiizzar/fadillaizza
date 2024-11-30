import ImgProfile from "./ImgProfile";
import TextProfile from "./TextProfile";

export default function ProfileSection() {
    return(
        <div 
        id="profile"
        className="lg:flex justify-center items-center mt-44 pt-14 md:pt-0">
            <ImgProfile 
            imgSrc="/logo.jpeg"
            />
            <TextProfile />
        </div>
    );
}