"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, DollarSign, ChevronRight, Filter, Building2 } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const jobListings = [
  {
    id: 1,
    title: "Senior Product Manager",
    company: "TechVentures Inc.",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    posted: "2 days ago",
    category: "Product",
    description: "Lead product strategy and roadmap for our flagship SaaS platform. Work closely with engineering, design, and business teams.",
    tags: ["Product Strategy", "SaaS", "Leadership"],
  },
  {
    id: 2,
    title: "Director of Marketing",
    company: "GrowthScale",
    location: "Remote",
    type: "Full-time",
    salary: "$150,000 - $190,000",
    posted: "1 week ago",
    category: "Marketing",
    description: "Drive marketing strategy and lead a team of marketing professionals. Experience in B2B SaaS marketing required.",
    tags: ["B2B", "Team Leadership", "Digital Marketing"],
  },
  {
    id: 3,
    title: "VP of Engineering",
    company: "InnovateTech",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$220,000 - $280,000",
    posted: "3 days ago",
    category: "Engineering",
    description: "Lead our engineering organization and drive technical excellence. Build and scale high-performing engineering teams.",
    tags: ["Engineering Leadership", "Architecture", "Team Building"],
  },
  {
    id: 4,
    title: "HR Business Partner",
    company: "PeopleFirst Co.",
    location: "Dallas, TX",
    type: "Full-time",
    salary: "$95,000 - $120,000",
    posted: "5 days ago",
    category: "Human Resources",
    description: "Partner with business leaders to drive HR initiatives, talent development, and organizational effectiveness.",
    tags: ["HR Strategy", "Talent Development", "Employee Relations"],
  },
  {
    id: 5,
    title: "Financial Controller",
    company: "Capital Partners",
    location: "Houston, TX",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    posted: "1 day ago",
    category: "Finance",
    description: "Oversee all financial operations, reporting, and compliance. CPA required with 7+ years of experience.",
    tags: ["Financial Reporting", "CPA", "Compliance"],
  },
  {
    id: 6,
    title: "Sales Director",
    company: "SalesForce Pro",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$160,000 - $200,000 + Commission",
    posted: "4 days ago",
    category: "Sales",
    description: "Lead regional sales team and drive revenue growth. Proven track record in enterprise software sales required.",
    tags: ["Enterprise Sales", "Team Leadership", "Revenue Growth"],
  },
];

const categories = ["All", "Product", "Marketing", "Engineering", "Human Resources", "Finance", "Sales"];
const locations = ["All Locations", "Remote", "Austin, TX", "San Francisco, CA", "Dallas, TX", "Houston, TX", "Chicago, IL"];

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobListings.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-brand-navy">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal-dark/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6">
              Find your <span className="italic text-brand-yellow">next opportunity</span>
            </h1>
            <p className="text-brand-cream/70 text-lg mb-10">
              Explore curated positions from companies that value talent and culture fit as much as you do.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-brand-cream/50 rounded-xl">
                <Search className="text-brand-navy/40" size={20} />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-brand-navy placeholder:text-brand-navy/40"
                />
              </div>
              <Button className="h-12 px-8">Search Jobs</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-brand-navy/10 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Filter className="text-brand-navy/40 flex-shrink-0" size={18} />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                      selectedCategory === category
                        ? "bg-brand-navy text-white"
                        : "bg-brand-cream text-brand-navy hover:bg-brand-navy/10"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 rounded-xl border border-brand-navy/20 bg-white text-brand-navy text-sm outline-none focus:border-brand-navy"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 md:py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-brand-navy/70">
              Showing <span className="font-bold text-brand-navy">{filteredJobs.length}</span> positions
            </p>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-brand-red/20 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-brand-teal-light flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-7 h-7 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl text-brand-navy group-hover:text-brand-red transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-brand-navy/70 font-medium">{job.company}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="self-start md:self-center group-hover:bg-brand-navy group-hover:text-white">
                    Apply Now <ChevronRight size={16} />
                  </Button>
                </div>

                <p className="text-brand-navy/70 mb-4 leading-relaxed">{job.description}</p>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-brand-navy/60">
                    <MapPin size={16} />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-navy/60">
                    <Briefcase size={16} />
                    {job.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-navy/60">
                    <DollarSign size={16} />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-navy/60">
                    <Clock size={16} />
                    {job.posted}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-navy text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-brand-navy/5 flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-brand-navy/30" />
              </div>
              <h3 className="font-serif text-2xl text-brand-navy mb-2">No jobs found</h3>
              <p className="text-brand-navy/60">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <SectionHeading subtitle="Don't see the right fit?" centered>
            Let us find it <br /> for you
          </SectionHeading>
          <p className="text-brand-navy/70 text-lg mb-10 max-w-2xl mx-auto">
            Submit your resume and let our recruiters match you with opportunities that align with your skills and career goals. Many of our best positions are never publicly posted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="h-14 px-10 text-lg">Submit Your Resume</Button>
            <Button variant="outline" className="h-14 px-10 text-lg">
              Set Up Job Alerts
            </Button>
          </div>
        </div>
      </section>

      {/* Zoho Integration Placeholder */}
      <section className="py-8 bg-brand-teal-light/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border-2 border-dashed border-brand-navy/20 text-center">
            <p className="text-brand-navy/60 text-sm">
              <strong>Developer Note:</strong> This section will integrate with Zoho Recruit via iframe once the account is set up.
              The job listings above are temporary demo data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
