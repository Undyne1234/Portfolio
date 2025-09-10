import { Code2 } from "lucide-react";

export const Header = () => {
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
      </div>
    </header>
  );
};
