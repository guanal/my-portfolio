
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Trophy, Star, Code, Users, Lightbulb, X, Calendar, MapPin, ExternalLink, GraduationCap, Cpu } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Define the Certificate interface for TypeScript
interface Certificate {
  title: string;
  organization: string;
  description: string;
  fullDescription: string;
  icon: JSX.Element;
  color: string;
  year: string;
  duration: string;
  location: string;
  skills: string[];
  credentialId: string;
  verificationUrl: string;
}

export default function Certificates() {
  const [showAllCertificates, setShowAllCertificates] = useState(false)

  const certificates: Certificate[] = [
    {
      title: "STEM Center Participation Certificate",
      organization: "Debre Berhan STEM Center",
      description: "Active participation in Science, Technology, Engineering, and Mathematics programs",
      fullDescription:
        "Comprehensive participation in advanced STEM programs focusing on innovative problem-solving, scientific research methodologies, and technology integration. This program enhanced my analytical thinking, research capabilities, and collaborative skills in scientific environments.",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      year: "2023",
      duration: "6 months",
      location: "Debre Berhan, Ethiopia",
      skills: ["Scientific Research", "Problem Solving", "Data Analysis", "Team Collaboration"],
      credentialId: "STEM-2023-001",
      verificationUrl: "https://grok.x.ai",
    },
    {
      title: "2nd Place Science Fair",
      organization: "Regional Science Competition",
      description: "Achieved second place in competitive science fair with innovative project presentation",
      fullDescription:
        "Secured second place in a highly competitive regional science fair by presenting an innovative project that demonstrated practical applications of scientific principles. The project showcased advanced research skills, creative problem-solving, and effective presentation abilities.",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      year: "2023",
      duration: "Competition",
      location: "Regional Level, Ethiopia",
      skills: ["Research", "Innovation", "Presentation", "Scientific Method"],
      credentialId: "SCI-FAIR-2023-02",
      verificationUrl: "https://grok.x.ai",
    },
    {
      title: "ቡናስክሪፕት (BunaScript) Programming Language Certificate",
      organization: "BunaScript Development Team",
      description: "Certification in Amharic programming language development and implementation",
      fullDescription:
        "Specialized certification in BunaScript, an innovative Amharic programming language that bridges local language accessibility with modern programming concepts. This certification demonstrates proficiency in language design, compiler development, and cultural technology adaptation.",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      year: "2023",
      duration: "3 months",
      location: "Ethiopia",
      skills: ["Programming Languages", "Compiler Design", "Cultural Technology", "Language Processing"],
      credentialId: "BUNA-SCRIPT-2023",
      verificationUrl: "https://grok.x.ai",
    },
    {
      title: "KTS Participation Certificate",
      organization: "Knowledge and Technology Store (KTS)",
      description: "Active participation in knowledge sharing and technology development initiatives",
      fullDescription:
        "Active engagement in Knowledge and Technology Store initiatives, focusing on knowledge sharing, technology development, and community building. Participated in various workshops, seminars, and collaborative projects that enhanced technical skills and professional development.",
      icon: <Users className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      year: "2023",
      duration: "5 months",
      location: "Ethiopia",
      skills: ["Knowledge Sharing", "Community Building", "Technology Development", "Mentoring"],
      credentialId: "KTS-PART-2023",
      verificationUrl: "https://grok.x.ai",
    },
    {
      title: "Advanced Web Development Certificate",
      organization: "Tech Institute",
      description: "Comprehensive web development training covering modern frameworks and best practices",
      fullDescription:
        "Intensive web development program covering modern frameworks, best practices, and industry standards. The curriculum included React, Node.js, database management, and deployment strategies with hands-on projects and real-world applications.",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      year: "2023",
      duration: "8 months",
      location: "Online",
      skills: ["React", "Node.js", "Database Design", "API Development"],
      credentialId: "WEB-DEV-ADV-2023",
      verificationUrl: "https://grok.x.ai",
    },
    {
      title: "High Scorer in Grade 12",
      organization: "HMM School",
      description: "Recognized as one of the top scorers in grade 12 academic examinations",
      fullDescription:
        "Awarded for exceptional academic performance in grade 12 at HMM School, ranking among the highest scorers in national examinations. This achievement reflects dedication, strong analytical skills, and a solid foundation in mathematics, science, and other core subjects.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      year: "2021",
      duration: "Academic Year",
      location: "Debre Berhan, Ethiopia",
      skills: ["Academic Excellence", "Mathematics", "Science", "Critical Thinking"],
      credentialId: "HMM-G12-2021",
      verificationUrl: "https://grok.x.ai",
    },
    {
      title: "Computer Training Certificate",
      organization: "Education for Sustainable Development (ESD)",
      description: "Completed training in fundamental computer skills and applications",
      fullDescription:
        "Successfully completed a comprehensive computer training program at ESD, covering essential skills in operating systems, office applications, and basic programming. This training enhanced my digital literacy and laid the groundwork for advanced technological proficiency.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      year: "2022",
      duration: "4 months",
      location: "Debre Berhan, Ethiopia",
      skills: ["Digital Literacy", "Office Applications", "Basic Programming", "Computer Operations"],
      credentialId: "ESD-COMP-2022",
      verificationUrl: "https://www.google.com/search?sca_esv=b6b9cc2a75ab82a9&sxsrf=AE3TifNE9zBV0txyUS9inVKpicjuMR2R2Q:1754727813803&udm=2&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIeoJTKjrFjVxydQWqI2NcOhYPURIv2wPgv_w_sE_0Sc6QqqU7k8cSQndc5mTXCIWHa_uc-TjDJYRtLl-RKXlVOTL5mI-WiiglTJRFGvAEXXnfLCt0BkYsC0T-4-k-mSSl9LqZBVj0n-XtnANItk--Gvyv2TNedRXhVojzV4R3s6nqe8F-Yg&q=images&sa=X&ved=2ahUKEwiqsZPApv2OAxVXVqQEHV_iB3UQtKgLegQIFBAB&biw=1280&bih=551&dpr=1.5#vhid=kt9a95Fkz4GXzM&vssid=mosaic",
    },
  ]

  const featuredCertificates = certificates.slice(0, 4) // Show first 4 certificates in main view

  const handleVerifyClick = (title: string, url: string) => {
    alert(`Opening verification for ${title}`);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Certificates &{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition of my dedication to learning, innovation, and excellence in technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredCertificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.02,
              }}
              className="group perspective-1000 cursor-pointer"
              onClick={() => setShowAllCertificates(true)}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                />

                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award className="w-16 h-16" />
                </div>

                <CardHeader className="relative">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Issued by:</p>
                    <p className="text-sm font-medium">{cert.organization}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                  <div className="flex items-center space-x-2 pt-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                    <span className="text-xs font-medium text-muted-foreground">Verified Achievement</span>
                  </div>
                </CardContent>

                <div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r ${cert.color} rounded-lg opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => setShowAllCertificates(true)}
            className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            View All Certificates ({certificates.length})
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.div>
          </Button>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: `${certificates.length}+`, label: "Certificates" },
            { number: "2+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "2", label: "Awards Won" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* All Certificates Modal */}
      <AnimatePresence>
        {showAllCertificates && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 overflow-y-auto"
            onClick={() => setShowAllCertificates(false)}
          >
            <div className="min-h-screen py-8 px-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="container mx-auto max-w-7xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      All{" "}
                      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Certificates
                      </span>
                    </h2>
                    <p className="text-muted-foreground">
                      Complete collection of my professional certifications and achievements
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAllCertificates(false)}
                    className="rounded-full p-2 hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                        />

                        <CardHeader className="relative">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white shadow-lg`}>
                              {cert.icon}
                            </div>
                            <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                              {cert.year}
                            </span>
                          </div>
                          <CardTitle className="text-lg leading-tight mb-2">{cert.title}</CardTitle>
                          <p className="text-sm font-semibold text-muted-foreground">{cert.organization}</p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {cert.fullDescription.slice(0, 150)}...
                          </p>

                          <div className="space-y-3">
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-2" />
                              Duration: {cert.duration}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3 mr-2" />
                              {cert.location}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold mb-2">Skills Gained</h5>
                            <div className="flex flex-wrap gap-1">
                              {cert.skills.slice(0, 3).map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                              {cert.skills.length > 3 && (
                                <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                                  +{cert.skills.length - 3}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-border/30">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <span>ID: {cert.credentialId}</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2 text-xs"
                                asChild
                                aria-label={`Verify ${cert.title} certificate`}
                              >
                                <a
                                  href={cert.verificationUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleVerifyClick(cert.title, cert.verificationUrl);
                                  }}
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  Verify
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
