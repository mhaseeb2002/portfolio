'use client'
import { FiCode, FiCloud, FiZap, FiTrendingUp } from 'react-icons/fi'

export default function About() {
  const highlights = [
    {
      icon: FiCloud,
      title: 'Cloud Native',
      description: '30+ production-grade K8s add-ons deployed and managed',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiCode,
      title: 'Multi-Cloud',
      description: 'Expert in AWS, GCP, and Azure cloud platforms',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiZap,
      title: 'Infrastructure as Code',
      description: 'Terraform, ArgoCD, and GitOps best practices',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiTrendingUp,
      title: 'LLM Infrastructure',
      description: 'Scalable infrastructure for ML/AI workloads',
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Cloud Engineer passionate about building scalable infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m a <span className="font-semibold text-gradient">Cloud Engineer</span> specializing 
                in Kubernetes and ML Infrastructure, currently working at a Silicon Valley startup with ex-AWS visionaries. 
                I graduated as an Electrical Engineer from <span className="font-semibold">NUST</span> and 
                transitioned into cloud-native application development.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My expertise lies in building and managing <span className="font-semibold">production-grade 
                Kubernetes clusters</span> with 30+ add-ons including ArgoCD, Prometheus, Istio, Karpenter, 
                and more. I have hands-on experience with <span className="font-semibold">AWS, GCP, and Azure</span>, 
                with a focus on EKS for container orchestration.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I bring a unique combination of <span className="font-semibold">Kubernetes expertise and 
                LLM/ML knowledge</span>, having published research in deep learning for healthcare. 
                My work involves deploying scalable infrastructure for machine learning workloads and 
                LLM-powered applications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="glass dark:glass-dark p-6 rounded-2xl card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '30+', label: 'K8s Add-ons', color: 'from-blue-500 to-cyan-500' },
            { value: '2', label: 'K8s Certs', color: 'from-purple-500 to-pink-500' },
            { value: '3', label: 'Cloud Platforms', color: 'from-orange-500 to-red-500' },
            { value: '2+', label: 'Years Experience', color: 'from-green-500 to-teal-500' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="relative group animate-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}></div>
              <div className="relative glass dark:glass-dark p-6 rounded-2xl text-center card-hover">
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
