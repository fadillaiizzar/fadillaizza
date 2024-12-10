export default function ImgFind({imgFind , link , alt , arialabel}) {
    return(
        <a href={link}  aria-label={`${arialabel}`}>
            <img src={imgFind} className="w-12 h-12" alt={`${alt}`}/>
        </a>
    );
}