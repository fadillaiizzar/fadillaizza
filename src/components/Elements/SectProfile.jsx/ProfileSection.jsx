import ImgProfile from "./ImgProfile";
import TextProfile from "./TextProfile";

export default function ProfileSection() {
    return(
        <div 
        id="profile"
        className="lg:flex justify-center items-center mt-40 pt-32 lg:pt-0">
            <ImgProfile 
            imgSrc="/logo.jpeg"
            />
            <TextProfile />
        </div>
    );
}