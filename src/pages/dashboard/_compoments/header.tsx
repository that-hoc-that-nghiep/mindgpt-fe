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
import { Link } from "react-router-dom"
import OrgSwitcher from "./org-switcher"
import UserAvatarMenu from "./user-avatar-menu"

export default function Header() {
    return (
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <div className="flex gap-4 grow">
                <div className="hidden md:flex items-center">
                    <Package2 className="h-6 w-6 text-primary mr-2" />
                    <OrgSwitcher />
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

            <UserAvatarMenu />
        </header>
    )
}
