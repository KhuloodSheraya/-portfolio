import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { motion } from 'framer-motion'
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink,
  MapPin,
  Calendar,
  Award,
  Zap,
  Users,
  Layers,
  Server,
  Palette,
  MessageSquare,
  CreditCard,
  BarChart3,
  Shield,
  Rocket
} from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const skills = {
    mobile: [
      { name: 'Flutter & Dart', level: 95, icon: <Smartphone className="h-5 w-5" /> },
      { name: 'GetX State Management', level: 90, icon: <Layers className="h-5 w-5" /> },
      { name: 'Firebase Integration', level: 88, icon: <Database className="h-5 w-5" /> },
      { name: 'Google Maps API', level: 85, icon: <MapPin className="h-5 w-5" /> },
      { name: 'Real-time Chat & Calls', level: 82, icon: <MessageSquare className="h-5 w-5" /> }
    ],
    web: [
      { name: 'HTML5 & CSS3', level: 95, icon: <Code className="h-5 w-5" /> },
      { name: 'JavaScript', level: 90, icon: <Code className="h-5 w-5" /> },
      { name: 'AngularJS', level: 88, icon: <Globe className="h-5 w-5" /> },
      { name: 'Bootstrap', level: 85, icon: <Palette className="h-5 w-5" /> },
      { name: 'Responsive Design', level: 92, icon: <Smartphone className="h-5 w-5" /> }
    ],
    backend: [
      { name: 'PHP Laravel', level: 90, icon: <Server className="h-5 w-5" /> },
      { name: 'API Development', level: 88, icon: <Database className="h-5 w-5" /> },
      { name: 'Database Design', level: 85, icon: <Database className="h-5 w-5" /> },
      { name: 'Payment Integration', level: 80, icon: <CreditCard className="h-5 w-5" /> },
      { name: 'SMS/PBX Services', level: 78, icon: <MessageSquare className="h-5 w-5" /> }
    ],
    tools: [
      { name: 'Marketing Analytics', level: 85, icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'GTM & Mixpanel', level: 82, icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'Snapchat Ads', level: 80, icon: <BarChart3 className="h-5 w-5" /> },
      { name: 'UX Cam', level: 78, icon: <Users className="h-5 w-5" /> },
      { name: 'System Integration', level: 88, icon: <Layers className="h-5 w-5" /> }
    ]
  }

  const projects = [
    {
      title: 'WowClinic - Medical Mobile App',
      description: 'Comprehensive medical application with advanced features including patient management, appointment scheduling, and real-time communication.',
      technologies: ['Flutter', 'GetX', 'Firebase', 'Google Maps', 'Real-time Chat'],
      features: [
        'Firebase authentication and data management',
        'Google Maps integration for location services',
        'Real-time chat and video call functionality',
        'Push notification system',
        'Marketing analytics integration'
      ],
      role: 'Senior Flutter Developer',
      status: 'Completed',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: 'Medicalrefill Integration Platform',
      description: 'Created robust API solutions for integrating Medicalrefill (speedy recovery web app) with external systems and payment gateways.',
      technologies: ['PHP Laravel', 'API Development', 'Tabby', 'ClickPay'],
      features: [
        'APIs for Antifat (external web app) integration',
        'SMS/PBX services integration',
        'Payment gateway implementations (Tabby, ClickPay)',
        'Seamless data flow between multiple platforms'
      ],
      role: 'Senior Developer & API Architect',
      status: 'Completed',
      icon: <Server className="h-6 w-6" />
    },
    {
      title: 'Responsive Web Applications',
      description: 'Developed modern, responsive web applications with focus on user experience and performance optimization.',
      technologies: ['HTML5', 'CSS3', 'AngularJS', 'Bootstrap'],
      features: [
        'Modern UI/UX design principles',
        'Cross-browser compatibility',
        'Mobile-first responsive design',
        'Performance optimization'
      ],
      role: 'Frontend Developer',
      status: 'Multiple Projects',
      icon: <Globe className="h-6 w-6" />
    }
  ]

  const experience = [
    {
      title: 'Senior Developer - Medical Applications',
      period: 'Current Position',
      description: 'Leading development of medical applications with focus on Flutter mobile development and full-stack solutions.',
      achievements: [
        'Specialized in Flutter mobile development with GetX state management',
        'Led integration projects with Firebase, Google Maps, and communication services',
        'Implemented marketing tool integrations for analytics and user tracking',
        'Developed full-stack solutions using PHP Laravel',
        'Created API architectures for complex system integrations'
      ]
    }
  ]

  const SkillBar = ({ skill }) => (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${skill.level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="flex items-center space-x-3 mb-4"
    >
      <div className="flex items-center space-x-2 w-48">
        {skill.icon}
        <span className="text-sm font-medium">{skill.name}</span>
      </div>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
        />
      </div>
      <span className="text-sm text-gray-600 w-12">{skill.level}%</span>
    </motion.div>
  )

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
              {project.icon}
            </div>
            <div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <p className="text-sm text-gray-600">{project.role}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{project.description}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <Zap className="h-3 w-3 mt-1 text-blue-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-green-600 border-green-600">
              {project.status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Khulood Sheraya
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Code className="h-16 w-16 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Khulood Sheraya
              </h1>
              <p className="text-2xl text-gray-600 mb-6">
                Senior Developer specializing in Medical Applications
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Expert in Flutter development with GetX state management, full-stack web development, 
                and API integrations. Passionate about creating innovative solutions for healthcare technology.
              </p>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                onClick={() => setActiveSection('projects')}
              >
                <Rocket className="h-5 w-5 mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setActiveSection('contact')}
              >
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        As a Senior Developer with extensive experience in medical applications, I specialize in 
                        creating robust, scalable solutions that bridge the gap between technology and healthcare. 
                        My expertise spans mobile development with Flutter, full-stack web development, and complex 
                        system integrations.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        I have successfully led projects involving real-time communication systems, payment gateway 
                        integrations, and marketing analytics platforms. My passion lies in developing user-centric 
                        applications that make healthcare more accessible and efficient.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Award className="h-6 w-6 text-blue-500" />
                        <h4 className="text-lg font-semibold">Expertise</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Mobile App Development (Flutter)</li>
                        <li>• Full-Stack Web Development</li>
                        <li>• API Architecture & Integration</li>
                        <li>• Healthcare Technology Solutions</li>
                        <li>• Real-time Communication Systems</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <Shield className="h-6 w-6 text-green-500" />
                        <h4 className="text-lg font-semibold">Specializations</h4>
                      </div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Medical Application Development</li>
                        <li>• Payment Gateway Integration</li>
                        <li>• Marketing Analytics Implementation</li>
                        <li>• Cross-platform Solutions</li>
                        <li>• System Architecture Design</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Smartphone className="h-6 w-6 text-blue-500" />
                      <span>Mobile Development</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skills.mobile.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-6 w-6 text-green-500" />
                      <span>Web Development</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skills.web.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Server className="h-6 w-6 text-purple-500" />
                      <span>Backend Development</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skills.backend.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-6 w-6 text-orange-500" />
                      <span>Tools & Integration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {skills.tools.map((skill, index) => (
                      <SkillBar key={index} skill={skill} />
                    ))}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
              <div className="grid lg:grid-cols-1 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
              <div className="max-w-4xl mx-auto">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="mb-8">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl">{exp.title}</CardTitle>
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-6">{exp.description}</p>
                        <h4 className="font-semibold mb-4">Key Achievements:</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-3">
                              <Zap className="h-4 w-4 mt-1 text-blue-500 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
                      <p className="text-gray-600">
                        I'm always interested in discussing new opportunities and innovative projects. 
                        Feel free to reach out if you'd like to collaborate or learn more about my work.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-500" />
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <a 
                            href="mailto:k.sheraya@hotmail.com" 
                            className="text-blue-600 hover:underline"
                          >
                            k.sheraya@hotmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <Linkedin className="h-6 w-6 text-blue-500" />
                        <div>
                          <h4 className="font-semibold">LinkedIn</h4>
                          <a 
                            href="https://www.linkedin.com/in/khulood-sheraya-6b70b9b6" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline flex items-center"
                          >
                            Connect with me
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => window.open('mailto:k.sheraya@hotmail.com')}
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Khulood Sheraya. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2">
              Senior Developer specializing in Medical Applications
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
