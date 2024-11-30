export default function BgEducation() {
    return(
        <>
            <div className="bg-education bg-cover bg-center h-96 cust:h-72 relative flex items-start justify-center">
                <h1 className="pt-14 text-2xl mb-10 md:mb-5 font-semibold">Pendidikan</h1>
                <div className="cust:flex gap-6 rounded-xl px-4 sm:px-8 cust:px-10 py-8 cust:py-10 absolute top-32 cust:top-36 p-5 bg-slate-600">
                    <BoxEducation 
                    imgBoxEdu="/vite.svg"
                    textEdu="SMP Negeri 2 Bantul"
                    textLulus="2019 - 2022"
                    mb="mb-7"
                    />

                    <BoxEducation 
                    imgBoxEdu="/vite.svg"
                    textEdu="SMK Negeri 2 Yogyakarta"
                    textLulus="2022 - 2026"
                    mb="mb-0"
                    />
                </div>
            </div>

            <div className="h-72 cust:h-52 ">
                
            </div>
        </>
    );
}

function BoxEducation({imgBoxEdu , textEdu , textLulus , mb}) {

    return(
        <div className={`bg-gray-400 py-8 w-72 sm:w-96 flex flex-col justify-center items-center rounded-lg ${mb} cust:mb-0`}>
            <img src={imgBoxEdu} className="w-20 h-20 mb-7"/>
            <h3 className="mb-2 text-center">{textEdu}</h3>
            <p>{textLulus}</p>
        </div>
    );
}