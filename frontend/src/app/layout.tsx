import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://mhaseeb.dev'),
  title: 'Muhammad Haseeb | Cloud Engineer & Kubernetes Specialist',
  description: 'Cloud Engineer specializing in Kubernetes, AWS, and ML Infrastructure. CKA & CKAD Certified. Building scalable cloud-native applications.',
  keywords: 'Cloud Engineer, Kubernetes, AWS, DevOps, CKA, CKAD, MLOps, Terraform, ArgoCD',
  authors: [{ name: 'Muhammad Haseeb' }],
  openGraph: {
    title: 'Muhammad Haseeb | Cloud Engineer & Kubernetes Specialist',
    description: 'Cloud Engineer specializing in Kubernetes, AWS, and ML Infrastructure',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
