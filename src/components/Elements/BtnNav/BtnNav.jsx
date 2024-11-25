export default function BtnNav(props) {
    const { textnav, radius, padx = "px-4" } = props;

    return(
        <div className={`${padx} ${radius} bg-black flex justify-center py-4 max-w-min`}>
            <p className="text-white hover:text-orange-200 text-md">{textnav}</p>
        </div>
    );
}