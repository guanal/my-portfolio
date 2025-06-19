"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Zap, Shield, Users, ShoppingCart, Camera, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import toast, { Toaster } from "react-hot-toast"

export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const projects = [
    {
      title: "Centralized Patient Record Storage and Management System",
      description:
        "A comprehensive healthcare management system with AI integration for efficient patient record management and secure data handling.",
      fullDescription:
        "This advanced healthcare management system revolutionizes patient data handling with cutting-edge AI integration. Built with modern web technologies, it provides secure, scalable, and efficient patient record management for healthcare institutions. The system features real-time data synchronization, advanced authentication, and AI-powered insights using Gemini AI for better patient care decisions.",
      features: [
        "Secure patient data management with encryption",
        "AI-powered insights with Gemini AI integration",
        "Multi-platform support (Web & Mobile)",
        "Advanced authentication and authorization system",
        "Real-time data synchronization across devices",
        "HIPAA compliant data handling",
        "Advanced reporting and analytics",
        "Role-based access control",
      ],
      tech: ["Next.js", "MongoDB", "Gemini AI", "NextAuth", "Flutter", "Node.js", "TypeScript"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      image: "/images/cps.jpg",
      demoUrl: "https://project-ivla.vercel.app/",
      status: "Completed",
      duration: "6 months",
      category: "Healthcare",
    },
    {
      title: "Sewgna Charity Association Website",
      description:
        "Professional charity website for Sewgna & Selam Charity Association, featuring modern design, volunteer management, and community engagement features.",
      fullDescription:
        "A comprehensive digital platform designed for Sewgna & Selam Charity Association to enhance their community outreach and volunteer management. The website features a modern, responsive design with engaging animations and user-friendly interfaces. It includes volunteer registration systems, event management, donation tracking, and community engagement features to support the organization's mission.",
      features: [
        "Modern responsive design with accessibility features",
        "Volunteer registration and management system",
        "Community engagement and social features",
        "Event management and showcase platform",
        "Professional branding and UI/UX design",
        "Donation tracking and reporting",
        "Multi-language support (English/Amharic)",
        "SEO optimization for better visibility",
      ],
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      image: "/images/sewgna-charity.png",
      demoUrl: "https://project-ivla.vercel.app/",
      status: "Live",
      duration: "3 months",
      category: "Non-Profit",
    },
    {
      title: "E-commerce Web Application",
      description:
        "Full-featured e-commerce platform with modern UI/UX, secure payment processing, and comprehensive admin dashboard.",
      fullDescription:
        "A complete e-commerce solution built with modern web technologies, featuring a user-friendly shopping experience, secure payment processing, and powerful admin tools. The platform includes product catalog management, inventory tracking, order processing, customer management, and detailed analytics. Designed for scalability and performance with mobile-first approach.",
      features: [
        "Product catalog with advanced search and filtering",
        "Secure payment integration with multiple gateways",
        "User authentication and profile management",
        "Order tracking and management system",
        "Comprehensive admin dashboard with analytics",
        "Inventory management and stock tracking",
        "Customer support and review system",
        "Mobile-responsive design with PWA features",
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Express.js", "JWT", "Redux"],
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      image: "./images/ecom.png",
      demoUrl: "https://ecomerce-iinr.vercel.app/",
      status: "In Development",
      duration: "5 months",
      category: "E-commerce",
    },
    {
      title: "Face Recognition System with Live Scanning",
      description:
        "Enhanced face recognition system featuring both photo upload capabilities and real-time live camera scanning for versatile applications.",
      fullDescription:
        "An enhanced version of the face recognition system with improved algorithms and additional features. This system provides dual input methods for maximum flexibility, supporting both uploaded images and real-time camera feeds. Built with optimized performance for real-time processing and enhanced user experience with intuitive interfaces.",
      features: [
        "Dual input methods (upload/live camera)",
        "Real-time processing with optimized algorithms",
        "High-performance face detection and recognition",
        "User-friendly interface with modern design",
        "Scalable architecture for enterprise use",
        "Advanced face matching algorithms",
        "Batch processing capabilities",
        "Integration-ready API endpoints",
      ],
      tech: ["Python", "OpenCV", "TensorFlow", "Flask", "WebRTC", "SQLAlchemy"],
      icon: <Camera className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      image: "/images/fac.png",
      demoUrl: "https://youtu.be/1rcyAtOxr-Y",
      status: "Completed",
      duration: "3 months",
      category: "AI/ML",
    },
  ]
  const featuredProjects = projects.slice(0, 4)

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <Toaster position="top-right" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications I've built
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative cursor-pointer"
              onClick={() => setShowAllProjects(true)}
            >
              <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  <motion.div
                    className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${project.color} text-white shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>

                  <div className="absolute top-4 right-4 flex flex-wrap gap-1 max-w-32">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Zap className="w-4 h-4 mr-2 text-primary" />
                      </motion.div>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="text-sm text-muted-foreground flex items-center group/item"
                        >
                          <motion.div
                            className="w-2 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full mr-3"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-primary/30 hover:border-primary"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open("https://github.com/guanal", "_blank")
                      }}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 group/btn bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                      onClick={(e) => {
                        e.stopPropagation()
                        if (project.title === "Centralized Patient Record Storage and Management System") {
                          toast.error("Under Development. Please wait.")
                        } else {
                          window.open(project.demoUrl, "_blank")
                        }
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            onClick={() => setShowAllProjects(true)}
            className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            View All Projects ({projects.length})
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showAllProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 overflow-y-auto"
            onClick={() => setShowAllProjects(false)}
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
                <div className="flex items-center justify-between mb-8 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      All{" "}
                      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        Projects
                      </span>
                    </h2>
                    <p className="text-muted-foreground">
                      Comprehensive showcase of my development work and innovations
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAllProjects(false)}
                    className="rounded-full p-2 hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <Card className="h-full bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="relative h-40 overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                          />
                          <div className="absolute top-3 left-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                              {project.icon}
                            </div>
                          </div>
                          <div className="absolute top-3 right-3">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded-full ${
                                project.status === "Live"
                                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                  : project.status === "Completed"
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                  : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {project.category}
                            </span>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-1" />
                              {project.duration}
                            </div>
                          </div>
                          <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                          <CardDescription className="text-sm">{project.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          <div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {project.fullDescription.slice(0, 120)}...
                            </p>
                          </div>

                          <div>
                            <h5 className="text-sm font-semibold mb-2">Tech Stack</h5>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.tech.length > 4 && (
                                <span className="px-2 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                                  +{project.tech.length - 4}
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex space-x-2 pt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 text-xs"
                              onClick={() => window.open("https://github.com/guanal", "_blank")}
                            >
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </Button>
                            <Button
                              size="sm"
                              className="flex-1 text-xs"
                              onClick={() => {
                                if (project.title === "Centralized Patient Record Storage and Management System") {
                                  toast.error("Under Development. Please wait.")
                                } else {
                                  window.open(project.demoUrl, "_blank")
                                }
                              }}
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </Button>
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
