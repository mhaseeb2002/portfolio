"use client";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900"
    >
      <div className="absolute inset-0 gradient-mesh opacity-60"></div>

      <div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-float-delayed"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass dark:glass-dark mb-6 animate-fade-in">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">
                Available for Remote Work
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">
                Muhammad
              </span>
              <span className="block text-gradient animate-gradient">
                Haseeb
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Cloud Engineer &
              <br />
              <span className="text-gradient">Kubernetes Specialist</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
              Building cloud-native applications with Kubernetes and AI agents.
              CKA & CKAD Certified | Software Engineer @ Silicon Valley Startup
              with ex-AWS Visionaries
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <FiMail className="w-5 h-5" />
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg font-semibold transition-all hover:scale-105"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/haseebnizami"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-transform"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-haseeb-613670212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:mhaseeb.bee20seecs@seecs.edu.pk"
                className="p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
            </div>

            <div className="mt-8 flex gap-6 justify-center lg:justify-start flex-wrap text-sm text-gray-600 dark:text-gray-400">
              <div>📍 Lahore, Punjab, Pakistan</div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient"
                  style={{ backgroundSize: "200% 200%" }}
                ></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-slate-800">
                  <Image
                    src="/images/profile.jpg"
                    alt="Muhammad Haseeb"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass dark:glass-dark px-6 py-3 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-gradient">2+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="absolute -top-4 -left-4 glass dark:glass-dark px-6 py-3 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold text-gradient">30+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  K8s Add-ons
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full glass dark:glass-dark hover:scale-110 transition-all animate-bounce"
          aria-label="Scroll to about"
        >
          <FiArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
