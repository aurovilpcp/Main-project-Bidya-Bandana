import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Download } from "lucide-react";
import { NOTICES } from "@/data/mockData";

export default function Notices() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary text-primary-foreground py-16">
         <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl font-serif font-bold mb-4">Notice Board</h1>
           <p className="text-white/70 max-w-2xl mx-auto">
             Stay updated with the latest announcements, exam schedules, and events.
           </p>
         </div>
      </div>

      <Section className="max-w-4xl mx-auto w-full">
        <div className="space-y-6">
          {NOTICES.map((notice) => (
            <Card key={notice.id} className="overflow-hidden border-l-4 border-l-accent hover:bg-muted/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-6 p-6">
                {/* Date Box */}
                <div className="shrink-0 flex flex-col items-center justify-center w-20 h-20 bg-muted/30 rounded-xl border border-border">
                   <span className="text-2xl font-bold text-primary">{new Date(notice.date).getDate()}</span>
                   <span className="text-xs uppercase font-bold text-muted-foreground">{new Date(notice.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-white bg-primary px-2 py-0.5 rounded-full">{notice.category}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2">{notice.title}</h3>
                  <p className="text-muted-foreground text-sm">{notice.description}</p>
                </div>

                {/* Action */}
                <div className="shrink-0">
                   <Button variant="outline" className="gap-2 w-full md:w-auto">
                     <FileText size={16} /> View Notice
                   </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
