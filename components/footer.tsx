"use client"

import { motion } from "framer-motion"
import {
  Heart,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Github,
  MessageCircle,
  Code,
  Server,
  Database,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ]

  const techStacks = [
    { name: "Frontend", icon: <Code className="w-4 h-4" />, techs: ["React", "Next.js", "Flutter", "Tailwind CSS"] },
    { name: "Backend", icon: <Server className="w-4 h-4" />, techs: ["Node.js", "Python", "Flask"] },
    { name: "Database", icon: <Database className="w-4 h-4" />, techs: ["MongoDB", "SQL", "Firebase"] },
    { name: "Mobile", icon: <Smartphone className="w-4 h-4" />, techs: ["React Native", "Flutter"] },
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Email",
      value: "yitagesudesta53@gmail.com",
      href: "mailto:yitagesudesta53@gmail.com",
    },
    { icon: <Phone className="w-4 h-4" />, label: "Phone", value: "+251982850264", href: "tel:+251982850264" },
    { icon: <MapPin className="w-4 h-4" />, label: "Location", value: "Bahir Dar, Ethiopia", href: "#" },
    { icon: <Github className="w-4 h-4" />, label: "GitHub", value: "@guanal", href: "https://github.com/guanal" },
    { icon: <MessageCircle className="w-4 h-4" />, label: "Telegram", value: "@guanal", href: "https://t.me/guanal" },
  ]

  return (
    <footer className="py-16 px-4 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Yitages Desta
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Information Systems Graduate passionate about creating innovative, user-focused applications and solving
              complex problems through technology.
            </p>
            <div className="flex space-x-2">
              <motion.a
                href="https://github.com/guanal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Github className="w-4 h-4 text-primary" />
              </motion.a>
              <motion.a
                href="https://t.me/guanal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
              </motion.a>
              <motion.a
                href="mailto:yitagesudesta53@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
            <div className="space-y-3">
              {techStacks.map((stack, index) => (
                <motion.div
                  key={stack.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-primary">{stack.icon}</div>
                    <span className="text-sm font-medium">{stack.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 ml-6">
                    {stack.techs.map((tech) => (
                      <span key={tech} className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {contact.href !== "#" ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">{contact.icon}</div>
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        <div className="text-xs">{contact.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="text-primary">{contact.icon}</div>
                      <div>
                        <div className="font-medium">{contact.label}</div>
                        <div className="text-xs">{contact.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright - Updated without v0 credit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <span>© 2024 Yitages Desta. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and Next.js</span>
            </motion.div>

            {/* Back to Top - Updated without v0 credit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="text-sm text-muted-foreground">Ready to build something amazing together?</span>
              <Button variant="ghost" size="sm" onClick={scrollToTop} className="group">
                <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              </Button>
            </motion.div>
          </div>

          {/* Remove the entire inspirational quote section */}
        </div>
      </div>
    </footer>
  )
}
