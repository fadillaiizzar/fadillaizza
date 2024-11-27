export default function BtnNav(props) {
    const { textnav, radius, padx = "px-4" , onClick , backg ="bg-black" } = props;

    return(
        <div className={`${padx} ${radius} ${backg} flex justify-center py-4 max-w-min`} onClick={onClick}>
            <p className="text-white hover:text-orange-200 text-md">{textnav}</p>
        </div>
    );
}