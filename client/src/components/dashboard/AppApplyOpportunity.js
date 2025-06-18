"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Send } from "lucide-react";
export default function ApplyOpportunity({ event }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleApply = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/volunteer/inbox", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          eventId: event.id,
          eventName: event.eventName,
          eventDescription: event.eventDescription,
          organizerName: event.organizerName,
        }),
      });

      if (response.ok) {
        toast.success("Your application has been submitted.");
        setTimeout(() => {
          router.push("/dashboard/volunteer/inbox");
        }, 1500);
      } else if (response.status === 409) {
        toast.warning("You’ve already applied for this opportunity.");
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-3xl">Apply for this Opportunity</h2>
      <Button
        className="bg-indigo-600 text-white"
        onClick={handleApply}
        disabled={loading}
      >
        <Send/> {loading ? "Applying..." : "Apply Now"}
      </Button>
      <Toaster />
    </div>
  );
}
