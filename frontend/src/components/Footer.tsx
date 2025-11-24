'use client'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/muhammad-haseeb-613670212/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center glass dark:glass-dark rounded-full hover:scale-110 transition-all group shadow-lg"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/haseebnizami"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center glass dark:glass-dark rounded-full hover:scale-110 transition-all group shadow-lg"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:mhaseeb.bee20seecs@seecs.edu.pk"
              className="w-14 h-14 flex items-center justify-center glass dark:glass-dark rounded-full hover:scale-110 transition-all group shadow-lg"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6 text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="text-center space-y-3">
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              © {new Date().getFullYear()} Muhammad Haseeb. All rights reserved.
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-500">
              <span>Built with Next.js, Tailwind CSS, and</span>
              <FiHeart className="w-4 h-4 text-red-500 animate-pulse" />
            </div>

            <p className="text-xs text-gray-400 dark:text-gray-600">
              Designed with modern glassmorphism and smooth animations
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
