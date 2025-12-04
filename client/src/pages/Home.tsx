import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Users, BookOpen, Award, Star, Quote } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { STATS, REVIEWS, STUDY_MATERIALS } from "@/data/mockData";
import generatedCampus from "@assets/generated_images/modern_educational_institute_campus_with_lush_greenery.png";
import generatedLibrary from "@assets/generated_images/students_studying_in_a_modern_library.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={generatedCampus} 
            alt="Bidya Bandana Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-accent">
              <Star size={14} className="fill-accent" />
              <span>Excellence in Education since 2008</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Shaping Future <br/>
              <span className="text-accent">Leaders</span> & Innovators
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed">
              Premier coaching for NEET, JEE, and CBSE XI-XII. A holistic approach to education that blends academic rigor with character building.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/study-materials">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-accent text-accent-foreground hover:bg-accent/90 border-none">
                  Explore Materials
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Stats Card - Only visible on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl max-w-md ml-auto">
              <h3 className="text-white font-serif text-2xl mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      {idx === 0 && <Award size={24} />}
                      {idx === 1 && <Users size={24} />}
                      {idx === 2 && <BookOpen size={24} />}
                      {idx === 3 && <Star size={24} />}
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Teaser */}
      <Section background="default">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <img 
              src={generatedLibrary} 
              alt="Students in Library" 
              className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold text-primary">
              More Than Just A Coaching Centre
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Bidya Bandana Concept School is a day-cum-residential school dedicated to nurturing young minds for competitive exams like NEET and JEE while ensuring a strong foundation in CBSE curriculum.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Experienced Faculty from IITs & NITs",
                "Personalized Doubt Clearing Sessions",
                "Comprehensive Study Material",
                "Holistic Development Focus"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Link href="/about">
                <Button variant="ghost" className="group text-primary pl-0 hover:pl-2 transition-all text-lg">
                  Read Our Story <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Materials */}
      <Section background="muted">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Featured Study Resources</h2>
          <p className="text-muted-foreground">
            Access high-quality notes, worksheets, and previous year questions curated by our expert faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STUDY_MATERIALS.slice(0, 3).map((material) => (
            <Card key={material.id} className="group hover:-translate-y-1 transition-transform duration-300 border-none shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={material.thumbnail} 
                  alt={material.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {material.subject}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-xs font-medium text-accent mb-2 uppercase tracking-wide">{material.class} • {material.category}</div>
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{material.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{material.description}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/study-materials">
            <Button size="lg" className="rounded-full">View All Materials</Button>
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="default">
        <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">What Parents & Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl border border-border shadow-sm relative">
              <Quote className="absolute top-6 right-6 text-accent/20 h-12 w-12" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6 leading-relaxed">"{review.content}"</p>
              <div>
                <p className="font-bold text-primary">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary" className="text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Start Your Journey?</h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
          Join Bidya Bandana Concept School and give your child the competitive edge they deserve.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 h-14 text-lg">
            Enquire Now
          </Button>
        </Link>
      </Section>
    </div>
  );
}
