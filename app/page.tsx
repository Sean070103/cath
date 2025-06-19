import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, Users, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ProjectCard } from "@/components/project-card"
import { SectionHeader } from "@/components/section-header"

export default function Portfolio() {
  const projects = [
    {
      title: "Eye Check Android Application",
      description:
        "Front-end development using React Native and Expo Go with Supabase backend and machine learning integration for visual acuity testing.",
      technologies: ["JavaScript", "Expo", "React Native", "Supabase", "Machine Learning"],
      github: "https://github.com/odeCat/EyeCheckApp",
      image: "/Eyecheck App (2).png",
    },
    {
      title: "CompuParts E-commerce",
      description: "Developed an E-commerce website for computer parts during internship at Armada Logics Inc.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/odeCat/E-Commerce",
      image: "/CompuParts.png",
    },
    {
      title: "SM Appliance Website Recreation",
      description: "Recreated the SM Appliance Center Website within 4 hours for individual examination.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/odeCat/Armada_Logics/tree/master/catherine_olleres_exam",
      image: "/SM appliance.png",
    },
  ]

  const skills = {
    "Programming Languages": ["Java", "JavaScript", "HTML5", "CSS3", "Python"],
    "Database Management": ["MySQL", "Supabase", "Firebase"],
    "Development Tools": ["VS Code", "React Native", "Unity", "Figma", "Expo Go", "GitHub"],
  }

  const certifications = [
    { name: "Basic Python Certificate", org: "Mnet IT Solutions", date: "March 2024", url: "https://courses.mnet-it.com/learn/certificate/9554817-90003" },
    {
      name: "Introduction to Machine Learning with TensorFlow",
      org: "Cebu Technological University",
      date: "March 2024",
      url: "https://drive.google.com/file/d/1QS820yL2wQpJ2SS8nibfwjxqHkqzeBd5/view"
    },
    { name: "AWS Cloud Session Tutor", org: "AWS Siklab Philippines", date: "March 2024", url: "https://drive.google.com/file/d/1FxYUHBGdenC1GLroV9L0SUl_F7odSU-8/view" },
    { name: "JavaScript Essentials 1", org: "Cisco", date: "March 2025", url: "https://www.credly.com/badges/92294e9d-01a8-4a9c-90bd-2727f0ee3468/linked_in_profile" },
    { name: "Google Analytics Certification", org: "Skillshop", date: "April 2025", url: "https://skillshop.credential.net/9400bf7c-cc05-454a-b2da-75432689b0af#acc.7VIGdT8x" },
    { name: "EF SET English Certificate", org: "EF SET", date: "May 2025", url: "https://cert.efset.org/JtVbrq" },
  ]

  return (
    <div className="min-h-screen bg-simple-gradient">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
              Catherine A. Olleres
            </h1>
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-700 hover:text-[#dd9faf] transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-[#dd9faf] transition-colors">
                Projects
              </Link>
              <Link href="#education" className="text-gray-700 hover:text-[#dd9faf] transition-colors">
                Education
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-[#dd9faf] transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#dd9faf] transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-2">
          <div className="flex-1 flex flex-col justify-center items-start text-left gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-header text-gradient mt-8 mb-2">
              Hi, I am <span className="text-primary">Catherine Olleres</span>
            </h1>
            <div className="text-lg md:text-xl text-primary font-semibold mb-4">Web & Mobile Developer | Computer Science Graduate</div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-8 font-body animate-fade-in">
              Computer Science graduate passionate about building modern, accessible web and mobile applications. Experienced in JavaScript, React, and emerging technologies. Collaborative, innovative, and committed to continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full md:w-auto">
              <Button
                className="bg-primary hover:bg-[#c88a9a] text-white px-8 py-3 text-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto flex items-center gap-2"
                asChild
              >
                <a href="mailto:ollerescthrn@gmail.com">
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto flex items-center gap-2"
                asChild
              >
                <a href="https://www.linkedin.com/in/catherineolleres/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg transition-transform duration-300 hover:scale-105 shadow-lg w-full sm:w-auto flex items-center gap-2"
                asChild
              >
                <a href="https://github.com/odeCat" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full h-72 md:w-96 md:h-[32rem] flex-shrink-0 shadow-2xl mt-12 md:mt-0">
            <img
              src="/Profile (1).jpg"
              alt="Catherine Olleres profile"
              className="w-full h-full object-cover rounded-2xl mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gradient-to-r from-[#dd9faf] via-[#c88a9a] to-[#a18cd1] text-white py-4 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Cabuyao City, Laguna</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>ollerescthrn@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>0918-457-3492</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Featured Projects" subtitle="A showcase of my recent work and technical expertise" />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-slide-up">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-header text-center text-gray-900 mb-12 animate-slide-up">
            Education
          </h2>
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-2 font-header">
                <Calendar className="w-6 h-6 text-primary" />
                University of Cabuyao – PnC
              </CardTitle>
              <CardDescription className="text-lg">2021 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bachelor of Science in Computer Science</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Coursework:</h4>
                  <p className="text-gray-600">
                    Data Structures and Algorithms, Information Management, Algorithms and Complexity, Information
                    Assurance Security, Software Engineering
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div>
                    <span className="font-semibold text-gray-800">GWA:</span>
                    <span className="text-primary font-bold ml-2">1.52</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Expected Graduation:</span>
                    <span className="text-gray-600 ml-2">June 2025</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle
                    className="text-xl text-gray-900 flex items-center gap-2"
                    style={{ fontFamily: "Work Sans, sans-serif" }}
                  >
                    <Code className="w-5 h-5 text-[#dd9faf]" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge key={skillIndex} className="bg-[#dd9faf] text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle
                    className="text-lg text-gray-900 flex items-center gap-2"
                    style={{ fontFamily: "Work Sans, sans-serif" }}
                  >
                    <Award className="w-5 h-5 text-[#dd9faf]" />
                    {cert.name}
                  </CardTitle>
                  <CardDescription>
                    <div className="text-gray-600">{cert.org}</div>
                    <div className="text-sm text-[#dd9faf] font-semibold">{cert.date}</div>
                    {cert.url && (
                      <Button
                        asChild
                        variant="outline"
                        className="mt-3 border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 text-sm"
                      >
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          View Certificate
                        </a>
                      </Button>
                    )}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Organizations
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle
                  className="text-xl text-gray-900 flex items-center gap-2"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  <Users className="w-5 h-5 text-[#dd9faf]" />
                  Executive Secretary
                </CardTitle>
                <CardDescription>AWS Cloud Club University of Cabuyao • 2023 – Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Prepared confidential and sensitive documents. Provided webinars for an introduction to Cloud
                  Computing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle
                  className="text-xl text-gray-900 flex items-center gap-2"
                  style={{ fontFamily: "Work Sans, sans-serif" }}
                >
                  <Users className="w-5 h-5 text-[#dd9faf]" />
                  Marketing Associate
                </CardTitle>
                <CardDescription>Junior Blockchain Education Consortium – Dangals • 2024 – Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contributed to marketing organization events and managed social media presence to boost engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#dd9faf]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
            Let's Connect
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and
            development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#dd9faf] hover:bg-gray-100 px-8 py-3 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#dd9faf] px-8 py-3 text-lg"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#dd9faf] px-8 py-3 text-lg"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Catherine A. Olleres. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
