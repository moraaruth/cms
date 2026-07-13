Now let me gather evidence about the repository:# CDW - Car Dealer Website

## What this is
A full-stack Next.js web application for car dealerships with AI-powered features, admin dashboards, and customer management. It enables dealers to manage inventory, handle classified listings, engage customers through AI chatbots, and process file uploads to cloud storage.

### Stack
- **Language(s):** TypeScript
- **Framework / runtime:** Next.js 15 (canary) with React 19, Turbopack
- **Notable libraries:** Prisma (ORM with Accelerate), NextAuth 5 (authentication with 2FA), Vercel AI SDK (OpenAI integration), TinyMCE (rich text editing), Recharts (analytics), Radix UI + TailwindCSS (UI components)

## How it's organized
```
src/
  app/                    Next.js app router structure
    admin/               Dashboard & admin features (classifieds, customers, settings)
    (presentation)/      Public-facing pages
    _actions/            Server actions
    schemas/             Zod validation schemas
  components/            Reusable React components
  config/                Constants and route definitions
  hooks/                 Custom React hooks
  lib/                   Utility functions & services
    ai-utils.ts         AI/LLM integration helpers
    uploader.ts         File upload orchestration (S3 + thumbnails)
    s3.ts               AWS S3 client setup
    rate-limiter.ts     Upstash rate limiting
    otp.ts              2FA OTP handling
    bcrypt.ts           Password hashing
    prisma.ts           Database client singleton
prisma/
  schema/                Database schema definitions
  seed/                  Database seeding scripts
```

**How it fits together:** The app uses Next.js 15's App Router with server components and server actions. Authentication is handled by NextAuth 5 with credentials + email OTP providers, protecting `/admin` routes via middleware. The admin dashboard allows dealers to manage classifieds and customers. File uploads are handled by a multi-stage uploader that validates, generates thumbnails with thumbhash, and stores media in AWS S3. The Prisma ORM with Accelerate provides database access; rate limiting is enforced via Upstash Redis.

## How to run it
```bash
# Install dependencies (uses pnpm and bun lockfile)
pnpm install

# Set up environment variables
# Create a .env.local file with required secrets:
# - Database URL (Prisma)
# - NextAuth secrets
# - OpenAI API key
# - AWS S3 credentials
# - Resend API key (email service)
# - Upstash Redis URL

# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Seed database
pnpm prisma:seed
```

## Try asking
- "How does the 2FA/OTP flow work in the authentication system?"
- "What's the full process for uploading and storing images with thumbhash optimization?"
- "How are classified listings structured and what features do they support?"