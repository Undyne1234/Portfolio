import { Github, Linkedin, Mail } from "lucide-react";
import { LINKS, PROFILE } from "../data";
import { Section } from "./Section";

export const Contact = () => (
  <Section id="contact" title="Contact">
    <div className="card soft">
      <p className="small">
        Sniffing around for a collaborator or hiring for a role? Howl at me via email or LinkedIn.
      </p>
      <div >
        <a href={`mailto:${PROFILE.email}`} className="btn btn-primary">
          <Mail className="w-4 h-4" /> Email me
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="btn">
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>
        <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn">
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
    </div>
  </Section>
);
