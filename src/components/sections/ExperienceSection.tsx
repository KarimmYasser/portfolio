import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Innovation',
      position: 'Senior Frontend Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead frontend development for enterprise applications serving 100k+ users. Architected and implemented micro-frontend solutions, reducing page load times by 60%. Mentored junior developers and established best practices for React development.',
      achievements: [
        'Improved application performance by 60%',
        'Led team of 5 developers',
        'Implemented micro-frontend architecture',
        'Reduced technical debt by 40%'
      ],
      technologies: ['React', 'TypeScript', 'GraphQL', 'AWS', 'Micro-frontends']
    },
    {
      id: 2,
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Built and scaled web applications from MVP to serving thousands of users. Developed real-time features using WebSockets, implemented CI/CD pipelines, and collaborated closely with design and product teams.',
      achievements: [
        'Built MVP that acquired 10k users in 6 months',
        'Implemented real-time collaboration features',
        'Set up automated testing and deployment',
        'Reduced infrastructure costs by 30%'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'WebSockets']
    },
    {
      id: 3,
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      location: 'Los Angeles, CA',
      type: 'Contract',
      description: 'Developed custom websites and web applications for various clients. Specialized in creating interactive experiences using modern JavaScript frameworks and creative coding techniques.',
      achievements: [
        'Delivered 15+ client projects on time',
        'Increased client website conversions by 45%',
        'Developed award-winning interactive website',
        'Established client design system'
      ],
      technologies: ['React', 'Vue.js', 'Three.js', 'GSAP', 'Contentful']
    },
    {
      id: 4,
      company: 'CodeBootcamp',
      position: 'Junior Developer',
      period: '2018 - 2019',
      location: 'Remote',
      type: 'Full-time',
      description: 'Started my professional journey working on various web development projects. Gained experience in full-stack development, database design, and agile methodologies.',
      achievements: [
        'Completed intensive 6-month training program',
        'Contributed to 10+ open source projects',
        'Built first commercial web application',
        'Achieved 95% code review approval rate'
      ],
      technologies: ['JavaScript', 'React', 'Python', 'Django', 'MySQL']
    }
  ];

  const education = [
    {
      institution: 'Stanford University',
      degree: 'Bachelor of Science in Computer Science',
      period: '2014 - 2018',
      location: 'Stanford, CA',
      description: 'Focused on software engineering, algorithms, and human-computer interaction. Graduated Magna Cum Laude.',
      projects: ['AI Chatbot for Student Services', 'Mobile App for Campus Navigation', 'Machine Learning Research Project']
    }
  ];

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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impact I've made along the way
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
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full transform md:-translate-x-1/2 z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="glass p-6 hover:cyber-glow transition-all duration-300">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="cyber-border text-xs">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                    <div className="flex items-center text-cyber-blue font-medium mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      {exp.company}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="inline-block w-1 h-1 bg-cyber-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
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
            Education
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
                  <div className="text-cyber-blue font-semibold text-lg mb-2">{edu.institution}</div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
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
                      <Badge key={project} variant="outline" className="cyber-border">
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