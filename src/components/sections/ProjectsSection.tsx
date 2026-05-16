import { motion, animate } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useContent } from "@/content/ContentContext";
import { useState, useEffect, useRef } from "react";

export default function ProjectsSection() {
  const { content, locale } = useContent();
  const projects = content.projects.items;

  const featuredProjects = projects.filter(
    (project) => project.featured && !project.hidden,
  );
  const otherProjects = projects.filter(
    (project) => !project.featured && !project.hidden,
  );

  const extendedProjects = [...otherProjects, ...otherProjects.slice(0, 3)];

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, clientWidth } = containerRef.current;
        const firstChild = containerRef.current
          .firstElementChild as HTMLElement;
        const cardWidth = firstChild
          ? firstChild.offsetWidth + 24
          : clientWidth;

        const maxRealScroll = cardWidth * otherProjects.length;
        const nextScroll = scrollLeft + cardWidth;

        animate(scrollLeft, nextScroll, {
          duration: 0.4,
          ease: "easeInOut",
          onUpdate: (latest) => {
            if (containerRef.current) {
              containerRef.current.scrollLeft = latest;
            }
          },
          onComplete: () => {
            if (containerRef.current) {
              const currentScroll = containerRef.current.scrollLeft;
              if (currentScroll >= maxRealScroll - 10) {
                containerRef.current.scrollLeft = currentScroll - maxRealScroll;
              }
            }
          },
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, otherProjects.length]);

  const scroll = (direction: "left" | "right") => {
    setIsAutoPlaying(false);
    if (containerRef.current) {
      const isRTL = locale === "ar";
      const { scrollLeft, clientWidth } = containerRef.current;
      const firstChild = containerRef.current.firstElementChild as HTMLElement;
      const cardWidth = firstChild ? firstChild.offsetWidth + 24 : clientWidth;

      const maxRealScroll = cardWidth * otherProjects.length;

      if (direction === "right") {
        const nextScroll = isRTL ? scrollLeft - cardWidth : scrollLeft + cardWidth;

        animate(scrollLeft, nextScroll, {
          duration: 0.4,
          ease: "easeInOut",
          onUpdate: (latest) => {
            if (containerRef.current) {
              containerRef.current.scrollLeft = latest;
            }
          },
          onComplete: () => {
            if (containerRef.current) {
              const currentScroll = containerRef.current.scrollLeft;
              if (isRTL) {
                if (currentScroll <= -maxRealScroll + 10) {
                  containerRef.current.scrollLeft = currentScroll + maxRealScroll;
                }
              } else {
                if (currentScroll >= maxRealScroll - 10) {
                  containerRef.current.scrollLeft = currentScroll - maxRealScroll;
                }
              }
            }
          },
        });
      } else {
        if (isRTL) {
          if (scrollLeft >= -10) {
            containerRef.current.scrollLeft = -maxRealScroll;
            animate(-maxRealScroll, -maxRealScroll + cardWidth, {
              duration: 0.4,
              ease: "easeInOut",
              onUpdate: (latest) => {
                if (containerRef.current) {
                  containerRef.current.scrollLeft = latest;
                }
              },
            });
          } else {
            animate(scrollLeft, scrollLeft + cardWidth, {
              duration: 0.4,
              ease: "easeInOut",
              onUpdate: (latest) => {
                if (containerRef.current) {
                  containerRef.current.scrollLeft = latest;
                }
              },
            });
          }
        } else {
          if (scrollLeft <= 10) {
            containerRef.current.scrollLeft = maxRealScroll;
            animate(maxRealScroll, maxRealScroll - cardWidth, {
              duration: 0.4,
              ease: "easeInOut",
              onUpdate: (latest) => {
                if (containerRef.current) {
                  containerRef.current.scrollLeft = latest;
                }
              },
            });
          } else {
            animate(scrollLeft, scrollLeft - cardWidth, {
              duration: 0.4,
              ease: "easeInOut",
              onUpdate: (latest) => {
                if (containerRef.current) {
                  containerRef.current.scrollLeft = latest;
                }
              },
            });
          }
        }
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-1 md:pb-2 gradient-text">
            {content.projects.heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {content.projects.subheading}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 items-stretch gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card
                data-project-id={project.id}
                className="glass overflow-hidden hover:cyber-glow transition-all duration-300 group cursor-pointer h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={
                        (project.image && project.image.trim()) ||
                        "/placeholder.svg"
                      }
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 ${
                      locale === "ar" ? "space-x-reverse" : ""
                    }`}
                  >
                    {project.hasDemo !== false && (
                      <Button
                        size="sm"
                        className="cyber-glow"
                        asChild
                        disabled={
                          !project.links.demo || project.links.demo === "#"
                        }
                      >
                        <a
                          href={
                            project.links.demo && project.links.demo !== "#"
                              ? project.links.demo
                              : undefined
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open demo"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.hasGithubRepo !== false && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="cyber-border"
                        asChild
                        disabled={
                          !project.links.github || project.links.github === "#"
                        }
                      >
                        <a
                          href={
                            project.links.github && project.links.github !== "#"
                              ? project.links.github
                              : undefined
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View code on GitHub"
                        >
                          <SiGithub className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs cyber-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12 pb-1 md:pb-2 gradient-text">
            {content.projects.moreHeading}
          </h3>
        </motion.div>

        <div className="relative group">
          <div
            ref={containerRef}
            className="flex overflow-x-auto overflow-y-hidden gap-6 items-stretch pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            {extendedProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0"
              >
                <Card
                  data-project-id={project.id}
                  className="glass overflow-hidden hover:cyber-glow transition-all duration-300 group cursor-pointer h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={
                          (project.image && project.image.trim()) ||
                          "/placeholder.svg"
                        }
                        alt={`${project.title} thumbnail`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs cyber-border"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div
                        className={`flex space-x-2 ${
                          locale === "ar" ? "space-x-reverse" : ""
                        }`}
                      >
                        {project.hasDemo !== false && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex-1"
                            asChild
                            disabled={
                              !project.links.demo || project.links.demo === "#"
                            }
                          >
                            <a
                              href={
                                project.links.demo && project.links.demo !== "#"
                                  ? project.links.demo
                                  : undefined
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Open demo"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.hasGithubRepo !== false && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex-1"
                            asChild
                            disabled={
                              !project.links.github ||
                              project.links.github === "#"
                            }
                          >
                            <a
                              href={
                                project.links.github &&
                                project.links.github !== "#"
                                  ? project.links.github
                                  : undefined
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="View code on GitHub"
                            >
                              <SiGithub className="h-3 w-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity cyber-glow"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity cyber-glow"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Button size="lg" className="cyber-glow" asChild>
            <a
              href={content.projects.ctaAllGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all projects on GitHub"
            >
              <SiGithub className="h-4 w-4 mr-2" />
              {content.projects.ctaAllGithub}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
