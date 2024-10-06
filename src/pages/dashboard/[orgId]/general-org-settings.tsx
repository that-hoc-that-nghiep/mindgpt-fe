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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const GeneralOrgSettingPage = () => {
  const [orgName, setOrgName] = useState("Cao Hiep K17HL's Org");

  const handleDeleteOrg = () => {
    console.log("Organization deleted");
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full mx-16 mt-6">
        <CardHeader>
          <CardTitle>Organization Name</CardTitle>
          <CardDescription>
            Change the name of your organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input
              placeholder="Organization Name"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Organization</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
              <DialogHeader>
                <DialogTitle className="mt-4">
                  Are you sure to delete this organization
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
                    onClick={handleDeleteOrg}
                  >
                    Delete
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button>Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GeneralOrgSettingPage;
