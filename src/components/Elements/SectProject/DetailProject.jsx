export default function DetailProject(props) {
    const { text , penjelasan , imgProject , tools1 , tools2 , link } = props;

    return(
        <div className="bg-pink-100 p-4 rounded-lg shadow-2xl">
            <div className="font-semibold mb-1">{text}</div>

            <p className="mb-4">{penjelasan}</p>

            <div className="w-full h-auto mb-3 rounded-lg">
                <img src={imgProject} alt="imgproyek" className="w-full h-full rounded-lg"/>
            </div>

            <div className="flex text-center w-full">
                <div className={`grid grid-cols-2 gap-2 w-full text-sm`}>
                    <div className="bg-black text-pink-100 p-1 rounded-lg">{tools1}</div>
                    <div className="bg-black text-pink-100 p-1 rounded-lg">{tools2}</div>
                </div>
            </div>

            <button onClick={() => window.open(link, "_blank")} className="w-full text-sm bg-black text-pink-100 mt-3 p-1 rounded-lg">BROWSE</button>
        </div>
    );
}