import ImgProfile from "./ImgProfile";
import TextProfile from "./TextProfile";

export default function ProfileSection() {
    return(
        <div 
        id="profile"
        className="lg:flex justify-center items-center pt-40">
            <ImgProfile 
            imgSrc="/logo.jpeg"
            />
            <TextProfile />
        </div>
    );
}