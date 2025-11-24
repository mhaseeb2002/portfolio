'use client'
import { 
  SiKubernetes, 
  SiAmazon, 
  SiTerraform, 
  SiDocker, 
  SiGo,
  SiPrometheus,
  SiGrafana,
  SiArgo,
  SiIstio,
  SiGithubactions,
  SiPython,
  SiTensorflow,
  SiGooglecloud,
} from 'react-icons/si'
import { FaCloud } from 'react-icons/fa'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'AWS', icon: SiAmazon, level: 'Advanced' },
        { name: 'GCP', icon: SiGooglecloud, level: 'Intermediate' },
        { name: 'Azure', icon: FaCloud, level: 'Intermediate' },
      ],
    },
    {
      title: 'Container Orchestration',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Kubernetes', icon: SiKubernetes, level: 'Expert' },
        { name: 'Docker', icon: SiDocker, level: 'Advanced' },
        { name: 'Amazon EKS', icon: SiAmazon, level: 'Advanced' },
      ],
    },
    {
      title: 'K8s Ecosystem',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'ArgoCD', icon: SiArgo, level: 'Advanced' },
        { name: 'Prometheus', icon: SiPrometheus, level: 'Advanced' },
        { name: 'Grafana', icon: SiGrafana, level: 'Advanced' },
        { name: 'Istio', icon: SiIstio, level: 'Intermediate' },
      ],
    },
    {
      title: 'IaC & CI/CD',
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Terraform', icon: SiTerraform, level: 'Advanced' },
        { name: 'GitHub Actions', icon: SiGithubactions, level: 'Advanced' },
      ],
    },
    {
      title: 'Programming',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Golang', icon: SiGo, level: 'Intermediate' },
        { name: 'Python', icon: SiPython, level: 'Intermediate' },
      ],
    },
    {
      title: 'ML/AI',
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'LLMs', icon: SiTensorflow, level: 'Intermediate' },
        { name: 'TensorFlow', icon: SiTensorflow, level: 'Intermediate' },
      ],
    },
  ]

  const k8sAddons = [
    'NGINX Ingress', 'Istio', 'Kong', 'Cluster Autoscaler', 'Karpenter', 
    'VPA', 'HPA', 'KEDA', 'Velero', 'EBS CSI', 'EFS CSI', 'MinIO', 
    'Kyverno', 'External Secrets Operator', 'Cert-Manager', 'ArgoCD', 
    'Argo Rollouts', 'FluxCD', 'Kured', 'Node Problem Detector', 
    'Metrics Server', 'Kubecost', 'Datadog Operator', 'ECK', 'RabbitMQ Operator',
    'Postgres Operator', 'Prometheus Stack', 'Grafana', 'Alertmanager', 'Loki'
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-800 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Expertise across the cloud-native ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass dark:glass-dark p-6 rounded-2xl card-hover animate-scale"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass dark:glass-dark p-8 rounded-3xl card-hover">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Kubernetes Add-ons & Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Hands-on experience with <span className="font-bold text-gradient">30+ production-grade</span> Kubernetes add-ons
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {k8sAddons.map((addon, index) => (
              <span
                key={addon}
                className="px-4 py-2 glass dark:glass-dark rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform cursor-default border border-indigo-200 dark:border-indigo-800 animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {addon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
