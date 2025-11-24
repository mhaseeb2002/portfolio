'use client'
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'mhaseeb.bee20seecs@seecs.edu.pk',
      link: 'mailto:mhaseeb.bee20seecs@seecs.edu.pk',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@haseebnizami',
      link: 'https://github.com/haseebnizami',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Muhammad Haseeb',
      link: 'https://www.linkedin.com/in/muhammad-haseeb-613670212/',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Lahore, Punjab, Pakistan',
      link: null,
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-800 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let&apos;s Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="group relative animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}></div>
                
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="relative block glass dark:glass-dark p-6 rounded-2xl card-hover"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {info.label}
                        </div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-gradient transition-all">
                          {info.value}
                        </div>
                      </div>
                      <FiSend className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                    </div>
                  </a>
                ) : (
                  <div className="relative glass dark:glass-dark p-6 rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {info.label}
                        </div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="relative group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity"></div>
            
            <div className="relative glass dark:glass-dark p-8 md:p-12 rounded-3xl text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl animate-float">
                <FiMail className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Work Together?
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                Whether you need help with Kubernetes infrastructure, cloud migration, 
                or DevOps automation, I&apos;m here to help bring your ideas to life.
              </p>
              
              <a
                href="mailto:mhaseeb.bee20seecs@seecs.edu.pk"
                className="inline-flex items-center gap-3 btn-primary text-lg"
              >
                <FiMail className="w-5 h-5" />
                <span>Send me an email</span>
              </a>

              <div className="mt-8 flex gap-4 justify-center">
                <a
                  href="https://github.com/haseebnizami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full glass dark:glass-dark hover:scale-110 transition-transform"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-haseeb-613670212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full glass dark:glass-dark hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
