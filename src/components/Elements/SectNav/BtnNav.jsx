export default function BtnNav(props) {
    const { textnav, radius, padx = "px-4" , onClick , backg ="bg-black" , href } = props;

    return(
        <a 
        href={href}
        className={`${padx} ${radius} ${backg} opacity-80 flex justify-center py-4 max-w-min shadow-xl`} 
        onClick={onClick}>
            <p className="text-white hover:text-orange-200 text-md">{textnav}</p>
        </a>
    );
}