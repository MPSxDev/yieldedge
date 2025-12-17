# Yieldge - Technology that Performs

**Real-Estate Technology Partner** specializing in web services, cloud infrastructure, and AI automation for the real-estate industry.

## Overview

Yieldge is a comprehensive landing page showcasing technology solutions designed specifically for real-estate professionals. The platform helps real-estate businesses:

- Generate and qualify leads automatically
- Streamline property management operations
- Make data-driven investment decisions
- Reduce administrative overhead
- Increase conversion rates

## Key Features

- **AI-Powered Lead Qualification**: Automated lead capture and nurturing systems
- **Property Management Automation**: Tenant management, rent collection, and maintenance tracking
- **Market Analytics**: Predictive pricing and investment opportunity identification
- **24/7 Support Systems**: Round-the-clock lead capture and customer support
- **Custom Integrations**: Tailored solutions for real-estate workflows

## Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image with AVIF/WebP support
- **Scheduling**: Calendly integration

## Performance Optimizations

- Dynamic imports with lazy loading for below-the-fold components
- Optimized image formats (AVIF, WebP)
- Code splitting and package import optimization
- Responsive image sizing for different devices
- Compression enabled

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/zleypner/yieldedge.git

# Navigate to project directory
cd yieldedge

# Install dependencies
npm install
```

### Development

```bash
# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
yieldedge/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Services.tsx      # Services showcase
│   │   ├── WhyChooseUs.tsx   # Value propositions
│   │   ├── Process.tsx       # How it works
│   │   ├── CaseStudies.tsx   # Success stories
│   │   ├── FAQ.tsx           # Frequently asked questions
│   │   ├── FinalCTA.tsx      # Call-to-action section
│   │   ├── Footer.tsx        # Footer
│   │   └── ui/
│   │       └── Container.tsx # Container wrapper
│   └── public/
│       ├── brand/            # Logo assets
│       └── assets/           # Images and media
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Key Components

### Navbar
- Responsive navigation with mobile menu
- Smooth scroll to sections
- CTA button for scheduling consultations

### Hero
- Eye-catching headline and value proposition
- Dual CTA buttons (Initial Review & How It Works)
- High-quality imagery

### Services
- Three core service offerings
- Icon-based visual representation
- Detailed feature descriptions

### Process
- 4-step implementation process
- Visual timeline with images
- Clear deliverables for each phase

### Case Studies
- Real-world success stories
- Expandable cards with detailed results
- Industry-specific metrics

### FAQ
- Common questions and answers
- Expandable accordion interface
- Real-estate focused content

## Customization

### Colors
Update brand colors in `tailwind.config.ts`:
```typescript
colors: {
  blue: { /* your blue shades */ },
  gray: { /* your gray shades */ },
}
```

### Content
Edit component files in `src/components/` to update:
- Headlines and copy
- Service descriptions
- Case study details
- FAQ questions

### Images
Replace images in `public/assets/` with your own:
- Maintain aspect ratios for best results
- Use high-quality images (1920px+ width recommended)
- Optimize images before adding to project

## Deployment

### Vercel (Recommended)

```bash
# Deploy to Vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted with Docker

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Add any API keys or configuration here
NEXT_PUBLIC_CALENDLY_URL=your_calendly_url
```

## Contact

For consultations or inquiries:
- Website: [Schedule a Consultation](https://calendly.com/anwar-softwaredev)
- Email: contact@yieldge.com

## License

All rights reserved © 2025 Yieldge

---

Built with Next.js, TypeScript, and Tailwind CSS
