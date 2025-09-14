import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Zap,
  Brain,
} from "lucide-react";
import { content } from "@/content";

export default function SkillsSection() {
  const skillCategories = content.skills.categories.map((c) => ({
    icon:
      c.icon === "code2"
        ? Code2
        : c.icon === "database"
        ? Database
        : c.icon === "cloud"
        ? Cloud
        : Palette,
    title: c.title,
    color: c.color,
    skills: c.skills,
  }));

  const tools = content.skills.tools.map((t) => ({
    icon:
      t.icon === "globe"
        ? Globe
        : t.icon === "smartphone"
        ? Smartphone
        : t.icon === "zap"
        ? Zap
        : Brain,
    name: t.name,
    description: t.description,
  }));

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            {content.skills.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.skills.subheading}
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-8 hover:cyber-glow transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-${category.color} to-${category.color} flex items-center justify-center mr-4`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-muted" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-6 gradient-text">
            {content.skills.toolsHeading}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-6 text-center hover:cyber-glow transition-all duration-300 cursor-pointer h-full">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
                  <tool.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-3">{tool.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
