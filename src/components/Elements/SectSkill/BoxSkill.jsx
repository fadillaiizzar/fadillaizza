import { useRef } from "react";
import DetailBox from "./DetailBox";

export default function BoxSkill() {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const boxDetails = [
        { id : 1 , text : "HTML" , imgDetail : "/html.png"},
        { id : 2 , text : "CSS" , imgDetail : "/css.png"},
        { id : 3 , text : "JAVA SCRIPT" , imgDetail : "/javascript.png"},
        { id : 4 , text : "REACT" , imgDetail : "/react.png"},
        { id : 5 , text : "TAILWIND" , imgDetail : "/tailwind.png"},
        { id : 6 , text : "GIT" , imgDetail : "/git.png"},
        { id : 7 , text : "VITE" , imgDetail : "/vite.svg"},
    ];

    return (
        <div className="relative flex justify-center items-center px-14">
            <button onClick={scrollLeft} className="absolute text-white left-3 sm:left-5 w-12 h-12 bg-gray-600 rounded-full hover:bg-gray-700 z-10">
                {"<"}
            </button>

            <div ref={scrollContainer} className="relative flex justify-start items-center overflow-hidden mx-4 sm:mx-8 w-full">
                <div className="flex justify-center items-center gap-5 py-4 min-w-max">
                    {boxDetails.map ((item) => (
                        <DetailBox key={item.id} text={item.text} imgDetail={item.imgDetail}/>
                    ))}
                </div>
            </div>

            <button onClick={scrollRight} className="absolute text-white right-3 sm:right-5 w-12 h-12 bg-gray-600 rounded-full hover:bg-gray-700 z-10">
                {">"}
            </button>
        </div>
    );
}
