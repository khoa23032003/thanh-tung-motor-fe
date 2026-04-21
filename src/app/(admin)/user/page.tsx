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
import { useUsers } from "@/src/hooks/useUser";

export default function UsersPage() {
  const { users, loading } = useUsers();

  if (loading) return <p className="p-8">Loading...</p>;

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">
          Danh sách người dùng
        </h1>

        <Button className="bg-indigo-600 text-white">+ Add User</Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Permissions</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>#{user.id}</TableCell>
                <TableCell className="font-semibold">{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.roles}</TableCell>
                <TableCell>{user.permissions}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>

                  <Button size="sm" variant="outline">
                    Edit
                  </Button>

                  <Button size="sm" variant="destructive">
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
