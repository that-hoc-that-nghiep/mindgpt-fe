import React, { useState } from "react";
import {
  Bell,
  CircleUser,
  Menu,
  Package2,
  Search,
  Settings,
  CreditCard,
  Plus,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DashboardLayout() {
  const location = useLocation();
  const basePath = location.pathname.replace(
    /\/(general-settings|members-settings|subscription)$/,
    ""
  );

  // State to manage visibility of General and Members links
  const [showSettingsLinks, setShowSettingsLinks] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log("Search submitted");
  };

  const toggleSettingsLinks = () => {
    setShowSettingsLinks(!showSettingsLinks);
  };

  const [currentOrg, setCurrentOrg] = useState({
    name: "Cao Hiep K17HL's Org",
    avatar: "https://api.dicebear.com/6.x/initials/svg?seed=CDH",
  });
  const [newOrgName, setNewOrgName] = useState("");
  const [orgs, setOrgs] = useState([
    {
      name: "Cao Hiep K17HL's Org",
      avatar: "https://api.dicebear.com/6.x/initials/svg?seed=CDH",
    },
    {
      name: "Cao Hiep K17HL's Org 2",
      avatar: "https://api.dicebear.com/6.x/initials/svg?seed=CDH",
    },
  ]);
  const handleCreateNewOrg = () => {
    const newOrg = {
      name: newOrgName,
      avatar: "https://api.dicebear.com/6.x/initials/svg?seed=NO",
    };
    setCurrentOrg(newOrg)
    setOrgs([...orgs, newOrg]);
    setNewOrgName("");
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">FPT Mindmap</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <hr className="mt-2"></hr>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Plus className="h-4 w-4" />
                Create new mindmap
              </Link>
              <Link
                to="#"
                onClick={toggleSettingsLinks}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Settings className="h-4 w-4" />
                Settings
                {showSettingsLinks ? (
                  <ChevronUp className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-auto h-4 w-4" />
                )}
              </Link>
              {showSettingsLinks && ( // Conditionally render General and Members links
                <>
                  <Link
                    to={`${basePath}/general-settings`}
                    className="flex ml-7 items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    General
                  </Link>
                  <Link
                    to={`${basePath}/members-settings`}
                    className="flex ml-7 items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    Members
                  </Link>
                </>
              )}
              <Link
                to={`${basePath}/subscription`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <CreditCard className="h-4 w-4" />
                Subscription
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  Pro
                </Badge>
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">Acme Inc</span>
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <CreditCard className="h-5 w-5" />
                  Subscription
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    Pro
                  </Badge>
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Upgrade
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex">
            <div className="mr-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <Avatar className="h-6 w-6">
                      <AvatarImage
                        className="rounded-full"
                        src={currentOrg.avatar}
                        alt={currentOrg.name}
                      />
                      <AvatarFallback>
                        {currentOrg.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate">{currentOrg.name}</span>
                    <ChevronDown className="ml-auto h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 ml-3"
                  align="start"
                  forceMount
                >
                  <DropdownMenuLabel>My organizations</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {orgs.map((org) => (
                    <DropdownMenuItem
                      key={org.name}
                      onSelect={() => setCurrentOrg(org)}
                    >
                      <Avatar className="mr-2 h-4 w-4">
                        <AvatarImage
                          className="rounded-full"
                          src={org.avatar}
                          alt={org.name}
                        />
                        <AvatarFallback>{org.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{org.name}</span>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <Dialog>
                      <DialogTrigger asChild>
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          Create new oranization
                        </span>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Enter new organization name</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-full items-center gap-4">
                            <Input
                              id="newOrg"
                              placeholder="New organization"
                              className="col-span-3"
                              value={newOrgName}
                              onChange={(e) => {
                                e.stopPropagation();
                                setNewOrgName(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button
                              type="submit"
                              variant="default"
                              onClick={() => handleCreateNewOrg()}
                            >
                              Create
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search mindmap..."
                  className="w-96 appearance-none bg-background pl-8 shadow-none "
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <Outlet />
      </div>
    </div>
  );
}
