export default function BtnNav(props) {
    const { href , padx = "px-4" , radius , backg ="bg-black" , onClick , textnav } = props;

    return(
        <a href={href} className={`${padx} ${radius} ${backg} opacity-80 flex justify-center py-4 max-w-min shadow-2xl`} onClick={onClick}>
            <p className="text-white hover:text-orange-200 text-md">{textnav}</p>
        </a>
    );
}