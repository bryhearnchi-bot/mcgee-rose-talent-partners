"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Briefcase, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

function ServiceCard({ icon: Icon, title, description, colorClass }: { icon: React.ElementType; title: string; description: string; colorClass: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-brand-pink/50 transition-all duration-300 relative overflow-hidden group"
    >
      <div className={cn("absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 transition-all duration-300 group-hover:scale-150", colorClass)} />
      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg", colorClass)}>
        <Icon size={24} />
      </div>
      <h3 className="font-serif text-xl md:text-2xl text-brand-navy mb-3 md:mb-4">{title}</h3>
      <p className="text-brand-navy/70 leading-relaxed text-sm md:text-base">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, role, bgClass }: { quote: string; author: string; role: string; bgClass: string }) {
  return (
    <div className={cn("p-8 rounded-[2rem] relative", bgClass)}>
      <div className="absolute top-8 left-8 text-6xl font-serif text-brand-navy/10 pointer-events-none">&ldquo;</div>
      <p className="font-serif text-lg text-brand-navy mb-6 relative z-10 leading-relaxed italic">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center font-bold text-brand-navy">
          {author[0]}
        </div>
        <div>
          <div className="font-bold text-brand-navy text-sm">{author}</div>
          <div className="text-brand-navy/60 text-xs uppercase tracking-wider">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/rotate1.jpeg",
    "/rotate2.jpg",
    "/rotate3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-teal-light/30 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/4 translate-x-1/4 -z-10" />
        <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-yellow/20 rounded-full blur-[40px] md:blur-[80px] translate-y-1/4 -translate-x-1/4 -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="max-w-3xl order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4 md:mb-6"
              >
                <span className="h-px w-8 md:w-12 bg-brand-red" />
                <span className="font-sans text-brand-red font-bold tracking-widest uppercase text-xs md:text-sm">Boutique Recruiting</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl lg:text-7xl text-brand-teal font-bold leading-[1.1] mb-6 md:mb-8"
              >
                Finding your <br />
                <span className="relative italic text-brand-red pr-4">
                  perfect match
                  <svg className="absolute -bottom-2 left-0 w-full h-3 md:h-4 text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>{" "}
                <br />
                in business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-brand-navy/70 max-w-xl mb-8 md:mb-10 leading-relaxed"
              >
                McGee Rose Talent Partners connects exceptional talent with visionary companies. We bring a human touch to the recruiting process.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button href="/clients" className="h-12 md:h-14 px-8 text-base md:text-lg">
                  Find Talent <ArrowRight size={18} />
                </Button>
                <Button href="/jobs" variant="outline" className="h-12 md:h-14 px-8 text-base md:text-lg">
                  Find a Job
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center relative order-1 md:order-2 mb-8 md:mb-0"
            >
              <div className="relative z-10 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 border-4 border-white/50 w-[280px] h-[350px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    src={heroImages[currentImageIndex]}
                    alt="Recruiting moments"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              <div className="absolute -inset-4 bg-brand-yellow/30 rounded-[3.5rem] -rotate-2 -z-10 scale-90 md:scale-100" />
              <div className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 bg-white p-4 md:p-6 rounded-2xl shadow-lg max-w-[200px] md:max-w-xs animate-bounce-slow z-20">
                <div className="flex items-center gap-2 md:gap-3 mb-2">
                  <div className="flex -space-x-2 md:-space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                  </div>
                  <div className="text-brand-navy font-bold text-sm md:text-base">15+ Years</div>
                </div>
                <p className="text-[10px] md:text-xs text-brand-navy/60">Of recruiting expertise at your service.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About/Introduction */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-brand-teal-light/20 rounded-[3rem] rotate-3 -z-10" />
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/infographic.png"
                  alt="McGee Rose Infographic"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-cream p-6 rounded-full shadow-xl animate-bounce-slow">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-brand-red flex items-center justify-center p-2 text-center">
                  <span className="font-script text-brand-navy text-xl leading-none -rotate-12 block">We love<br />people!</span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <SectionHeading subtitle="Who we are">
                More than just <br /> another agency
              </SectionHeading>

              <p className="text-brand-navy/80 text-base md:text-lg mb-6 leading-relaxed">
                We believe that recruiting is an art form. It&apos;s not just about filling a seat; it&apos;s about finding the missing piece of the puzzle that makes the whole picture come alive.
              </p>
              <p className="text-brand-navy/80 text-base md:text-lg mb-8 leading-relaxed">
                Founded on the principles of integrity, transparency, and genuine connection, McGee Rose Talent Partners brings a fresh, personalized approach to the hiring landscape.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Personalized placement strategies",
                  "Deep industry knowledge & networks",
                  "Commitment to long-term success",
                  "Boutique service with enterprise results",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-navy font-medium text-sm md:text-base">
                    <CheckCircle2 className="text-brand-teal-dark flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                Read our story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Segments */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <SectionHeading subtitle="Our Expertise" centered>
              Connecting the <br /> dots for everyone
            </SectionHeading>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={Briefcase}
              title="For Clients"
              description="We act as an extension of your brand, finding talent that aligns with your culture and drives your business forward."
              colorClass="bg-brand-teal-light"
            />
            <ServiceCard
              icon={Users}
              title="For Candidates"
              description="We're your career advocates, helping you navigate the job market to find roles where you can truly thrive and grow."
              colorClass="bg-brand-red"
            />
            <ServiceCard
              icon={MessageSquare}
              title="Consulting"
              description="Strategic advice on organizational structure, compensation benchmarking, and hiring best practices."
              colorClass="bg-brand-yellow"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-brand-teal-light/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-cream to-transparent" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="mb-8 md:mb-0">
              <SectionHeading subtitle="Success Stories">
                Don&apos;t just take <br /> our word for it
              </SectionHeading>
              <p className="text-brand-navy/70 text-base md:text-lg mb-8">
                We&apos;ve helped hundreds of professionals find their dream jobs and companies build their dream teams. Here&apos;s what they have to say about the McGee Rose experience.
              </p>
              <Button variant="secondary">View All Stories</Button>
            </div>

            <div className="grid gap-4 md:gap-6">
              <TestimonialCard
                quote="The most human recruiting experience I've ever had. They actually listened to what I wanted, not just what was available."
                author="Sarah Mitchell"
                role="Marketing Director placed at TechFlow"
                bgClass="bg-white shadow-sm rotate-2"
              />
              <TestimonialCard
                quote="McGee Rose understood our company culture immediately. The candidates they sent were all spot-on matches."
                author="James Wilson"
                role="CEO, Creative Agency"
                bgClass="bg-brand-blue/20 -rotate-1 translate-x-4 md:translate-x-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy text-white" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-red/20 rounded-full blur-[80px] md:blur-[120px] translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-brand-yellow mx-auto mb-4 md:mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white">Ready to find your perfect match?</h2>
          <p className="text-brand-blue/80 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto">
            Whether you&apos;re hiring or looking, we&apos;re here to make the process simple, personal, and successful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 h-12 md:h-14 px-8 md:px-10 text-base md:text-lg">Start Hiring</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy h-12 md:h-14 px-8 md:px-10 text-base md:text-lg">
              Submit Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
