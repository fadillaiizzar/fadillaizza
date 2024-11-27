import FindProfile from "./FindProfile";
import ImgProfile from "./ImgProfile";
import TextProfile from "./TextProfile";

export default function ProfileSection() {
    return(
        <>
            <div className="md:flex justify-center items-center mt-40 pb-40">
                <ImgProfile 
                imgSrc="/logo.jpeg"
                />
                <TextProfile />
            </div>
            <FindProfile />
        </>
    );
}