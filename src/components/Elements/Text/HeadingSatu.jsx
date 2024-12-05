export default function HeadingSatu(props) {
    const { pt , htext , mb = "mb-10" , mdMb = "md:mb-5" } = props;

    return(
        <h1 className={`text-2xl font-semibold ${mb} ${mdMb} ${pt}`}>{htext}</h1>
    );
}