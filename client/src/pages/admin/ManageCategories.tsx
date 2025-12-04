import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CATEGORIES } from "@/data/mockData";
import { Plus, Trash2 } from "lucide-react";

export default function ManageCategories() {
  const [categories, setCategories] = useState(CATEGORIES);
  const [newCategory, setNewCategory] = useState("");

  const handleAdd = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleDelete = (cat: string) => {
    setCategories(categories.filter(c => c !== cat));
  };

  return (
    <div className="max-w-2xl space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input 
              placeholder="Category Name (e.g. Lab Manual)" 
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <Button onClick={handleAdd} className="gap-2">
              <Plus size={16} /> Add
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Categories</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category Name</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((cat, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{cat}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => handleDelete(cat)}
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
