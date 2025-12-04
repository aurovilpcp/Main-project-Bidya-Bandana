import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { STUDY_MATERIALS, CATEGORIES } from "@/data/mockData";

export default function ManageMaterials() {
  const [materials, setMaterials] = useState(STUDY_MATERIALS);
  const [search, setSearch] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredMaterials = materials.filter(m => 
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: number) => {
    setMaterials(materials.filter(m => m.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search materials..." 
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus size={16} /> Add Material
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Study Material</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g. Physics Chapter 1 Notes" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g. Physics" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Class</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xi">Class XI</SelectItem>
                      <SelectItem value="xii">Class XII</SelectItem>
                      <SelectItem value="jee">JEE</SelectItem>
                      <SelectItem value="neet">NEET</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file">Upload File</Label>
                <Input id="file" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setIsDialogOpen(false)}>Save Material</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMaterials.map((material) => (
                <TableRow key={material.id}>
                  <TableCell className="font-medium">{material.title}</TableCell>
                  <TableCell>{material.subject}</TableCell>
                  <TableCell>{material.class}</TableCell>
                  <TableCell>{material.category}</TableCell>
                  <TableCell>{material.downloads}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Pencil size={14} />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(material.id)}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
