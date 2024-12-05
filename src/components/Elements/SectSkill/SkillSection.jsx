import BoxSkill from "./BoxSkill";
import TextSkill from "./TextSkill";

export default function SkillSection() {
    return(
        <div id="skill" className="pt-16">
            <TextSkill />
            <BoxSkill />
        </div>
    );
}