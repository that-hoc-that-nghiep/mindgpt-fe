import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserCog, UserX } from 'lucide-react'

// Mock data for initial users
const initialUsers = [
  { id: 1, email: 'john@example.com', name: 'John Doe', membership: 'basic', status: 'active' },
  { id: 2, email: 'jane@example.com', name: 'Jane Smith', membership: 'premium', status: 'active' },
  { id: 3, email: 'bob@example.com', name: 'Bob Johnson', membership: 'basic', status: 'banned' },
  { id: 4, email: 'alice@example.com', name: 'Alice Brown', membership: 'premium', status: 'active' },
  { id: 5, email: 'charlie@example.com', name: 'Charlie Davis', membership: 'basic', status: 'banned' },
]

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers)

  const handleRoleChange = (userId: number, newRole: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, membership: newRole } : user
    ))
  }

  const handleStatusChange = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: user.status === 'active' ? 'banned' : 'active' } : user
    ))
  }

  const activeUsers = users.filter(user => user.status === 'active')
  const bannedUsers = users.filter(user => user.status === 'banned')

  const UserTable = ({ users, title }: { users: typeof initialUsers, title: string }) => (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Membership</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <Select 
                    value={user.membership} 
                    onValueChange={(value) => handleRoleChange(user.id, value)}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select membership" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button 
                    variant={user.status === 'active' ? "destructive" : "default"}
                    size="sm"
                    onClick={() => handleStatusChange(user.id)}
                  >
                    {user.status === 'active' ? (
                      <>
                        <UserX className="mr-2 h-4 w-4" />
                        Ban User
                      </>
                    ) : (
                      <>
                        <UserCog className="mr-2 h-4 w-4" />
                        Activate User
                      </>
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
      <UserTable users={activeUsers} title="Active Users" />
      <UserTable users={bannedUsers} title="Banned Users" />
    </div>
  )
}