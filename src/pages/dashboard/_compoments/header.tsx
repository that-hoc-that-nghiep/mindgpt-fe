import React, { useState } from "react"
import {
    Bell,
    ChevronDown,
    Search,
    CircleUser,
    Package2,
    Plus,
    Building2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export default function Header() {
    const [currentOrg, setCurrentOrg] = useState("Cao Hiep K17HL's Org")
    const [organizations, setOrganizations] = useState([
        "Cao Hiep K17HL's Org",
        "Cao Hiep K17HL's Org 2",
        "This is a very long organization name that should be truncated",
    ])
    const [isNewOrgModalOpen, setIsNewOrgModalOpen] = useState(false)
    const [newOrgName, setNewOrgName] = useState("")

    const handleCreateNewOrg = () => {
        if (newOrgName.trim()) {
            setOrganizations([...organizations, newOrgName.trim()])
            setCurrentOrg(newOrgName.trim())
            setNewOrgName("")
            setIsNewOrgModalOpen(false)
        }
    }

    return (
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="flex gap-4 grow">
                <div className="hidden md:flex items-center">
                    <Package2 className="h-6 w-6 text-primary mr-2" />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="font-semibold text-lg"
                            >
                                <span className="max-w-[200px] truncate">
                                    {currentOrg}
                                </span>
                                <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {organizations.map((org, index) => (
                                <DropdownMenuItem
                                    key={index}
                                    onSelect={() => setCurrentOrg(org)}
                                >
                                    <Building2 className="mr-2 h-4 w-4" />
                                    <span className="truncate">{org}</span>
                                </DropdownMenuItem>
                            ))}
                            <DropdownMenuItem
                                onSelect={() => setIsNewOrgModalOpen(true)}
                            >
                                <Plus className="mr-2 h-4 w-4" />
                                Create new organization
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="flex-1 max-w-2xl">
                    <form className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search mindmap..."
                                className="w-full appearance-none bg-background pl-8 shadow-none"
                            />
                        </div>
                        <Button
                            type="submit"
                            size="sm"
                            className="flex items-center gap-2"
                        >
                            Search
                        </Button>
                    </form>
                </div>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="secondary"
                        size="icon"
                        className="rounded-full"
                    >
                        <CircleUser className="h-5 w-5" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link to={"/profile"}>Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link to={"/login"}>Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog
                open={isNewOrgModalOpen}
                onOpenChange={setIsNewOrgModalOpen}
            >
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Organization</DialogTitle>
                        <DialogDescription>
                            Enter a name for your new organization.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={newOrgName}
                                onChange={(e) => setNewOrgName(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleCreateNewOrg}>
                            Create
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </header>
    )
}
