import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserCog, UserX, Search, ChevronLeft, ChevronRight } from 'lucide-react'

// Mock data for initial users
const initialUsers = [
  { id: 1, email: 'john@example.com', name: 'John Doe', membership: 'basic', status: 'active' },
  { id: 2, email: 'jane@example.com', name: 'Jane Smith', membership: 'premium', status: 'active' },
  { id: 3, email: 'bob@example.com', name: 'Bob Johnson', membership: 'basic', status: 'banned' },
  { id: 4, email: 'alice@example.com', name: 'Alice Brown', membership: 'premium', status: 'active' },
  { id: 5, email: 'charlie@example.com', name: 'Charlie Davis', membership: 'basic', status: 'banned' },
  { id: 6, email: 'david@example.com', name: 'David Wilson', membership: 'premium', status: 'active' },
  { id: 7, email: 'eva@example.com', name: 'Eva Martinez', membership: 'basic', status: 'active' },
  { id: 8, email: 'frank@example.com', name: 'Frank Taylor', membership: 'premium', status: 'banned' },
  { id: 9, email: 'grace@example.com', name: 'Grace Lee', membership: 'basic', status: 'active' },
  { id: 10, email: 'henry@example.com', name: 'Henry Clark', membership: 'premium', status: 'active' },
  { id: 11, email: 'isabel@example.com', name: 'Isabel Rodriguez', membership: 'basic', status: 'banned' },
  { id: 12, email: 'jack@example.com', name: 'Jack Thompson', membership: 'premium', status: 'active' },
]

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers)
  const [activeUsers, setActiveUsers] = useState(initialUsers.filter(user => user.status === 'active'))
  const [bannedUsers, setBannedUsers] = useState(initialUsers.filter(user => user.status === 'banned'))
  const [activeSearchTerm, setActiveSearchTerm] = useState('')
  const [bannedSearchTerm, setBannedSearchTerm] = useState('')
  const [activeCurrentPage, setActiveCurrentPage] = useState(1)
  const [bannedCurrentPage, setBannedCurrentPage] = useState(1)
  const usersPerPage = 5

  useEffect(() => {
    const filteredActive = users.filter(user => 
      user.status === 'active' && user.name.toLowerCase().includes(activeSearchTerm.toLowerCase())
    )
    const filteredBanned = users.filter(user => 
      user.status === 'banned' && user.name.toLowerCase().includes(bannedSearchTerm.toLowerCase())
    )
    setActiveCurrentPage(1)
    setBannedCurrentPage(1)
    setActiveUsers(filteredActive)
    setBannedUsers(filteredBanned)
  }, [activeSearchTerm, bannedSearchTerm, users])

  const handleRoleChange = (userId: number, newRole: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, membership: newRole } : user
    ))
  }

  const handleStatusChange = (userId: number) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        const newStatus = user.status === 'active' ? 'banned' : 'active'
        return { ...user, status: newStatus }
      }
      return user
    }))
  }

  const UserTable = ({ users, currentPage, setCurrentPage, title }: {
    users: typeof initialUsers,
    currentPage: number,
    setCurrentPage: (page: number) => void,
    title: string
  }) => {
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">{title} ({users.length})</h2>
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
              {currentUsers.map(user => (
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
        <div className="flex items-center justify-between mt-4">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            variant="outline"
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          <span>Page {currentPage} of {Math.ceil(users.length / usersPerPage)}</span>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastUser >= users.length}
            variant="outline"
          >
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">User Management</h1>

      {/* Search and Table for Active Users */}
      <div className="flex items-center space-x-2 mb-4">
        <Search className="h-5 w-5 text-gray-500" />
        <Input
          type="text"
          placeholder={`Search active users by name...`}
          onChange={(e) => setActiveSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <UserTable 
        users={activeUsers}
        currentPage={activeCurrentPage}
        setCurrentPage={setActiveCurrentPage}
        title="Active Users"
      />

      {/* Search and Table for Banned Users */}
      <div className="flex items-center space-x-2 mb-4">
        <Search className="h-5 w-5 text-gray-500" />
        <Input
          type="text"
          placeholder={`Search banned users by name...`}
          onChange={(e) => setBannedSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <UserTable 
        users={bannedUsers}
        currentPage={bannedCurrentPage}
        setCurrentPage={setBannedCurrentPage}
        title="Banned Users"
      />
    </div>
  )
}