"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  text: string
  className?: string
  speed?: number
}

export function TypingAnimation({ text, className = "", speed = 80 }: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {displayText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.02,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{
          opacity: [1, 0.3, 1],
          scaleY: [1, 0.8, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="inline-block w-0.5 h-6 bg-primary ml-1"
      />
    </motion.span>
  )
}
