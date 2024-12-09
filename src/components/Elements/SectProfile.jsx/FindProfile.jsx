export default function FindProfile() {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="mb-4">
                <p>hubungi saya melalui :</p>
            </div>

            <div className="flex">
                <ImgFind 
                imgFind="/whatssapp.png"
                link="https://wa.me/6285713685277?text=Hallo Dilla!"
                alt="ikon whatsapp"
                arialabel="Lihat Profil Whatsapp Fadilla Izza"
                />

                <ImgFind 
                imgFind="/instagram.png"
                link="https://www.instagram.com/fadillaiizzar/"
                alt="ikon instagram"
                arialabel="Lihat Profil Instagram Fadilla Izza"
                />

                <ImgFind 
                imgFind="/github.png"
                link="https://github.com/fadillaiizzar"
                alt="ikon github"
                arialabel="Lihat Profil Github Fadilla Izza"
                />

                <ImgFind 
                imgFind="/linkedin.png"
                link="https://www.linkedin.com/in/fadilla-izza-rahmadani-6b3b3331a/"
                alt="ikon linkedin"
                arialabel="Lihat Profil Linkedin Fadilla Izza"
                />
            </div>
        </div>
    );
}

function ImgFind({imgFind , link , alt , arialabel}) {
    return(
        <a href={link}  aria-label={`${arialabel}`}>
            <img src={imgFind} className="w-16 h-16" alt={`${alt}`}/>
        </a>
    );
}