import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, BookOpen, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CourseType {
  id: string;
  name: string;
  description: string;
  icon: string;
  duration: string;
  target: string;
  highlights: string[];
}

const COURSES: CourseType[] = [
  {
    id: "foundation",
    name: "Foundation/Boards",
    description: "Strong foundation for Class IX-X students preparing for board examinations and competitive entrance tests.",
    icon: "📚",
    duration: "2 Years",
    target: "Class IX-X Students",
    highlights: ["CBSE/ICSE curriculum", "Concept clarity focus", "Board exam preparation", "Foundation for competitive exams"]
  },
  {
    id: "jee",
    name: "JEE (Main & Advanced)",
    description: "Intensive coaching for engineering aspirants preparing for JEE Main and Advanced examinations.",
    icon: "⚙️",
    duration: "2 Years",
    target: "Class XI-XII Students",
    highlights: ["Comprehensive curriculum", "Mock tests & analysis", "Expert faculty", "100+ rank holders"]
  },
  {
    id: "neet",
    name: "NEET",
    description: "Specialized coaching for medical entrance examination with focus on Biology, Chemistry, and Physics.",
    icon: "🔬",
    duration: "2 Years",
    target: "Class XI-XII Students",
    highlights: ["Medical-focused approach", "NCERT mastery", "Regular assessments", "Success track record"]
  },
  {
    id: "olympiads",
    name: "Olympiads",
    description: "Training for national and international science and mathematics olympiad competitions.",
    icon: "🏆",
    duration: "1-2 Years",
    target: "Class VI-XII Students",
    highlights: ["Advanced problem solving", "Olympiad experts", "International standards", "Award winners"]
  },
  {
    id: "ouat",
    name: "OUAT & Agriculture",
    description: "Specialized coaching for Agriculture entrance examinations and related competitive tests.",
    icon: "🌾",
    duration: "1.5 Years",
    target: "Class XI-XII Students",
    highlights: ["Agriculture curriculum", "OUAT focused", "Expert guidance", "High success rate"]
  }
];

function EnrollModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    class: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.course && formData.class) {
      toast.success(`Enrollment request received for ${formData.name}! We'll contact you shortly.`);
      setFormData({ name: "", email: "", phone: "", course: "", class: "" });
      setIsOpen(false);
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
          Enroll Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enroll in Our Courses</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Select Course</Label>
            <select
              id="course"
              value={formData.course}
              onChange={(e) => setFormData({...formData, course: e.target.value})}
              className="w-full px-3 py-2 border border-input rounded-md bg-white text-sm"
              required
            >
              <option value="">Choose a course...</option>
              {COURSES.map(course => (
                <option key={course.id} value={course.name}>{course.name}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="class">Current Class</Label>
            <select
              id="class"
              value={formData.class}
              onChange={(e) => setFormData({...formData, class: e.target.value})}
              className="w-full px-3 py-2 border border-input rounded-md bg-white text-sm"
              required
            >
              <option value="">Select your class...</option>
              <option value="VI">Class VI</option>
              <option value="VII">Class VII</option>
              <option value="VIII">Class VIII</option>
              <option value="IX">Class IX</option>
              <option value="X">Class X</option>
              <option value="XI">Class XI</option>
              <option value="XII">Class XII</option>
            </select>
          </div>
          <Button type="submit" className="w-full bg-primary text-white rounded-full">
            Submit Enrollment Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Courses() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Courses</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive coaching programs designed for students at all levels, preparing them for competitive exams and board examinations.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <Section>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <Card key={course.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-8 space-y-4">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary">{course.name}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm py-4 border-y border-border">
                    <div>
                      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Duration</p>
                      <p className="font-semibold text-foreground">{course.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Target</p>
                      <p className="font-semibold text-foreground">{course.target}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Key Features</p>
                    <ul className="space-y-1">
                      {course.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Zap size={14} className="mt-0.5 text-accent shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <EnrollModal />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Our Courses */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif font-bold text-primary">Why Choose Our Courses?</h2>
            <p className="text-lg text-muted-foreground">Proven methodology and expert instruction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Expert Faculty", desc: "Experienced educators with proven track record", icon: "👨‍🏫" },
              { title: "Comprehensive Curriculum", desc: "Carefully designed content aligned with exam requirements", icon: "📖" },
              { title: "Regular Assessment", desc: "Mock tests and evaluations to track progress", icon: "📊" },
              { title: "Personalized Attention", desc: "Small batch sizes for individual focus", icon: "🎯" },
              { title: "Flexible Timing", desc: "Multiple batch timings to suit your schedule", icon: "⏰" },
              { title: "Success Guarantee", desc: "Proven results with high success rates", icon: "🏆" }
            ].map((feature, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className="font-serif font-bold text-primary">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-3xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-serif font-bold">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Enroll now and unlock your potential with Bidya Bandana's comprehensive coaching programs.
          </p>
          <EnrollModal />
        </div>
      </Section>
    </div>
  );
}
