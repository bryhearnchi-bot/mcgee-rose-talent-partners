"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Upload, Search, MessageSquare, Award, Heart, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Upload,
    title: "Submit Your Resume",
    description: "Share your experience, skills, and career aspirations with us. We take time to understand your unique story.",
  },
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We'll have a personal conversation to understand your goals, preferences, and what you're truly looking for.",
  },
  {
    icon: Search,
    title: "Curated Opportunities",
    description: "We match you with positions that align with your skills, values, and career trajectory - not just any open role.",
  },
  {
    icon: Award,
    title: "Interview Support",
    description: "We prepare you for interviews, provide feedback, and advocate for you throughout the entire process.",
  },
];

const benefits = [
  "Access to exclusive, unadvertised positions",
  "Personalized career guidance and coaching",
  "Salary negotiation support",
  "Confidential job search assistance",
  "Long-term career partnership",
  "Industry insights and market trends",
];

export default function CandidatesPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-brand-red/10 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 -translate-x-1/4 -z-10" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-yellow/20 rounded-full blur-[60px] md:blur-[100px] translate-y-1/4 translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="h-px w-12 bg-brand-red" />
                <span className="text-brand-red font-bold tracking-widest uppercase text-sm">For Candidates</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-teal font-bold leading-[1.1] mb-6"
              >
                Your career <br />
                <span className="italic text-brand-red">advocate</span> is here
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-brand-navy/70 mb-8 leading-relaxed"
              >
                We don&apos;t just find you a job - we help you build a career. Our personalized approach means we take the time to understand your goals, values, and what truly makes you tick.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="h-14 px-8 text-lg">
                  Submit Resume <ArrowRight size={18} />
                </Button>
                <Button href="/jobs" variant="outline" className="h-14 px-8 text-lg">
                  Browse Jobs
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                  alt="Professionals collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-teal-light flex items-center justify-center">
                    <Heart className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">15+ Years</div>
                    <div className="text-sm text-brand-navy/60">of recruiting expertise</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading subtitle="How It Works" centered>
              Your journey <br /> with us
            </SectionHeading>
            <p className="text-brand-navy/70 text-lg">
              We&apos;ve streamlined the process to make your job search as smooth and stress-free as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-brand-cream p-6 rounded-3xl h-full">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-xl text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-brand-navy/70 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-navy/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-brand-teal-light/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading subtitle="Why Choose Us">
                More than just <br /> job placement
              </SectionHeading>
              <p className="text-brand-navy/70 text-lg mb-8">
                When you partner with McGee Rose, you get a dedicated team committed to your long-term career success, not just filling a position.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-brand-navy"
                  >
                    <CheckCircle2 className="text-brand-teal-dark flex-shrink-0" size={20} />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-brand-yellow/20 rounded-[3rem] rotate-3 -z-10" />
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80"
                  alt="Professional success"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <Briefcase className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">Ready to take the next step?</h2>
          <p className="text-brand-cream/70 text-lg mb-10 max-w-2xl mx-auto">
            Whether you&apos;re actively looking or just exploring options, we&apos;re here to help you find opportunities that align with your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 h-14 px-10 text-lg">Submit Your Resume</Button>
            <Button href="/jobs" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy h-14 px-10 text-lg">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
