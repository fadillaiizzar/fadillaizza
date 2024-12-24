export default function HeadingSatu(props) {
    const { pt , htext , mb = "mb-10" , mdMb = "md:mb-5" , px , pb} = props;

    return(
        <h1 className={`text-2xl font-semibold text-center ${mb} ${mdMb} ${pt} ${px} ${pb}`}>{htext}</h1>
    );
}