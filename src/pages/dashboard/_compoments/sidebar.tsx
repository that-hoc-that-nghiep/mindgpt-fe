import React, { useState } from "react";
import {
  Bell,
  Settings,
  CreditCard,
  ChevronUp,
  ChevronDown,
  BrainCircuit,
  Network,
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
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSettingsLinks, setShowSettingsLinks] = useState(false);

  const toggleSettingsLinks = () => {
    setShowSettingsLinks(!showSettingsLinks);
  };
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link
            to={"/dashboard/abc"}
            className="flex items-center gap-2 font-semibold"
          >
            <BrainCircuit className="size-6 text-primary" />
            <span className="">MindGPT</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to={"/dashboard/abc"}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Network className="size-4" />
              All mindmaps
            </Link>
            <Link
              to="#"
              onClick={toggleSettingsLinks} // Toggle the visibility of settings links
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
              {/* Conditional rendering of the up/down arrow */}
              {showSettingsLinks ? (
                <ChevronUp className="ml-auto h-4 w-4" />
              ) : (
                <ChevronDown className="ml-auto h-4 w-4" />
              )}
            </Link>
            {showSettingsLinks && ( // Conditionally render General and Members links
              <>
                <Link
                  to={"/dashboard/abc/general-settings"}
                  className="flex ml-7 items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  General
                </Link>
                <Link
                  to={"/dashboard/abc/members-settings"}
                  className="flex ml-7 items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  Members
                </Link>
              </>
            )}
            <Link
              to={"/dashboard/abc/subscription"}
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
  );
};

export default Sidebar;
