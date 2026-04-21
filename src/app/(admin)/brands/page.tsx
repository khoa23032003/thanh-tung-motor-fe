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

import { Input } from "@/src/components/ui/input";

const brands = [
  { id: 1, name: "Nike", url: "https://nike.com" },
  { id: 2, name: "Adidas", url: "https://adidas.com" },
  { id: 3, name: "Puma", url: "https://puma.com" },
  { id: 4, name: "New Balance", url: "https://newbalance.com" },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Brands Management
        </h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-all">
              + Add Brand
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl text-indigo-900">
                Create New Brand
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Brand Name
                </label>
                <Input
                  placeholder="e.g. Nike"
                  className="border-slate-300 focus-visible:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Website URL
                </label>
                <Input
                  placeholder="https://..."
                  className="border-slate-300 focus-visible:ring-indigo-500"
                />
              </div>

              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-2">
                Save Brand
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-100/50">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-20 font-semibold text-slate-600">
                ID
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                Name
              </TableHead>
              <TableHead className="font-semibold text-slate-600">
                URL
              </TableHead>
              <TableHead className="text-right font-semibold text-slate-600 pr-6">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {brands.map((brand) => (
              <TableRow
                key={brand.id}
                className="hover:bg-indigo-50/50 transition-colors"
              >
                <TableCell className="text-slate-500 font-medium">
                  #{brand.id}
                </TableCell>

                <TableCell className="font-bold text-slate-800">
                  {brand.name}
                </TableCell>

                <TableCell>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 hover:underline inline-flex items-center gap-1"
                  >
                    {brand.url}
                  </a>
                </TableCell>

                <TableCell className="text-right space-x-2 pr-4">
                  {/* Nút View Mới Thêm */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800 transition-colors"
                  >
                    View
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                  >
                    Edit
                  </Button>

                  <Button
                    variant="destructive"
                    size="sm"
                    className="bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100 hover:text-rose-800 transition-colors shadow-none"
                  >
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
