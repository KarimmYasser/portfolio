import CommandData from "./data/commands.json";
import type { Content } from "@/content/en.ts";

const arrow = ">";

export const checkCommand = (command: string) => {
  const commands = Object.keys(CommandData);
  return commands.includes(command.trim().toLowerCase());
};

export type TerminalEnv = {
  setTheme: (mode: "light" | "dark" | "toggle") => void;
  setLocale: (locale: "en" | "es" | "ar") => void;
  goto: (hash: string) => void;
  openProject: (id: string) => void;
  setBackground: (on: boolean) => void;
  setLowPower: (on: boolean) => void;
};

export const handleCommand = (
  command: string,
  content: Content,
  env?: TerminalEnv
) => {
  const cmd = command.trim().toLowerCase();
  const [primary, arg] = cmd.split(/\s+/, 2);
  switch (primary) {
    case "help":
    case "ls":
      return (
        <div className="flex gap-2 flex-col ">
          {Object.entries(CommandData).map(([k, v]) => (
            <span key={k} className="text-white flex gap-2">
              <p>-{arrow}</p>
              <p className="text-cyber-green">{k}</p>
              <p className="text-slate-400">{v as string}</p>
            </span>
          ))}
        </div>
      );
    // Power commands with side effects
    case "theme": {
      if (!env) break;
      const mode = (arg as "dark" | "light" | "toggle") || "toggle";
      env.setTheme(mode);
      return <div className="text-cyber-green">Theme set to {mode}.</div>;
    }
    case "lang": {
      if (!env) break;
      const lang = (arg as "en" | "es" | "ar") || "en";
      env.setLocale(lang);
      return (
        <div className="text-cyber-green">
          Language set to {lang.toUpperCase()}.
        </div>
      );
    }
    case "goto": {
      if (!env) break;
      const target = arg || "home";
      env.goto(`#${target}`);
      return <div className="text-cyber-green">Jumped to {target}.</div>;
    }
    case "open": {
      if (!env || !arg) break;
      env.openProject(arg);
      return <div className="text-cyber-green">Opening project: {arg}</div>;
    }
    case "bg": {
      if (!env) break;
      const on = arg === "on" ? true : arg === "off" ? false : undefined;
      if (on === undefined) break;
      env.setBackground(on);
      return (
        <div className="text-cyber-green">
          Background {on ? "enabled" : "disabled"}.
        </div>
      );
    }
    case "power": {
      if (!env) break;
      const on = arg === "on" ? true : arg === "off" ? false : undefined;
      if (on === undefined) break;
      env.setLowPower(on);
      return (
        <div className="text-cyber-green">
          Low power mode {on ? "ON" : "OFF"}.
        </div>
      );
    }
    case "ask": {
      if (!arg) return <div className="text-red-400">Please provide a query. Usage: ask &lt;topic&gt;</div>;
      const query = arg.toLowerCase();
      
      // Search projects
      const matchingProjects = content.projects.items.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      );
      
      // Search experience
      const matchingExp = content.experience.timeline.filter(j => 
        j.position.toLowerCase().includes(query) || 
        j.company.toLowerCase().includes(query) ||
        j.description.toLowerCase().includes(query)
      );
      
      // Search skills
      const matchingSkills = content.skills.categories.flatMap(c => c.skills).filter(s => 
        s.name.toLowerCase().includes(query)
      );

      if (matchingProjects.length === 0 && matchingExp.length === 0 && matchingSkills.length === 0) {
        return <div className="text-slate-400">No information found for "{arg}". Try searching for skills or project names!</div>;
      }

      return (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-cyber-green">AI Search Results for "{arg}":</h2>
          
          {matchingSkills.length > 0 && (
            <div>
              <div className="font-semibold text-cyber-blue">Skills:</div>
              <div className="flex flex-wrap gap-2 mt-1">
                {matchingSkills.map((s, i) => (
                  <span key={i} className="px-2 py-1 rounded border border-border text-cyber-green">{s.name}</span>
                ))}
              </div>
            </div>
          )}

          {matchingProjects.length > 0 && (
            <div>
              <div className="font-semibold text-cyber-blue">Projects:</div>
              <ul className="list-disc list-inside mt-1">
                {matchingProjects.map((p, i) => (
                  <li key={i} className="text-slate-300">
                    <span className="font-medium text-white">{p.title}</span>: {p.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {matchingExp.length > 0 && (
            <div>
              <div className="font-semibold text-cyber-blue">Experience:</div>
              <ul className="list-disc list-inside mt-1">
                {matchingExp.map((j, i) => (
                  <li key={i} className="text-slate-300">
                    <span className="font-medium text-white">{j.position} @ {j.company}</span>: {j.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }
    case "about":
      return (
        <div className="flex flex-col gap-2 text-slate-300 ">
          <h2 className="text-2xl font-bold mb-2">{content.about.heading}</h2>
          <p className="text-slate-400">{content.about.subheading}</p>
          <p>{content.about.bio1}</p>
          <p>{content.about.bio2}</p>
        </div>
      );
    case "projects":
      return (
        <ul className="flex flex-col gap-2 mt-4">
          <h2 className="text-xl font-bold mb-2">{content.projects.heading}</h2>
          {content.projects.items.map((project) => (
            <li
              className="p-4 rounded-lg border border-border"
              key={project.id}
            >
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="mb-2 text-slate-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 rtl:space-x-reverse">
                {project.tags.map((tech, i) => (
                  <span
                    key={tech + i}
                    className="px-2 py-1 rounded text-cyber-blue border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      );
    case "skills":
      return (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">{content.skills.heading}</h2>
          {content.skills.categories.map((cat, i) => (
            <div
              key={cat.title + i}
              className="border border-border rounded p-3"
            >
              <div className="font-semibold mb-2">{cat.title}</div>
              <div className="flex flex-wrap gap-2 rtl:space-x-reverse">
                {cat.skills.map((s, j) => (
                  <span
                    key={s.name + j}
                    className="px-2 py-1 rounded text-cyber-green border border-border"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    case "education":
      return (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">
            {content.experience.educationHeading}
          </h2>
          {content.experience.education.map((ed, i) => (
            <div
              key={ed.institution + i}
              className="border border-border rounded p-3"
            >
              <div className="font-semibold">{ed.institution}</div>
              <div className="text-slate-400">
                {ed.degree} • {ed.period} • {ed.location}
              </div>
              <p className="mt-2">{ed.description}</p>
            </div>
          ))}
        </div>
      );
    case "experience":
      return (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">{content.experience.heading}</h2>
          {content.experience.timeline.map((job) => (
            <div key={job.id} className="border border-border rounded p-3">
              <div className="font-semibold">
                {job.position} @ {job.company}
              </div>
              <div className="text-slate-400">
                {job.period} • {job.location} • {job.type}
              </div>
              <p className="mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      );
    case "contact":
      return (
        <div className="flex flex-col gap-2 text-slate-300">
          <h2 className="text-xl font-bold">{content.contact.heading}</h2>
          <div className="text-cyber-green">Email: {content.meta.email}</div>
          <div className="text-cyber-green">Phone: {content.meta.phone}</div>
          <div className="text-cyber-blue">
            Location: {content.meta.location}
          </div>
        </div>
      );
    default:
      return (
        <li className="flex flex-col gap-2 my-2">
          <p className="text-red-400">
            The term '{cmd}' is not recognized. Type "help" or "cls".
          </p>
        </li>
      );
  }
};
