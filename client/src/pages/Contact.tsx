import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/data/mockData";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary text-primary-foreground py-16">
         <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl font-serif font-bold mb-4">Contact Us</h1>
           <p className="text-white/70 max-w-2xl mx-auto">
             Have questions? Reach out to us and we'll get back to you as soon as possible.
           </p>
         </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
             <Card className="border-none shadow-lg bg-primary text-primary-foreground">
               <CardContent className="p-8 space-y-8">
                 <h3 className="font-serif font-bold text-2xl mb-6">Get in Touch</h3>
                 
                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-full">
                     <MapPin className="text-accent h-6 w-6" />
                   </div>
                   <div>
                     <p className="font-bold mb-1">Our Location</p>
                     <p className="text-white/70 text-sm leading-relaxed">{CONTACT_INFO.address}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-full">
                     <Phone className="text-accent h-6 w-6" />
                   </div>
                   <div>
                     <p className="font-bold mb-1">Phone Number</p>
                     <p className="text-white/70 text-sm">{CONTACT_INFO.phone}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-full">
                     <Mail className="text-accent h-6 w-6" />
                   </div>
                   <div>
                     <p className="font-bold mb-1">Email Address</p>
                     <p className="text-white/70 text-sm">{CONTACT_INFO.email}</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-full">
                     <Clock className="text-accent h-6 w-6" />
                   </div>
                   <div>
                     <p className="font-bold mb-1">Office Hours</p>
                     <p className="text-white/70 text-sm">Mon - Sat: 8:00 AM - 6:00 PM</p>
                   </div>
                 </div>
               </CardContent>
             </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h2>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input type="tel" placeholder="+91 90000 00000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Admission Enquiry" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
                  </div>

                  <Button size="lg" className="w-full md:w-auto rounded-full px-8">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>

        {/* Map */}
        <div className="mt-16 h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-border">
          <iframe 
            src={CONTACT_INFO.mapUrl} 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy"
            title="Map"
          />
        </div>
      </Section>
    </div>
  );
}
