"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Brain, MapPin, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-5 h-5" />,
      items: ["React", "Next.js", "Flutter", "JavaScript"],
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: ["Node.js", "API Development", "Authentication"],
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      items: ["SQL", "MongoDB", "Supabase", "Firebase"],
    },
    {
      category: "Languages",
      icon: <Brain className="w-5 h-5" />,
      items: ["JavaScript", "Python", "C++", "C#"],
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 shadow-lg">
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src="/images/yite.jpg"
                  alt="Yitages Desta"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-semibold">Yitages Desta</h3>
                <p className="text-primary font-medium">Full-Stack Developer</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bahir Dar, Ethiopia</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Information Systems Graduate</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm an Information Systems graduate from Bahir Dar University with a passion for building user-focused
                applications that solve real-world problems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With expertise in both frontend and backend development, I specialize in creating secure,
                high-performance systems using modern technologies like React, Next.js, and various database solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                My experience includes active participation in tech communities, which has strengthened my collaborative
                approach and problem-solving skills.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">What I Do</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Full-stack web development</li>
                  <li>• Mobile app development</li>
                  <li>• Database design & optimization</li>
                  <li>• API development & integration</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">My Approach</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User-centered design</li>
                  <li>• Clean, maintainable code</li>
                  <li>• Collaborative problem-solving</li>
                  <li>• Continuous learning</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h3>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 hover:shadow-lg transition-all hover:bg-card/70"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{skill.icon}</div>
                  <h4 className="font-semibold">{skill.category}</h4>
                </div>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div
                      key={item}
                      className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full inline-block mr-2 mb-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can bring
            your ideas to life.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
