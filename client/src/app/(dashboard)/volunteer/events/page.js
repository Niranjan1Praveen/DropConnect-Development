import { Button } from "@/components/ui/button";
import { FileIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page(props) {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
      <div className="bg-primary/15 flex items-center justify-center rounded-full size-20">
        <FileIcon className="size-10 text-indigo-600" />
      </div>
      <h2 className="mt-6 font-semibold text-2xl">You dont have any events created</h2>
      <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-lg">You currently dont have any events. Please create some so you can see them right here!</p>
      <Button variant={"secondary"} size={"lg"} className={"bg-indigo-600 text-white"} asChild>
        <Link href={"events/new"}>
            <PlusIcon />
            Create
        </Link>
      </Button>
    </div>
  );
}

export default Page;
