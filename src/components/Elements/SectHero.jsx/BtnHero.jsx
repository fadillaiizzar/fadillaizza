export default function BtnHero(props) {
    const { backg = "bg-black" , textcolor = "text-white" , text} = props

    return(
        <div className={`${backg} ${textcolor} hover:text-orange-200 opacity-70 hover:opacity-100 px-7 py-2 rounded-3xl mt-16`}>
            <button>{text}</button>
        </div>
    );
}