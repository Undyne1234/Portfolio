import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../data";
import { Section } from "./Section";
import { Badge } from "./Badge";

export const About = () => (
   <Section id="about" title="About me">
    <div className="card soft">
      <p>
        Heyo, I'm <strong>Wesley</strong> who's both tech-geeky
        and creative at heart. I love diving into new technologies, tinkering with code,
        and turning ideas into working projects that actually make an impact.
      </p>

      <p className="mt-3">
        When I'm not coding, you'll usually find me gaming or spending time outdoors to recharge. I enjoy balancing
        high-tech problem solving with a playful and social side.
      </p>

      <p className="mt-3">
        I chose ICT because it combines everything I care about: creativity, logic,
        and problem-solving. I've always been curious about how systems work behind
        the scenes, and ICT gives me the chance to build tools that are both useful
        and sustainable. For me, it's not just about writing code, but about shaping
        technology that makes life better for people, and maybe even the planet.
      </p>
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
