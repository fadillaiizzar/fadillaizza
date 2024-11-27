export default function BtnHero(props) {
    const { backg = "bg-black" , textcolor = "text-white" , text, width} = props

    return(
        <div className={`${backg} ${textcolor} hover:text-orange-200 opacity-70 hover:opacity-100 px-7 py-2 rounded-3xl mt-16 ${width}`}>
            <button>{text}</button>
        </div>
    );
}