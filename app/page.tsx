"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Moon, Sun, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-8 w-8 rounded-full bg-primary"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block font-bold text-xl"
              >
                NexusAI
              </motion.span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full hidden md:flex">
              Log in
            </Button>
            <Button size="sm" className="rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <LogoSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://framerusercontent.com/assets/jm7WGkaOefOXB61tZjv7cUhEsVE.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm dark:bg-background/70"></div>
      </div>

      <div className="container relative z-10 pt-20 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* <Badge className="mb-4 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border-primary/20">
              AI-Powered Productivity
            </Badge> */}
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform your workflow with <span className="text-primary">intelligent automation</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NexusAI learns your patterns, automates repetitive tasks, and helps you focus on what matters most.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function LogoSection() {
  return (
    <section className="py-12 border-y border-border/40">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">Trusted by innovative teams worldwide</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {["Acme", "Globex", "Stark", "Wayne", "Umbrella"].map((company) => (
            <div key={company} className="text-muted-foreground/60 font-semibold text-lg">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          title="Designed for modern workflows"
          description="Our platform offers a comprehensive suite of tools designed to streamline your workflow and enhance collaboration."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/30">
      <div className="container">
        <SectionHeading title="How it works" description="Get started in minutes with our simple three-step process." />
        <div className="grid gap-12 md:grid-cols-3 mt-16">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          title="What our users say"
          description="Hear from the teams that use NexusAI to transform their productivity."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          title="Simple, transparent pricing"
          description="Choose the plan that's right for you"
        />
        <div className="grid gap-8 md:grid-cols-3 mt-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to transform your workflow?</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground text-lg">
              Join thousands of satisfied users who have boosted their productivity with NexusAI.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button size="lg" className="rounded-full px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:max-w-xs">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-primary" />
              <span className="font-bold text-xl">NexusAI</span>
            </div>
            <p className="text-muted-foreground text-sm">
              NexusAI is an AI-powered productivity platform that helps teams work smarter, not harder.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="font-medium">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NexusAI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

// Reusable Components
function SectionHeading({ title, description }) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{title}</h2>
        {description && <p className="text-muted-foreground text-lg">{description}</p>}
      </motion.div>
    </div>
  )
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <Card className="relative overflow-hidden">
        <CardContent className="p-6">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function StepCard({ step, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="mb-6 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold mx-auto">
        {index + 1}
      </div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-muted-foreground">{step.description}</p>
    </motion.div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="border border-border/40 bg-background/60 backdrop-blur-sm hover:border-primary/20 transition-all duration-300 h-full rounded-xl">
        <CardContent className="p-6">
          <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function PricingCard({ plan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <Card className={cn(
        "relative overflow-hidden",
        plan.featured && "border-primary shadow-lg"
      )}>
        <CardContent className="p-6">
          {plan.featured && (
            <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-sm text-primary-foreground rounded-bl-lg">
              Popular
            </div>
          )}
          <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-3xl font-bold">${plan.price}</span>
            <span className="text-muted-foreground">/month</span>
          </div>
          <p className="text-muted-foreground mb-4">{plan.description}</p>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
            {plan.buttonText}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Data
const features = [
  {
    title: "AI-Powered Automation",
    description: "Automate repetitive tasks and workflows with our intelligent AI that learns your patterns.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Smart Integrations",
    description: "Connect with your favorite tools and services for a seamless workflow experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    title: "Advanced Analytics",
    description: "Gain insights into your productivity patterns with detailed analytics and reports.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    title: "Collaborative Workspace",
    description: "Work together with your team in real-time with our collaborative workspace features.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Secure Data Storage",
    description: "Keep your data safe and secure with our enterprise-grade security measures.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it with our round-the-clock customer support team.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
      </svg>
    ),
  },
]

const steps = [
  {
    title: "Sign Up",
    description: "Create your account in seconds and get immediate access to the platform.",
  },
  {
    title: "Connect Your Tools",
    description: "Integrate with your existing tools and services with our one-click connectors.",
  },
  {
    title: "Start Automating",
    description: "Let our AI learn your patterns and start automating your repetitive tasks.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "NexusAI has completely transformed how our marketing team operates. We've saved countless hours on repetitive tasks.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "The collaborative features have made it so much easier to coordinate with our remote team members across different time zones.",
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    content:
      "As a freelancer, keeping track of multiple projects used to be a nightmare. NexusAI has simplified my workflow immensely.",
  },
]

const pricingPlans = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for individuals and small projects.",
    features: ["AI-powered automation", "Basic analytics", "5 GB storage", "Email support"],
    buttonText: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    price: 29,
    description: "Ideal for professionals and growing teams.",
    features: [
      "Everything in Starter",
      "Advanced analytics",
      "25 GB storage",
      "Priority support",
      "Team collaboration",
    ],
    buttonText: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For organizations with advanced needs.",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced security",
    ],
    buttonText: "Contact Sales",
    featured: false,
  },
]

