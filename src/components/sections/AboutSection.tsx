import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Heart, Zap, Target } from "lucide-react";
import { useContent } from "@/content/ContentContext";

export default function AboutSection() {
  const { content, locale } = useContent();
  const values = content.about.values.map((v) => ({
    icon:
      v.icon === "code"
        ? Code
        : v.icon === "heart"
        ? Heart
        : v.icon === "zap"
        ? Zap
        : Target,
    title: v.title,
    description: v.description,
  }));
  const technologies = content.about.technologies;

  return (
    <section id="about" className="py-20 relative mt-8 md:mt-12">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-1 md:pb-2 gradient-text">
            {content.about.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.about.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch items-start mb-20">
          {/* Avatar and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <Card className="glass p-8 cyber-glow h-full flex flex-col">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">
                      {content.about.avatarInitials}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  {content.about.name}
                </h3>
                <p className="text-center text-cyber-blue font-mono mb-6">
                  {content.about.role}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {content.about.bio1}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {content.about.bio2}
              </p>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 h-full"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass p-6 hover:cyber-glow transition-all duration-300 cursor-pointer">
                  <div
                    className={`flex items-start space-x-4 ${
                      locale === "ar" ? "space-x-reverse" : ""
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 pb-1 md:pb-2 gradient-text">
            Technologies I Love
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium cyber-border hover:cyber-glow transition-all duration-300"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
