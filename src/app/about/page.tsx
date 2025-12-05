"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Target, Users, Award, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Heart,
    title: "Human First",
    description: "We believe every candidate and client deserves to be treated as an individual, not a transaction.",
  },
  {
    icon: Target,
    title: "Precision Matching",
    description: "We don't just fill roles - we find the perfect fit that benefits both parties for the long term.",
  },
  {
    icon: Users,
    title: "Relationship Driven",
    description: "Our success is built on genuine relationships, trust, and open communication.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description: "We hold ourselves to the highest standards in everything we do, from first contact to placement.",
  },
];

const team = [
  {
    name: "Jenn Young",
    role: "Founder & Principal",
    bio: "With over 15 years of recruiting experience, Jenn founded McGee Rose Talent Partners in 2024 to bring a more personal, boutique approach to talent acquisition. Her deep industry relationships and human-first philosophy set the foundation for lasting partnerships.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] bg-brand-yellow/20 rounded-full blur-[100px] md:blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <span className="h-px w-12 bg-brand-red" />
              <span className="text-brand-red font-bold tracking-widest uppercase text-sm">Our Story</span>
              <span className="h-px w-12 bg-brand-red" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-teal font-bold leading-[1.1] mb-6"
            >
              Built on <span className="italic text-brand-red">relationships</span>, <br />
              not transactions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-brand-navy/70 leading-relaxed"
            >
              McGee Rose Talent Partners was founded with a simple belief: recruiting should feel personal. 
              We&apos;re not a factory churning out candidates - we&apos;re matchmakers who take pride in 
              creating lasting professional relationships.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-red/10 rounded-[3rem] rotate-3 -z-10" />
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div>
              <SectionHeading subtitle="How It Started">
                A different kind <br /> of recruiting firm
              </SectionHeading>

              <div className="space-y-6 text-brand-navy/80 leading-relaxed">
                <p>
                  After 15+ years working in talent acquisition at major recruiting firms, our founder Jenn Young 
                  saw a gap in the industry. Candidates were being treated like commodities, and companies were 
                  receiving stacks of resumes that didn&apos;t truly fit their needs.
                </p>
                <p>
                  In 2024, she launched McGee Rose Talent Partners with a mission to change that. We take fewer 
                  clients, spend more time understanding each role, and only present candidates we genuinely 
                  believe will thrive.
                </p>
                <p>
                  Backed by over a decade and a half of recruiting expertise, deep industry relationships, and 
                  a track record of successful placements, McGee Rose brings enterprise-level experience with 
                  a boutique, personalized approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading subtitle="Our Values" centered>
              What drives <br /> everything we do
            </SectionHeading>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-3xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-brand-red" />
                </div>
                <h3 className="font-serif text-xl text-brand-navy mb-3">{value.title}</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionHeading subtitle="Meet The Team" centered>
              The people behind <br /> McGee Rose
            </SectionHeading>
            <p className="text-brand-navy/70 text-lg">
              With 15+ years of recruiting experience, Jenn brings a wealth of knowledge and genuine passion 
              for connecting great people with great opportunities.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  <div className="aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-serif text-2xl text-brand-navy mb-1">{member.name}</h3>
                <p className="text-brand-red font-medium text-sm uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-brand-navy/70 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-brand-teal-light/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading subtitle="Get In Touch">
                Let&apos;s start <br /> a conversation
              </SectionHeading>
              <p className="text-brand-navy/70 text-lg mb-8">
                Whether you&apos;re looking for talent or looking for your next opportunity, we&apos;d love to hear from you.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-brand-navy">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-navy/60">Email us</div>
                    <div className="font-medium">hello@mcgeerose.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-brand-navy">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-navy/60">Call us</div>
                    <div className="font-medium">(512) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-brand-navy">
                  <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-navy/60">Visit us</div>
                    <div className="font-medium">Austin, Texas</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <h3 className="font-serif text-2xl text-brand-navy mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/20 outline-none focus:border-brand-red transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/20 outline-none focus:border-brand-red transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-brand-navy/20 outline-none focus:border-brand-red transition-colors"
                />
                <select className="w-full px-4 py-3 rounded-xl border border-brand-navy/20 outline-none focus:border-brand-red transition-colors text-brand-navy/60">
                  <option>I&apos;m a candidate</option>
                  <option>I&apos;m a client</option>
                  <option>General inquiry</option>
                </select>
                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-brand-navy/20 outline-none focus:border-brand-red transition-colors resize-none"
                />
                <Button className="w-full h-14 text-lg">
                  Send Message <ArrowRight size={18} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
