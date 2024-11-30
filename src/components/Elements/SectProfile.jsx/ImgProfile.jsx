export default function ImgProfile(props) {
    const { imgSrc } = props

    return(
        <div className="flex lg:w-1/3 justify-center items-center rounded-lg">
            <img src={imgSrc} className="rounded-lg w-64 h-64"/>
        </div>
    );
}