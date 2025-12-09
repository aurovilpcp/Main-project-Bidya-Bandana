import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, CheckCircle } from "lucide-react";
import generatedLibrary from "@assets/generated_images/students_studying_in_a_modern_library.png";
import directorPhoto from "@assets/image_1765267969259.png";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <div className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
         <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-5xl font-serif font-bold mb-6">About Our Institute</h1>
           <p className="text-xl text-white/80 max-w-2xl mx-auto">
             Dedicated to excellence, integrity, and the holistic development of every student.
           </p>
         </div>
      </div>

      {/* Main Content */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="space-y-6 order-2 md:order-1">
             <h2 className="text-3xl font-serif font-bold text-primary">Our Vision & Mission</h2>
             <p className="text-muted-foreground leading-relaxed">
               At Bidya Bandana Concept School, we believe that education is not just about rote learning but about understanding concepts deeply. Our mission is to provide world-class coaching for competitive exams like NEET and JEE while ensuring that students excel in their board examinations.
             </p>
             <p className="text-muted-foreground leading-relaxed">
               We strive to create an environment where curiosity is encouraged, and every student is given the personal attention they need to succeed.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
               {[
                 "Student-Centric Approach",
                 "Concept-Based Learning", 
                 "Regular Assessment",
                 "Holistic Development"
               ].map((item) => (
                 <div key={item} className="flex items-center gap-3 font-medium text-foreground">
                   <CheckCircle size={20} className="text-secondary-foreground" />
                   {item}
                 </div>
               ))}
             </div>
           </div>
           <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform rotate-3" />
              <img 
                src={generatedLibrary} 
                alt="About Us" 
                className="relative rounded-2xl shadow-lg w-full object-cover aspect-square"
              />
           </div>
        </div>
      </Section>

      {/* Director's Message */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="bg-primary p-8 flex flex-col justify-center items-center text-center text-white">
                <div className="h-40 w-40 rounded-full bg-white/20 mb-4 overflow-hidden">
                  <img src={directorPhoto} alt="Director" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-1">Bidya Sagar Parida</h3>
                <p className="text-sm text-white/70">Professor of Mathematics</p>
                <p className="text-xs text-white/50 mt-1">Director</p>
              </div>
              <div className="md:col-span-2 p-8 md:p-12 bg-white">
                <Quote className="text-accent/30 h-12 w-12 mb-4" />
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">From the Director's Desk</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Success is not a destination, but a journey. At Bidya Bandana, we guide students through this journey with discipline, dedication, and the right mentorship. Our focus on mathematics and sciences builds a strong analytical foundation that serves students for a lifetime."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We welcome you to join our family and experience the difference in our teaching methodology.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  );
}
