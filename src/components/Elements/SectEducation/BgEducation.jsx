import HeadingSatu from "../Text/HeadingSatu";

export default function BgEducation() {
    return(
        <>
            <div className="bg-education bg-cover bg-center h-[800px] cust:h-72 relative flex items-start justify-center">
                <HeadingSatu 
                pt = "pt-14"
                htext = "Pendidikan"
                />
                <div className="cust:flex gap-6 rounded-xl p-4 cust:p-6 absolute top-32 cust:top-36 bg-slate-600">
                    <BoxEducation 
                    imgBoxEdu="/smp 2 bantul.png"
                    textEdu="SMP Negeri 2 Bantul"
                    textLulus="2019 - 2022"
                    mb="mb-7"
                    width="w-28"
                    height="h-28"
                    />

                    <BoxEducation 
                    imgBoxEdu="/smk 2 yogyakarta.png"
                    textEdu="SMK Negeri 2 Yogyakarta"
                    textLulus="2022 - Sekarang"
                    mb="mb-0"
                    width="w-32"
                    height="h-32"
                    />
                </div>
            </div>

            <div className="h-0 cust:h-52"></div>
        </>
    );
}

function BoxEducation({imgBoxEdu , textEdu , textLulus , mb , width , height}) {
    return(
        <div className={`bg-gray-400 py-8 w-72 sm:w-96 flex flex-col justify-center items-center rounded-lg ${mb} cust:mb-0`}>
            <img src={imgBoxEdu} className= {`${width} ${height} mb-7`} />
            <h3 className="mb-2 text-center">{textEdu}</h3>
            <p>{textLulus}</p>
        </div>
    );
}