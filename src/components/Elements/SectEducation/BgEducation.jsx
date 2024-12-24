import HeadingSatu from "../Text/HeadingSatu";

export default function BgEducation() {
    return(
        <>
            <div className="bg-education bg-cover bg-center h-[820px] cust:h-[560px] relative flex items-start text-center justify-center">
                <HeadingSatu 
                pt = "pt-14"
                htext = "Perjalanan Dalam Pendidikan"
                px = "px-5"
                pb = "sm:pb-10"
                />
                
                <div className="cust:flex gap-6 rounded-xl p-4 cust:p-6 absolute top-32 cust:top-36 bg-slate-600 mt-10 sm:mt-0">
                    <BoxEducation 
                    imgBoxEdu="/smp 2 bantul.png"
                    textEdu="SMP Negeri 2 Bantul"
                    textLulus="2019 - 2022"
                    mb="mb-7"
                    width="w-28"
                    height="h-28"
                    alt="logo smp 2 bantul"
                    />

                    <BoxEducation 
                    imgBoxEdu="/smk 2 yogyakarta.png"
                    textEdu="SMK Negeri 2 Yogyakarta"
                    textLulus="2022 - Sekarang"
                    mb="mb-0"
                    width="w-32"
                    height="h-32"
                    alt="logo smk 2 yogyakarta"
                    />
                </div>
            </div>
        </>
    );
}

function BoxEducation({imgBoxEdu , textEdu , textLulus , mb , width , height , alt}) {
    return(
        <div className={`bg-gray-400 py-8 w-72 sm:w-96 flex flex-col justify-center items-center rounded-lg ${mb} cust:mb-0`}>
            <img src={imgBoxEdu} className= {`${width} ${height} mb-7 object-cover`} alt= {`${alt}`} />
            <p className="mb-2 text-center font-semibold">{textEdu}</p>
            <p>{textLulus}</p>
        </div>
    );
}