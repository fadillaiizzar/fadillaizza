export default function FindProfile() {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="mb-4">
                <h3>hubungi saya melalui :</h3>
            </div>

            <div className="flex">
                <ImgFind 
                imgFind="/whatssapp.png"
                link="https://wa.me/6285713685277?text=Hallo Dilla!"
                />

                <ImgFind 
                imgFind="/instagram.png"
                link="https://www.instagram.com/fadillaiizzar/"
                />

                <ImgFind 
                imgFind="/github.png"
                link="https://github.com/fadillaiizzar"
                />

                <ImgFind 
                imgFind="/linkedin.png"
                link="https://www.linkedin.com/in/fadilla-izza-rahmadani-6b3b3331a/"
                />
            </div>
        </div>
    );
}

function ImgFind({imgFind , link}) {
    return(
        <>
            <a href={link}>
                <img src={imgFind} className="w-16 h-16" />
            </a>
        </>
    );
}