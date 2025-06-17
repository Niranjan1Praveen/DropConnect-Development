import { Button } from "@/components/ui/button";
import { PlusIcon, InboxIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
        <div className="bg-primary/15 flex items-center justify-center rounded-full size-20 border-4 border-indigo-600">
          <InboxIcon className="size-10 text-indigo-600" />
        </div>
        <h2 className="mt-6 font-semibold text-2xl">Your inbox is empty</h2>
        <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-xl">
          You haven’t received any messages yet. Once you do, you’ll see them
          here. Meanwhile, start engaging or creating events to get updates!
        </p>
        
      </div>
    </>
  );
}

export default Page;
