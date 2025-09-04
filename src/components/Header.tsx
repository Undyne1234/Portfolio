import { Code2, Download, Moon, Sun } from "lucide-react";
import { PROFILE } from "../data";
import { useDarkMode } from "../hooks/useDarkMode";

export const Header = () => {
  const { enabled, setEnabled } = useDarkMode();
  return (
    <header className="site-header">
      <div className="container bar">
        <a href="#home" className="brand">
          <Code2 className="w-5 h-5" /> Undyne.dev
        </a>
        <nav className="nav">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#cv" className="hover:underline">CV</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            className="btn"
            onClick={() => setEnabled(!enabled)}
          >
            {enabled ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a
            href={PROFILE.cvUrl}
            className="btn"
            target="_blank" rel="noreferrer"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
    </header>
  );
};
