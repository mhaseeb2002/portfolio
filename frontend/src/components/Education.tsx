'use client'
import Image from 'next/image'
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Academic foundation in engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500 hidden md:block"></div>

            <div className="space-y-12">
              <div className="relative animate-slide-up">
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12 mb-4 md:mb-0 md:text-right md:pr-8">
                    <div className="inline-block glass dark:glass-dark p-6 rounded-2xl card-hover">
                      <div className="relative w-32 h-32 mx-auto md:mx-0 md:ml-auto mb-4">
                        <Image
                          src="/images/logos/nust.png"
                          alt="NUST Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <FiAward className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8">
                    <div className="glass dark:glass-dark p-8 rounded-2xl card-hover">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
                        Electrical Engineering
                      </p>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <FiMapPin className="w-4 h-4" />
                          <span>National University of Sciences & Technology (NUST)</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <FiCalendar className="w-4 h-4" />
                          <span>2020 - 2024</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Graduated with a focus on signal processing and machine learning. 
                          Published research in deep learning for healthcare applications. 
                          Transitioned to cloud engineering during final year.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="md:flex items-center justify-between">
                  <div className="md:w-5/12 mb-4 md:mb-0 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="glass dark:glass-dark p-8 rounded-2xl card-hover">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Research & Publications
                      </h3>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-4">
                        Deep Learning in Healthcare
                      </p>
                      <div className="space-y-3 text-gray-700 dark:text-gray-300">
                        <p>
                          Published research on applying deep learning techniques to medical imaging 
                          and diagnostic systems.
                        </p>
                        <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm">
                            <FiAward className="w-4 h-4" />
                            Research Publication
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center order-1 md:order-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <FiAward className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="md:w-5/12 md:pl-8 order-3">
                    <div className="glass dark:glass-dark p-6 rounded-2xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                          <div className="text-3xl font-bold text-gradient mb-1">3.5+</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">GPA</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
                          <div className="text-3xl font-bold text-gradient mb-1">Top 10%</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">Class Rank</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
