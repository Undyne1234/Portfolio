import { SKILLS } from "../data";
import { Section } from "./Section";
import { Badge } from "./Badge";

export const Skills = () => {
  const groups = Object.entries(SKILLS);
  return (
    <Section id="skills" title="Skills">
      <div className="grid-2">
        {groups.map(([group, items]) => (
          <div key={group} className="card soft">
            <h3 className="font-semibold">{group}</h3>
            <div >
              {items.map((s) => <Badge key={s}>{s}</Badge>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
