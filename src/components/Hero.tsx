import { Github, Linkedin, Mail, MapPin, Phone, Download, Gamepad2 } from "lucide-react";
import { LINKS, PROFILE } from "../data";

export const Hero = () => (
  <section id="home" className="container hero">
    <div className="grid-2">
      <div >
        <h1 className="hero-title">
          Heyo, I’m {PROFILE.name}
        </h1>
        <p className="hero-sub">
          {PROFILE.title}
        </p>
        <p className="hero-blurb">
          {PROFILE.blurb} — let’s build something pawsitively awesome.
        </p>
        <div >
          <a
            href={PROFILE.cvUrl}
            target="_blank" rel="noreferrer"
            className="btn btn-primary"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
          <a
            href={LINKS.github}
            className="btn"
            target="_blank" rel="noreferrer"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href={LINKS.linkedin}
            className="btn"
            target="_blank" rel="noreferrer"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
        <div className="small">
          <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {PROFILE.location}</span>
          <span className="inline-flex items-center gap-1"><Phone className="w-4 h-4" /> {PROFILE.phone}</span>
          <a href={`mailto:${PROFILE.email}`} ><Mail className="w-4 h-4" /> {PROFILE.email}</a>
        </div>
      </div>

      <div >
        <div className="card">
          <div  />
          <div className="">
            <Gamepad2 className="" />
          </div>
        </div>
        <p className="small"><img src="/Profile_icon.png" alt="Profile picture"/></p>
      </div>
    </div>
  </section>
);
