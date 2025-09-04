import { CV as CVData, PROFILE } from "../data";
import { Section } from "./Section";
import { Download, ExternalLink, Mail, Phone, MapPin } from "lucide-react";

export const CV = () => (
  <Section id="cv" title="Curriculum Vitae">
    {/* Print styles for A4 export */}
    <style>{`
      @page { size: A4; margin: 14mm; }
      @media print {
        html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        header, nav, footer, .no-print { display: none !important; }
        #cv-sheet { box-shadow: none !important; border: none !important; }
      }
    `}</style>

    <div className="no-print">
      <button
        onClick={() => window.print()}
        className="btn btn-primary"
      >
        <Download className="w-4 h-4" /> Download as PDF (Print)
      </button>
      <a
        href={PROFILE.cvUrl}
        target="_blank" rel="noreferrer"
        className="btn"
      >
        <ExternalLink className="w-4 h-4" /> Fallback: Static PDF
      </a>
    </div>

    <div
      id="cv-sheet"
      className=""
    >
      <div >
        <div>
          <h3 >{PROFILE.name}</h3>
          <p className="small">{PROFILE.title}</p>
        </div>
        <div className="text-sm text-zinc-600 dark:text-zinc-400 flex flex-col md:items-end">
          <span ><Mail className="w-4 h-4" /> {PROFILE.email}</span>
          <span ><Phone className="w-4 h-4" /> {PROFILE.phone}</span>
          <span ><MapPin className="w-4 h-4" /> {PROFILE.location}</span>
        </div>
      </div>

      <div >
        <h4 >Profile</h4>
        <p className="small">{CVData.summary}</p>
      </div>

      <div >
        <h4 >Experience</h4>
        <div >
          {CVData.experience.map((e, idx) => (
            <div key={idx}>
              <div >
                <p className="font-medium">{e.role} — <span className="small">{e.org}</span></p>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{e.period}</span>
              </div>
              <ul >
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div >
        <h4 >Education</h4>
        <ul >
          {CVData.education.map((ed, i) => (
            <li key={i} >
              <span>{ed.degree} — <span className="small">{ed.school}</span></span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">{ed.period}</span>
            </li>
          ))}
        </ul>
      </div>

      <div >
        <h4 >Skills</h4>
        <ul >
          {CVData.skills.map((s, i) => <li key={i} className="list-disc ml-5">{s}</li>)}
        </ul>
      </div>

      <div >
        <h4 >Links</h4>
        <ul >
          {CVData.links.map((l, i) => (
            <li key={i}><span className="font-medium">{l.label}:</span> {l.value}</li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);
