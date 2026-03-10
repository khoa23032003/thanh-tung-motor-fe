"use client";

import { Button } from "@/src/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/src/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

import { Input } from "@/components/ui/input";

const brands = [
  { id: 1, name: "Nike", url: "https://nike.com" },
  { id: 2, name: "Adidas", url: "https://adidas.com" },
  { id: 3, name: "Puma", url: "https://puma.com" },
  { id: 4, name: "New Balance", url: "https://newbalance.com" },
];

export default function BrandsPage() {
  return (
    <div className="p-8">
      {/* Header */}

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Brands Management</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button>Add Brand</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Brand</DialogTitle>
            </DialogHeader>

            <div className="space-y-3">
              <Input placeholder="Brand name" />

              <Input placeholder="Brand url" />

              <Button className="w-full">Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>URL</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {brands.map((brand) => (
              <TableRow key={brand.id}>
                <TableCell>{brand.id}</TableCell>

                <TableCell className="font-medium">{brand.name}</TableCell>

                <TableCell className="text-blue-500">{brand.url}</TableCell>

                <TableCell className="text-right space-x-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>

                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
