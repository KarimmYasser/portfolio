import CommandData from "./data/commands.json";
import type { Content } from "@/content/en.ts";

const arrow = ">";

export const checkCommand = (command: string) => {
  const commands = Object.keys(CommandData);
  return commands.includes(command.trim().toLowerCase());
};

export const handleCommand = (command: string, content: Content) => {
  const cmd = command.trim().toLowerCase();
  switch (cmd) {
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
