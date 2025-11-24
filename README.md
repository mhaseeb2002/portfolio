# Cloud Engineer Portfolio

A production-grade, serverless portfolio website built to showcase cloud engineering expertise with Kubernetes, AWS, and modern web technologies.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Terraform](https://img.shields.io/badge/Terraform-1.6+-purple.svg)](https://www.terraform.io/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)](https://nextjs.org/)
[![Go](https://img.shields.io/badge/Go-1.21-cyan.svg)](https://golang.org/)

> **Live in 30 minutes** | **Costs ~$2/month** | **100% Serverless**

## 🚀 Quick Start

```bash
# 1. Build backend
cd backend && make build && cd ..

# 2. Deploy infrastructure
cd terraform && terraform init && terraform apply && cd ..

# 3. Deploy frontend
cd frontend && npm install && npm run build
aws s3 sync out/ s3://$(terraform output -raw s3_bucket_name)/ --delete
```

**[📖 Full Quick Start Guide →](QUICKSTART.md)**

## ✨ Features

- 🎨 Modern, responsive UI with dark mode
- 📊 Real-time visitor counter with DynamoDB
- 🔐 Production-grade security headers
- 📈 CloudWatch monitoring & alarms
- 💰 Cost-optimized (~$18/year with domain)
- ⚡ Lightning-fast CDN delivery
- 🔄 Automated CI/CD with GitHub Actions
- 🏗️ Infrastructure as Code with Terraform
- ♿ WCAG 2.1 AA accessible

## 🏗️ Architecture

```
┌─────────────┐     ┌─────────────┐     ┌──────────────┐
│   Route 53  │────▶│ CloudFront  │────▶│   S3 Bucket  │
│     DNS     │     │     CDN     │     │  (Frontend)  │
└─────────────┘     └─────────────┘     └──────────────┘
                           │
                           │ HTTPS
                           ▼
                    ┌─────────────┐     ┌──────────────┐
                    │ API Gateway │────▶│    Lambda    │
                    │   REST API  │     │  (Golang API)│
                    └─────────────┘     └──────┬───────┘
                                               │
                                               ▼
                                        ┌──────────────┐
                                        │  DynamoDB    │
                                        │ (NoSQL DB)   │
                                        └──────────────┘
```

**Tech Stack:**
- **Frontend:** Next.js 14 (SSG), TypeScript, Tailwind CSS
- **Backend:** Golang, AWS Lambda (provided.al2023)
- **Database:** DynamoDB (on-demand)
- **CDN:** CloudFront with OAC
- **IaC:** Terraform with modular design
- **CI/CD:** GitHub Actions (automated deploys)
- **Monitoring:** CloudWatch dashboards, alarms, logs

## 📁 Project Structure

```
portfolio/
├── frontend/                    # Next.js application
│   ├── src/
│   │   ├── app/                # App router (pages)
│   │   ├── components/         # React components
│   │   └── lib/                # API client, utilities
│   ├── package.json
│   └── next.config.js
├── backend/                     # Golang API
│   ├── cmd/api/main.go         # Lambda entrypoint
│   ├── internal/
│   │   ├── handler/            # HTTP handlers
│   │   ├── repository/         # DynamoDB operations
│   │   └── models/             # Data structures
│   ├── go.mod
│   └── Makefile
├── terraform/                   # Infrastructure as Code
│   ├── main.tf                 # Provider config
│   ├── s3.tf                   # Frontend hosting
│   ├── cloudfront.tf           # CDN
│   ├── lambda.tf               # Backend API
│   ├── api-gateway.tf          # API Gateway
│   ├── dynamodb.tf             # Database
│   ├── route53.tf              # DNS (optional)
│   ├── security.tf             # Security headers
│   ├── cloudwatch.tf           # Monitoring
│   └── variables.tf
├── .github/workflows/           # CI/CD pipelines
│   ├── deploy.yml              # Main deployment
│   ├── terraform.yml           # Infrastructure changes
│   └── test.yml                # PR tests
├── QUICKSTART.md               # 30-min deployment guide
├── DEPLOYMENT.md               # Full deployment guide
├── COST_ANALYSIS.md            # Detailed cost breakdown
└── README.md                   # This file
```

## 💰 Cost Breakdown

| Period | Monthly Cost | Annual Cost |
|--------|--------------|-------------|
| Year 1 (Free Tier) | $0.50 | $6 |
| Year 1 (with domain) | $1.50 | $18 |
| Year 2+ | $2.50 | $30 |

**What's included:**
- ✅ Unlimited bandwidth (within reason)
- ✅ Auto-scaling
- ✅ HTTPS with free SSL
- ✅ Global CDN
- ✅ Monitoring & logs
- ✅ 99.99% uptime SLA

[📊 Full Cost Analysis →](COST_ANALYSIS.md)

## 🚀 Deployment

### Prerequisites

- AWS Account (Free Tier eligible)
- AWS CLI configured
- Terraform >= 1.0
- Node.js 18+
- Go 1.21+

### Option 1: Manual Deployment (30 minutes)

Follow the [Quick Start Guide](QUICKSTART.md)

### Option 2: Automated CI/CD (5 minutes after setup)

1. Push to GitHub
2. Add GitHub Secrets (AWS credentials)
3. Push to `main` branch
4. Automated deployment!

[📖 Full Deployment Guide →](DEPLOYMENT.md)

## 🧪 Local Development

### Frontend

```bash
cd frontend
npm install
npm run dev
# Visit http://localhost:3000
```

### Backend (Local Testing)

```bash
cd backend
go mod download
go test ./...
docker build -t portfolio-api .
```

### Infrastructure Testing

```bash
cd terraform
terraform init
terraform plan
terraform validate
```

## 📊 Monitoring

### CloudWatch Dashboard

Access at: AWS Console → CloudWatch → Dashboards → `portfolio-dashboard`

Includes:
- Lambda invocations & errors
- API Gateway requests
- CloudFront traffic
- DynamoDB capacity

### Logs

```bash
# Lambda logs
aws logs tail /aws/lambda/portfolio-api --follow

# API Gateway logs
aws logs tail /aws/apigateway/portfolio-api --follow
```

### Cost Monitoring

```bash
# Current month costs
aws ce get-cost-and-usage \
  --time-period Start=$(date +%Y-%m-01),End=$(date +%Y-%m-%d) \
  --granularity MONTHLY \
  --metrics BlendedCost
```

## 🔒 Security

- ✅ All S3 buckets private (CloudFront OAC)
- ✅ HTTPS enforced (SSL/TLS via ACM)
- ✅ Security headers (CSP, HSTS, etc.)
- ✅ API rate limiting (100 req/min)
- ✅ DynamoDB encryption at rest
- ✅ Least-privilege IAM roles
- ✅ CloudWatch logging enabled
- ✅ No hardcoded secrets

## 🧪 Testing

### Backend Tests

```bash
cd backend
go test -v -race -coverprofile=coverage.out ./...
```

### Frontend Build

```bash
cd frontend
npm run lint
npx tsc --noEmit
npm run build
```

### Infrastructure Validation

```bash
cd terraform
terraform fmt -check
terraform validate
```

## 📝 Customization

### Update Content

Edit files in `frontend/src/components/`:
- `Hero.tsx` - Hero section
- `About.tsx` - About section
- `Skills.tsx` - Skills list
- `Certifications.tsx` - Certifications
- `Projects.tsx` - Projects showcase

### Update Metadata

Edit `frontend/src/app/layout.tsx`:
- SEO title & description
- Open Graph tags
- Twitter cards

### Add Projects

Edit `frontend/src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Description here',
    tags: ['Kubernetes', 'AWS'],
    github: 'https://github.com/...',
    live: 'https://...',
  },
]
```

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📚 Documentation

- [Quick Start Guide](QUICKSTART.md) - Deploy in 30 minutes
- [Full Deployment Guide](DEPLOYMENT.md) - Detailed setup instructions
- [Cost Analysis](COST_ANALYSIS.md) - Complete cost breakdown
- [Frontend README](frontend/README.md) - Frontend-specific docs
- [Terraform README](terraform/README.md) - Infrastructure docs

## 🐛 Troubleshooting

### Build Issues

```bash
# Backend
cd backend && make clean && make build

# Frontend
cd frontend && rm -rf .next node_modules && npm install && npm run build
```

### Infrastructure Issues

```bash
cd terraform
terraform init -upgrade
terraform plan
```

### API Not Working

```bash
# Check Lambda logs
aws logs tail /aws/lambda/portfolio-api --follow

# Test API directly
curl https://<api-url>/health
```

[📖 More Troubleshooting →](DEPLOYMENT.md#troubleshooting)

## 🎯 Roadmap

- [x] Initial MVP
- [x] Terraform IaC
- [x] CI/CD with GitHub Actions
- [x] Monitoring & alerts
- [x] Cost optimization
- [ ] Staging environment
- [ ] A/B testing capability
- [ ] Blog section
- [ ] Contact form with SNS

## 👤 Author

**Muhammad Haseeb**  
Cloud Engineer | Kubernetes Specialist | CKA & CKAD Certified

- 💼 Software Engineer @ Stealth Startup
- 🎓 Electrical Engineering, NUST
- 🏆 CKA & CKAD Certified
- 🔧 30+ Kubernetes Add-ons Experience
- 🤖 ML/AI Enthusiast

**Connect:**
- LinkedIn: [muhammad-haseeb-613670212](https://www.linkedin.com/in/muhammad-haseeb-613670212/)
- Email: mhaseeb.bee20seecs@seecs.edu.pk
- Location: Lahore, Punjab, Pakistan

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## ⭐ Acknowledgments

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Terraform](https://www.terraform.io/)
- [AWS](https://aws.amazon.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with ❤️ and ☕ in Lahore, Pakistan**

If this helped you, give it a ⭐!

# portfolio
# portfolio
