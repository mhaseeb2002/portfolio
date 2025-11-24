'use client'
import { FiGithub, FiExternalLink, FiClock } from 'react-icons/fi'

export default function Projects() {
  const projects = [
    {
      title: 'Cloud Resume Challenge',
      description: 'Modern serverless portfolio built with Next.js frontend and Golang Lambda API. Infrastructure deployed using Terraform on AWS with S3, CloudFront, API Gateway, and DynamoDB. Features CI/CD with GitHub Actions.',
      tags: ['Next.js', 'Golang', 'Terraform', 'AWS', 'DynamoDB', 'Lambda', 'CloudFront'],
      github: 'https://github.com/haseebnizami/portfolio',
      live: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ]

  const upcomingProjects = [
    {
      title: 'MLOps Platform on Kubernetes',
      description: 'Production-ready ML model deployment platform with auto-scaling, A/B testing, canary deployments, and comprehensive monitoring using Prometheus and Grafana.',
      tags: ['Kubernetes', 'MLOps', 'ArgoCD', 'Prometheus', 'Istio'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Multi-Cloud Observability Stack',
      description: 'Complete observability solution spanning AWS, GCP, and Azure with unified dashboards, distributed tracing, and intelligent alerting.',
      tags: ['Prometheus', 'Grafana', 'Loki', 'Jaeger', 'Multi-Cloud'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'GitOps with Progressive Delivery',
      description: 'Automated deployment pipeline with canary releases, blue-green deployments, and automatic rollbacks using ArgoCD and Argo Rollouts.',
      tags: ['ArgoCD', 'GitOps', 'Kubernetes', 'Argo Rollouts', 'FluxCD'],
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Showcase of my cloud engineering and DevOps work
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity`}></div>
              
              <div className="relative glass dark:glass-dark rounded-3xl p-8 card-hover">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3 md:ml-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 glass dark:glass-dark hover:scale-105 rounded-xl transition-all font-medium"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-medium hover:shadow-xl transition-all hover:scale-105`}
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 glass dark:glass-dark rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Exciting projects in development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <div
                key={project.title}
                className="group relative animate-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}></div>
                
                <div className="relative glass dark:glass-dark rounded-2xl p-6 card-hover border-2 border-dashed border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} animate-pulse`}></div>
                    <span className={`text-xs font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                      IN PROGRESS
                    </span>
                    <FiClock className="w-4 h-4 text-gray-400 ml-auto" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
