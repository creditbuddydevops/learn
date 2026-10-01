# CreditBuddy Learn

**Financial literacy platform by CREDITBUDDY PARTNERS PRIVATE LIMITED**

Master credit scores, loan underwriting, interest rates, and debt management — without the banking jargon.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Auth | Firebase Authentication (Google OAuth + Email/Password) |
| Database | Cloud Firestore |
| Security | reCAPTCHA Enterprise |
| Styling | Tailwind CSS |
| Deployment | Vercel |

## Features

- **Role-based access** — Student, Moderator, and Admin dashboards
- **Google sign-in** with Firebase Auth
- **reCAPTCHA Enterprise** protection on all auth flows
- **Course tracks** — Credit Score Mastery, Loan Math & Underwriting, Debt Payoff & Cashflow, and more
- **Privacy-first** — all secrets in environment variables, never hardcoded
- **SEO optimized** — structured data, Open Graph, meta tags, sitemap, robots.txt

## Getting started

### Prerequisites

- Node.js 18+
- npm 9+
- A Firebase project with Authentication and Firestore enabled

### Setup

```bash
# Clone the repo
git clone https://github.com/creditbuddydevops/learn.git
cd learn

# Install dependencies
npm install

# Create your environment file
cp .env.example .env.local
# Fill in your Firebase and reCAPTCHA keys (see below)

# Start the dev server
npm run dev
```

### Environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=learn.creditbuddy.org.in
NEXT_PUBLIC_FIREBASE_PROJECT_ID=learn-creditbuddy
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

> **Important:** Never commit `.env.local` — it is already in `.gitignore`.

## Project structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── dashboard/        # Student/Moderator/Admin dashboard
│   ├── login/            # Auth page (Google + Email)
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── werk/             # Course tracks
│   └── ...
├── components/           # Reusable UI components
├── context/              # React context providers (Auth)
├── hooks/                # Custom hooks (reCAPTCHA, etc.)
└── lib/                  # Firebase config and utilities
```

## User roles

| Role | Access |
|------|--------|
| **Student** | Default role. Access to enrolled courses, progress tracking, learning materials |
| **Moderator** | Manages curriculum content and reviews student submissions |
| **Admin** | Full platform access — user management, content, settings |

All users start as Students. Admins can promote users from the dashboard.

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## License

Proprietary — © 2024–2026 CREDITBUDDY PARTNERS PRIVATE LIMITED. All rights reserved.
