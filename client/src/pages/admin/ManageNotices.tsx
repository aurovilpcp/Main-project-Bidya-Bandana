import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, FileText } from "lucide-react";
import { NOTICES } from "@/data/mockData";

export default function ManageNotices() {
  const [notices, setNotices] = useState(NOTICES);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = (id: number) => {
    setNotices(notices.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">All Notices</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus size={16} /> New Notice
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Post New Notice</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Notice Title</Label>
                <Input id="title" placeholder="e.g. Summer Break Announcement" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="desc">Description</Label>
                <Textarea id="desc" placeholder="Brief details..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file">Attachment (PDF/Image)</Label>
                <Input id="file" type="file" />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setIsDialogOpen(false)}>Post Notice</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Attachment</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notices.map((notice) => (
                <TableRow key={notice.id}>
                  <TableCell className="whitespace-nowrap">{notice.date}</TableCell>
                  <TableCell className="font-medium">{notice.title}</TableCell>
                  <TableCell>{notice.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <FileText size={12} /> {notice.file}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(notice.id)}
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
