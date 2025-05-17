"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "@/lib/validations/event";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function EventForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

 const onSubmit = async (data) => {
  try {
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error || "Something went wrong");
      return;
    }

    toast.success("Event created successfully!");
    reset();
    setTimeout(() => {
      router.push("/volunteer/events");
    }, 1000);
  } catch {
    toast.error("Failed to create event");
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
          <CardDescription>
            Create your event. Click the button below once you are done.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Event Name */}
          <div className="flex flex-col gap-3">
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              id="eventName"
              placeholder="Event name"
              {...register("eventName")}
              disabled={isSubmitting}
            />
            {errors.eventName && (
              <p className="text-sm text-red-500 mt-1">
                {errors.eventName.message}
              </p>
            )}
          </div>

          {/* Event Description */}
          <div className="flex flex-col gap-3">
            <Label htmlFor="eventDescription">Event Description</Label>
            <Textarea
              id="eventDescription"
              placeholder="Describe the event"
              {...register("eventDescription")}
              disabled={isSubmitting}
            />
          </div>

          {/* Organizer */}
          <div className="flex flex-col gap-3">
            <Label htmlFor="organizerName">Organizer Name</Label>
            <Input
              id="organizerName"
              placeholder="NGO Name"
              {...register("organizerName")}
              disabled={isSubmitting}
            />
          </div>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            variant={"secondary"}
            size={"lg"}
            className={"bg-indigo-600 text-white"}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Event"}
          </Button>
        </CardFooter>
      </Card>
       <Toaster richColor/>
    </form>
  );
}