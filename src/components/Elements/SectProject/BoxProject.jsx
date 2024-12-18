import DetailProject from "./DetailProject";

export default function BoxProject() {
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 cust2:grid-cols-3 gap-3">
                <DetailProject 
                text="jkaf"
                penjelasan="ksbca"
                imgProject="/back.png"
                tools1="mbs"
                tools2="mbs"
                tools3="mbs"
                />
                <DetailProject 
                text="jkaf"
                penjelasan="ksbca"
                imgProject="/back.png"
                tools1="mbs"
                tools2="mbs"
                tools3="mbs"
                />
                <DetailProject 
                text="jkaf"
                penjelasan="ksbca"
                imgProject="/back.png"
                tools1="mbs"
                tools2="mbs"
                tools3="mbs"
                />
            </div>
        </>
    );
}