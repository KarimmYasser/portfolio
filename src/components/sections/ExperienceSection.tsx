import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";
import { useContent } from "@/content/ContentContext";

export default function ExperienceSection() {
  const { content, locale } = useContent();
  const experiences = content.experience.timeline;
  const education = content.experience.education;

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-1 md:pb-2 gradient-text">
            {content.experience.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.experience.subheading}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue to-cyber-purple transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full transform md:-translate-x-1/2 z-10"></div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <Card className="glass p-6 hover:cyber-glow transition-all duration-300">
                  <div className="mb-4">
                    <div
                      className={`flex items-center space-x-2 mb-2 ${
                        locale === "ar" ? "space-x-reverse" : ""
                      }`}
                    >
                      <Badge variant="outline" className="cyber-border text-xs">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground space-x-1 rtl:space-x-reverse">
                        <CalendarDays className="h-3 w-3 mx-1" />
                        {exp.period}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex items-center text-cyber-blue font-medium mb-2 space-x-2 rtl:space-x-reverse">
                      <Building className="h-4 w-4 mx-1" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-1 rtl:space-x-reverse">
                      <MapPin className="h-3 w-3 mx-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-sm text-muted-foreground flex items-start space-x-3${
                            locale === "ar"
                              ? "flex-row-reverse space-x-reverse"
                              : ""
                          }`}
                        >
                          <span className="inline-block w-1 h-1 bg-cyber-blue rounded-full mt-2 mx-2 px-1 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 gradient-text">
            {content.experience.educationHeading}
          </h3>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-8 cyber-glow">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">{edu.degree}</h4>
                  <div className="text-cyber-blue font-semibold text-lg mb-2">
                    {edu.institution}
                  </div>
                  <div
                    className={`flex items-center justify-center space-x-4 text-sm text-muted-foreground ${
                      locale === "ar" ? "space-x-reverse" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <CalendarDays className="h-3 w-3 mx-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <MapPin className="h-3 w-3 mx-1" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <p className="text-center text-muted-foreground mb-6 leading-relaxed">
                  {edu.description}
                </p>

                <div className="text-center">
                  <h5 className="font-semibold mb-3">Notable Projects:</h5>
                  <div className="flex flex-wrap justify-center gap-2">
                    {edu.projects.map((project) => (
                      <Badge
                        key={project}
                        variant="outline"
                        className="cyber-border"
                      >
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
