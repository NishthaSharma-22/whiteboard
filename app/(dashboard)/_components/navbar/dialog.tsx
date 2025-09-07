
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogTitle } from "@radix-ui/react-dialog";
import { PlusSquareIcon} from "lucide-react";

export default function DialogCloseButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Organization</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md p-2 overflow-hidden flex flex-col justify-center items-center">
        <DialogTitle className="text-lg font-semibold text-gray-900">
          Add Organization
        </DialogTitle>
        <CreateOrganization
          appearance={{
            elements: {
              headerTitle: "hidden",
              card: "p-0 shadow-none",
              cardBox: "p-0",
              formContainer: "p-0",
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
