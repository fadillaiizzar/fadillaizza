export default function FindProfile() {
    return(
        <div className="flex flex-col justify-center items-center">
            <div className="mb-4">
                <h3>hubungi saya melalui :</h3>
            </div>

            <div className="flex gap-8">
                <ImgFind 
                imgFind="/vite.svg"
                />

                <ImgFind 
                imgFind="/vite.svg"
                />

                <ImgFind 
                imgFind="/vite.svg"
                />
            </div>
        </div>
    );
}

function ImgFind({imgFind}) {
    return(
        <>
            <a href="#beranda">
                <img src={imgFind} />
            </a>
        </>
    );
}