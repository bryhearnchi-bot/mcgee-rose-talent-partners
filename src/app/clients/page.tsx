"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, Users, Clock, Shield, TrendingUp, Handshake } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Target,
    title: "Executive Search",
    description: "C-suite and senior leadership placements with discretion and precision. We find leaders who drive transformation.",
    color: "bg-brand-red",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Scale your teams with cohesive talent that fits your culture and accelerates your growth trajectory.",
    color: "bg-brand-teal-dark",
  },
  {
    icon: Clock,
    title: "Contract Staffing",
    description: "Flexible talent solutions for project-based needs, seasonal demands, or specialized short-term requirements.",
    color: "bg-brand-yellow",
  },
  {
    icon: Shield,
    title: "Retained Search",
    description: "Dedicated, exclusive partnerships for critical hires where quality and confidentiality are paramount.",
    color: "bg-brand-navy",
  },
];

const industries = [
  "Technology & SaaS",
  "Healthcare & Life Sciences",
  "Financial Services",
  "Manufacturing",
  "Professional Services",
  "Consumer Goods",
  "Energy & Utilities",
  "Non-Profit",
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Personalized Service" },
  { value: "Deep", label: "Industry Networks" },
  { value: "2024", label: "Founded" },
];

export default function ClientsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-brand-teal-light/40 rounded-full blur-[100px] md:blur-[150px] translate-x-1/3 -translate-y-1/4 -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-red/10 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/4 translate-y-1/4 -z-10" />

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
                <span className="text-brand-red font-bold tracking-widest uppercase text-sm">For Clients</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-teal font-bold leading-[1.1] mb-6"
              >
                Build your <br />
                <span className="italic text-brand-red">dream team</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-brand-navy/70 mb-8 leading-relaxed"
              >
                We become an extension of your team, deeply understanding your culture, values, and vision. Our boutique approach means you get personalized attention and candidates who truly fit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="h-14 px-8 text-lg">
                  Start Hiring <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="h-14 px-8 text-lg">
                  Schedule a Call
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
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
                  alt="Business team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-brand-navy" />
                  </div>
                  <div>
                    <div className="font-bold text-brand-navy">95% Retention</div>
                    <div className="text-sm text-brand-navy/60">after 12 months</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-serif text-4xl md:text-5xl font-bold text-brand-yellow mb-2">{stat.value}</div>
                <div className="text-brand-cream/70 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading subtitle="Our Services" centered>
              Tailored solutions <br /> for every need
            </SectionHeading>
            <p className="text-brand-navy/70 text-lg">
              From executive search to contract staffing, we offer flexible solutions designed to meet your unique hiring challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-brand-cream p-8 rounded-3xl group hover:shadow-xl transition-all duration-300"
              >
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white", service.color)}>
                  <service.icon size={28} />
                </div>
                <h3 className="font-serif text-2xl text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-navy/70 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-brand-teal-light/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-red/10 rounded-[3rem] -rotate-3 -z-10" />
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern office space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <SectionHeading subtitle="Industries We Serve">
                Deep expertise <br /> across sectors
              </SectionHeading>
              <p className="text-brand-navy/70 text-lg mb-8">
                Our team brings specialized knowledge across multiple industries, ensuring we understand the unique challenges and requirements of your sector.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 text-brand-navy"
                  >
                    <CheckCircle2 className="text-brand-teal-dark flex-shrink-0" size={18} />
                    <span className="text-sm font-medium">{industry}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading subtitle="Our Process" centered>
              How we <br /> work together
            </SectionHeading>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into understanding your company culture, team dynamics, and the specific qualities you need in your next hire.",
              },
              {
                step: "02",
                title: "Search & Screen",
                description: "Using our extensive network and rigorous vetting process, we identify and thoroughly evaluate candidates who match your criteria.",
              },
              {
                step: "03",
                title: "Present & Support",
                description: "We present a curated slate of candidates and support you through interviews, negotiations, and successful onboarding.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="font-serif text-6xl text-brand-yellow/30 mb-4">{item.step}</div>
                <h3 className="font-serif text-2xl text-brand-navy mb-4">{item.title}</h3>
                <p className="text-brand-navy/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-teal-dark/20 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <Handshake className="w-12 h-12 text-brand-yellow mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-white">Let&apos;s build something great together</h2>
          <p className="text-brand-cream/70 text-lg mb-10 max-w-2xl mx-auto">
            Ready to find talent that transforms your business? Let&apos;s start a conversation about your hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 h-14 px-10 text-lg">Schedule a Consultation</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy h-14 px-10 text-lg">
              Download Our Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
