import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
export default function BlankBoard() {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-y-2">
      <Image
        src="/blankboard.svg"
        alt="blank board image"
        width={200}
        height={200}
      />
      <p>Create an organisation to start using boards</p>
      <div className="mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Set up your organization</DialogTitle>
            </DialogHeader>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
