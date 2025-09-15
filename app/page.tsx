"use client"

import { Button } from "@/components/ui/button"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Testimonials } from "@/components/testimonials"
import { TypingAnimation } from "@/components/typing-animation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1.2,
    ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth easing
  },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 1.4,
    ease: [0.25, 0.46, 0.45, 0.94],
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
}

const fadeInRight = {
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 1.4,
    ease: [0.25, 0.46, 0.45, 0.94],
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <motion.h1 className="text-4xl lg:text-6xl font-bold mb-4" variants={staggerItem}>
              I Am Mohamed Eid
              <span className="block text-primary mt-2">
                <TypingAnimation text="Next-Level Web Developer." speed={60} />
              </span>
            </motion.h1>
            <motion.p className="text-gray-400 mb-8" variants={staggerItem}>
              I help their company and experience problems by building accessible and inclusive web products and digital
              experiences.
            </motion.p>
            <motion.div className="flex gap-4" variants={staggerItem}>
              <a href="https://wa.me/+201220949800" target="_blank" rel="noopener noreferrer">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90 transition-all duration-300">
                    Contact Me
                  </Button>
                </motion.div>
              </a>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent transition-all duration-300"
                >
                  Download CV
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="relative" {...fadeInRight} transition={{ ...fadeInRight.transition, delay: 0.6 }}>
            <motion.div
              className="relative aspect-square max-w-[400px] mx-auto"
              whileHover={{
                scale: 1.08,
                rotate: 2,
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                   style={{ borderRadius: "50%", objectFit: "cover", boxShadow: "1px 5px 10px rgb(139 92 246)" }}
                src="https://avatars.githubusercontent.com/u/208473855?v=4"
                alt="Profile"
                fill
                className="rounded-xl object-cover transition-all duration-500"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 1.0 }}>
          <Stats />
        </motion.div>
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.2,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.4,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.6,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Testimonials />
        </motion.div>

        {/* Contact Section */}
        <motion.section
          className="py-16"
          id="contact"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? I'm just a message away.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3,
                }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{
                      x: 15,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(var(--primary), 0.3)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Phone className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-400">+201220949800</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{
                      x: 15,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(var(--primary), 0.3)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <Mail className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">eidh17267@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-4"
                    whileHover={{
                      x: 15,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(var(--primary), 0.3)",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <MapPin className="text-primary" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-400">Alexandria, Egypt</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.form
                className="space-y-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.5,
                }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input
                    type="text"
                    placeholder="First Name"
                    className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary transition-all duration-300"
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "var(--primary)",
                      boxShadow: "0 0 0 3px rgba(var(--primary), 0.1)",
                      transition: { duration: 0.2 },
                    }}
                  />
                  <motion.input
                    type="text"
                    placeholder="Last Name"
                    className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary transition-all duration-300"
                    whileFocus={{
                      scale: 1.02,
                      borderColor: "var(--primary)",
                      boxShadow: "0 0 0 3px rgba(var(--primary), 0.1)",
                      transition: { duration: 0.2 },
                    }}
                  />
                </div>
                <motion.input
                  type="email"
                  placeholder="Email"
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary transition-all duration-300"
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "var(--primary)",
                    boxShadow: "0 0 0 3px rgba(var(--primary), 0.1)",
                    transition: { duration: 0.2 },
                  }}
                />
                <motion.textarea
                  placeholder="Message"
                  rows={6}
                  className="bg-card border border-primary/20 rounded-lg p-3 w-full focus:outline-none focus:border-primary transition-all duration-300"
                  whileFocus={{
                    scale: 1.02,
                    borderColor: "var(--primary)",
                    boxShadow: "0 0 0 3px rgba(var(--primary), 0.1)",
                    transition: { duration: 0.2 },
                  }}
                />
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.98,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Button size="lg" className="w-full transition-all duration-300">
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer
        className="bg-card mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.0,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mohamed </h3>
              <p className="text-gray-400">frontend Developer based in your location. Available for freelance work.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Development</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>eidh17267@gmail.com</li>
                <li>+201220949800</li>
                <li>Alexandria, Egypt</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 EID. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  )
}
