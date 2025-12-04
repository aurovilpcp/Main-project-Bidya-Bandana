import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Search, Filter } from "lucide-react";
import { STUDY_MATERIALS, CATEGORIES } from "@/data/mockData";

export default function StudyMaterials() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [subject, setSubject] = useState("all");

  const filteredMaterials = STUDY_MATERIALS.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || item.category === category;
    const matchesSubject = subject === "all" || item.subject === subject;
    return matchesSearch && matchesCategory && matchesSubject;
  });

  const subjects = Array.from(new Set(STUDY_MATERIALS.map(m => m.subject)));

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-primary text-primary-foreground py-16">
         <div className="container mx-auto px-4 text-center">
           <h1 className="text-4xl font-serif font-bold mb-4">Study Materials</h1>
           <p className="text-white/70 max-w-2xl mx-auto">
             Access our comprehensive library of notes, worksheets, and question banks.
           </p>
         </div>
      </div>

      <Section>
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 p-6 bg-muted/30 rounded-xl border border-border">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search topics..." 
              className="pl-10 bg-white" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={subject} onValueChange={setSubject}>
            <SelectTrigger className="w-full md:w-[200px] bg-white">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full md:w-[200px] bg-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMaterials.length > 0 ? (
            filteredMaterials.map((material) => (
              <Card key={material.id} className="group hover:-translate-y-1 transition-transform duration-300 border-border shadow-sm hover:shadow-lg overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="h-48 overflow-hidden relative bg-muted">
                    <img 
                      src={material.thumbnail} 
                      alt={material.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-white">
                      {material.subject}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                       <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded uppercase tracking-wider">{material.category}</span>
                       <span className="text-xs text-muted-foreground">{material.class}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{material.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2 flex-1">{material.description}</p>
                    
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">{material.downloads} downloads</span>
                      <Button size="sm" className="gap-2 rounded-full">
                        <Download size={14} /> Download
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              <p>No study materials found matching your criteria.</p>
              <Button variant="link" onClick={() => {setSearch(""); setCategory("all"); setSubject("all")}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
