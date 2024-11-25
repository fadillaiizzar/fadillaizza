import FindProfile from "./FindProfile";
import ImgProfile from "./ImgProfile";
import TextProfile from "./TextProfile";

export default function ProfileSection() {
    return(
        <>
            <div className="flex justify-center items-center bg-slate-500 mt-40">
                <ImgProfile 
                imgSrc="/logo.jpeg"
                />
                <TextProfile />
            </div>
            <FindProfile />
        </>
    );
}