"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, MessageCircle, MapPin, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "yitagesudesta53@gmail.com",
      href: "mailto:yitagesudesta53@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "Telegram",
      value: "@guanal",
      href: "https://t.me/guanal",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "@guanal",
      href: "https://github.com/guanal",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+251982850264",
      href: "tel:+251982850264",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to
            life.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, innovative projects, and potential collaborations.
              Whether you have a project in mind or just want to say hello, feel free to reach out through any of these
              channels!
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden relative">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />

                  <CardContent className="p-8">
                    <div className="flex items-center space-x-6">
                      <motion.div
                        className={`p-4 rounded-xl bg-gradient-to-r ${contact.color} text-white group-hover:scale-110 transition-transform shadow-lg`}
                        whileHover={{ rotate: 5 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                          {contact.label}
                        </h4>
                        <p className="text-muted-foreground text-lg">{contact.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg">Bahir Dar, Ethiopia</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-lg">Available for freelance work</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-lg text-muted-foreground italic">"Let's build something amazing together!"</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
