import { useState } from "react";
import { UserPlus, UserX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

const MembersOrgSettingPage = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const handleAddMember = () => {
    const newMember = {
      id: members.length + 1,
      name: name,
      email: email,
    };
    setMembers([...members, newMember]);
  };

  const handleDeleteMember = (id: number) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center items-center">
      <Card className="w-full mx-16 mt-6">
        <CardHeader>
          <CardTitle>Organization Members</CardTitle>
          <CardDescription>
            Manage the members of your organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between space-x-4"
              >
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {member.email}
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      <UserX className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] ">
                    <DialogHeader>
                      <DialogTitle className="mt-4">
                        Are you sure to remove this {member.name} from org
                      </DialogTitle>
                    </DialogHeader>
                    <DialogFooter className="flex items-center sm:justify-between space-x-4">
                      <DialogClose asChild>
                        <Button type="button">Cancel</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button
                          type="submit"
                          variant="destructive"
                          onClick={() => handleDeleteMember(member.id)}
                        >
                          Remove
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add members to org</DialogTitle>
                <DialogDescription>Enter email to find</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Email</Label>
                  <Input
                    id="email"
                    placeholder="Alan@gmail.com"
                    className="col-span-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right">Name</Label>
                  <Input
                    id="name"
                    placeholder="Alan"
                    className="col-span-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    type="submit"
                    variant="default"
                    onClick={() => handleAddMember()}
                  >
                    Add
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MembersOrgSettingPage;
