import BoxProject from "./BoxProject";
import TextProject from "./TextProject";

export default function ProjectSection() {
    return(
        <div id="proyek" className="px-20 pt-9">
            <TextProject />
            <BoxProject />
        </div>
    );
}