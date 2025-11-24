'use client'
import Image from 'next/image'
import { FiExternalLink, FiCheckCircle } from 'react-icons/fi'

export default function Certifications() {
  const certifications = [
    {
      name: 'Certified Kubernetes Administrator',
      shortName: 'CKA',
      issuer: 'The Linux Foundation / CNCF',
      date: 'Valid until 2026',
      image: '/images/badges/cka.png',
      verifyUrl: 'https://www.credly.com/badges/7e839ab7-67d1-4855-9143-38fd4471a6d7/linked_in_profile',
      certificatePdf: '/images/certifications/cka-certificate.pdf',
      color: 'from-blue-500 to-cyan-500',
      icon: '☸️',
      status: 'verified',
    },
    {
      name: 'Certified Kubernetes Application Developer',
      shortName: 'CKAD',
      issuer: 'The Linux Foundation / CNCF',
      date: 'Valid until 2026',
      image: '/images/badges/ckad.png',
      verifyUrl: 'https://www.credly.com/badges/258aca34-a7fd-4989-8b18-df7c161d8b42/linked_in_profile',
      certificatePdf: '/images/certifications/ckad-certificate.pdf',
      color: 'from-purple-500 to-pink-500',
      icon: '☸️',
      status: 'verified',
    },
    {
      name: 'Deep Learning Specialization',
      shortName: 'ML Spec',
      issuer: 'DeepLearning.AI / Stanford University',
      date: '2024',
      image: '/images/badges/ml-specialization.png',
      verifyUrl: 'https://www.credly.com/badges/28d82e2d-bb67-4444-b11a-2891b04a6d5d/linked_in_profile',
      courseUrl: 'https://www.coursera.org/specializations/deep-learning',
      color: 'from-green-500 to-teal-500',
      icon: '🤖',
      status: 'verified',
    },
    {
      name: 'AWS Certified Solutions Architect',
      shortName: 'AWS SAA',
      issuer: 'Amazon Web Services',
      date: 'In Progress',
      image: '/images/badges/aws-saa.png',
      verifyUrl: '#',
      color: 'from-orange-500 to-amber-500',
      icon: '☁️',
      status: 'coming-soon',
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-slate-800 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional certifications validating my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className={`group relative animate-scale ${cert.status === 'coming-soon' ? 'opacity-75' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative glass dark:glass-dark rounded-3xl overflow-hidden card-hover">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
                  {cert.status === 'coming-soon' ? (
                    <div className="text-center">
                      <div className="text-5xl mb-3">{cert.icon}</div>
                      <div className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
                        Coming Soon
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="relative w-full h-full">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          fill
                          className="object-contain badge-glow"
                        />
                      </div>
                      <div className="absolute top-4 right-4 text-3xl">{cert.icon}</div>
                    </>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-gradient transition-all">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {cert.status === 'verified' ? (
                    <>
                      <div className="flex items-center gap-2 mb-4 text-green-600 dark:text-green-400">
                        <FiCheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">Verified • {cert.date}</span>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-xs hover:shadow-lg transition-all hover:scale-105"
                        >
                          <span>Verify</span>
                          <FiExternalLink className="w-3 h-3" />
                        </a>
                        {cert.certificatePdf && (
                          <a
                            href={cert.certificatePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass dark:glass-dark font-medium text-xs hover:shadow-lg transition-all hover:scale-105"
                          >
                            <span>PDF</span>
                            <FiExternalLink className="w-3 h-3" />
                          </a>
                        )}
                        {cert.courseUrl && (
                          <a
                            href={cert.courseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg glass dark:glass-dark font-medium text-xs hover:shadow-lg transition-all hover:scale-105"
                          >
                            <span>Course</span>
                            <FiExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 mb-4 text-amber-600 dark:text-amber-400">
                      <span className="text-xs font-medium">🎯 Exam Preparation {cert.date}</span>
                    </div>
                  )}
                </div>

                <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${cert.color}`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center glass dark:glass-dark p-8 rounded-3xl max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            <span className="font-semibold text-gradient">Continuously learning</span> and expanding my skillset in cloud-native technologies, 
            DevOps practices, and emerging infrastructure tools.
          </p>
        </div>
      </div>
    </section>
  )
}
