import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Heart, Zap, Target } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and elegant code is my passion.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Every project starts with understanding the user\'s needs and goals.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing creative boundaries.'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Breaking down complex challenges into simple, effective solutions.'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Three.js', 'Next.js', 'Node.js', 'Python',
    'TailwindCSS', 'Framer Motion', 'GraphQL', 'AWS', 'Docker', 'MongoDB'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer who loves creating digital experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Avatar and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 cyber-glow">
              <div className="mb-6">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">AC</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Alex Chen</h3>
                <p className="text-center text-cyber-blue font-mono mb-6">
                  Full Stack Developer & Creative Technologist
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                immersive digital experiences that push the boundaries of what's possible on the web. 
                I'm passionate about clean code, innovative design, and technologies that make a real impact.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
                or experimenting with creative coding projects that blend art and technology.
              </p>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
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
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
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
          <h3 className="text-2xl font-bold mb-8 gradient-text">
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