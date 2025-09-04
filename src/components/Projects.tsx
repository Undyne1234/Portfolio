import { ExternalLink } from "lucide-react";
import { ACHIEVEMENTS, PROJECTS } from "../data";
import { Section } from "./Section";
import { Badge } from "./Badge";

export const About = () => (
  <Section id="about" title="About me">
    <div className="grid-3">
      {ACHIEVEMENTS.map((a, i) => (
        <div key={i} className="card soft">
          <div >
            <div className="badge">
              <a.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold">{a.title}</h3>
          </div>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{a.desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

export const Projects = () => (
  <Section id="projects" title="Projects & case studies">
    <div className="grid-2">
      {PROJECTS.map((p) => (
        <article key={p.name} className="card soft">
          <h3 >{p.name}</h3>
          <p className="small">{p.blurb}</p>
          <div >
            {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
          </div>
          <div >
            {p.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="underline small">
                {l.label} <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  </Section>
);
