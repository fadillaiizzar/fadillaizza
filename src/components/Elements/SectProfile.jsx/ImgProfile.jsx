export default function ImgProfile(props) {
    const { imgSrc } = props

    return(
        <div className="flex items-center pb-8 rounded-lg bg-blue-300">
            <img src={imgSrc} className="rounded-lg w-96 h-96"/>
        </div>
    );
}