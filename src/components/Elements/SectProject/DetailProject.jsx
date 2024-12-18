export default function DetailProject(props) {
    const { text , penjelasan , imgProject , tools1 , tools2 , tools3 } = props;

    return(
        <div className="bg-red-400 p-4 rounded-lg">
            <div className="font-semibold mb-1">
                {text}
            </div>

            <p className="mb-4">{penjelasan}</p>

            <div className="w-full h-52 mb-3 rounded-lg">
                <img src={imgProject} alt="imgproyek" className="w-full h-full rounded-lg"/>
            </div>

            <div className="flex text-center w-full">
                <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="bg-gray-400 p-1 rounded-lg">{tools1}</div>
                    <div className="bg-gray-400 p-1 rounded-lg">{tools2}</div>
                    <div className="bg-gray-400 p-1 rounded-lg">{tools3}</div>
                </div>
            </div>

            <button className="w-full bg-blue-300 mt-5 p-1 rounded-lg">haloo</button>
        </div>
    );
}