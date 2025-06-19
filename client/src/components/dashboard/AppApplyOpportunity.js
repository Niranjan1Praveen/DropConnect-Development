"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Briefcase, GraduationCap, Send } from "lucide-react";
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
      <div className="space-y-4 mt-6">
        {event.SkillsRequired && (
          <div className="rounded-xl border border-indigo-300 bg-indigo-50 p-4 shadow-md">
            <p className="flex items-center gap-2 text-lg font-bold text-indigo-800">
              <GraduationCap className="h-5 w-5 text-indigo-700" />
              Skills Required
            </p>
            <p className="mt-2 text-indigo-900 leading-relaxed">
              {event.SkillsRequired}
            </p>
          </div>
        )}

        {event.InternshipRoles && (
          <div className="rounded-xl border border-purple-300 bg-purple-50 p-4 shadow-md">
            <p className="flex items-center gap-2 text-lg font-bold text-purple-800">
              <Briefcase className="h-5 w-5 text-purple-700" />
              Internship Roles
            </p>
            <p className="mt-2 text-purple-900 leading-relaxed">
              {event.InternshipRoles}
            </p>
          </div>
        )}
      </div>

      <h2 className="text-3xl font-bold text-indigo-600 mb-2">
        Apply for this Opportunity
      </h2>
      <p className="text-muted-foreground text-lg">
        Step into the heart of impact — this isn&apos;t just another opportunity,
        it&apos;s your chance to grow, give back, and spark change where it matters
        most.
      </p>

      <Button
        className="bg-indigo-600 text-white"
        onClick={handleApply}
        disabled={loading}
      >
        <Send /> {loading ? "Applying..." : "Apply Now"}
      </Button>
      <Toaster />
    </div>
  );
}
