"use client";

import { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "@/lib/validations/event";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import Loader from "@/components/ui/loader";

export default function UpdateEventPage(promiseParams) {
  const { eventId } = use(promiseParams.params);

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(eventSchema),
  });

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events/${eventId}`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);

          Object.keys(data).forEach((key) => {
            setValue(key, data[key]);
          });
        } else {
          toast.error("Failed to fetch event data");
        }
      } catch {
        toast.error("Something went wrong while fetching event data");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId, setValue]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`/api/events/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error } = await res.json();
        toast.error(error || "Failed to update event");
        return;
      }

      toast.success("Event updated successfully!");
      router.push("/dashboard/events");
    } catch {
      toast.error("Something went wrong");
    }
  };

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />
      </div>
    );
  const onDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const { error } = await res.json();
        toast.error(error || "Failed to delete event");
        return;
      }

      toast.success("Event deleted successfully!");
      router.push("/dashboard/events");
    } catch {
      toast.error("Something went wrong during deletion");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Update Event</CardTitle>
          <CardDescription>
            Edit the details of your event below.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="eventName">Event Name</Label>
            <Input
              id="eventName"
              {...register("eventName")}
              disabled={isSubmitting}
            />
            {errors.eventName && (
              <p className="text-sm text-red-500">{errors.eventName.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="eventDescription">Event Description</Label>
            <Textarea
              id="eventDescription"
              {...register("eventDescription")}
              disabled={isSubmitting}
            />
            {errors.eventDescription && (
              <p className="text-sm text-red-500">
                {errors.eventDescription.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="organizerName">Organizer Name</Label>
            <Input
              id="organizerName"
              {...register("organizerName")}
              disabled={isSubmitting}
            />
            {errors.organizerName && (
              <p className="text-sm text-red-500">
                {errors.organizerName.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="email">Organizer Email</Label>
            <Input id="email" {...register("email")} disabled={isSubmitting} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              id="contact"
              {...register("contact")}
              disabled={isSubmitting}
            />
            {errors.contact && (
              <p className="text-sm text-red-500">{errors.contact.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="eventLocation">Event Location</Label>
            <Input
              id="eventLocation"
              {...register("eventLocation")}
              disabled={isSubmitting}
            />
            {errors.eventLocation && (
              <p className="text-sm text-red-500">
                {errors.eventLocation.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="volunteerCapacity">Volunteer Capacity</Label>
            <Input
              type="number"
              id="volunteerCapacity"
              {...register("volunteerCapacity", { valueAsNumber: true })}
              disabled={isSubmitting}
            />
            {errors.volunteerCapacity && (
              <p className="text-sm text-red-500">
                {errors.volunteerCapacity.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="registrationLink">
              Registration Link (optional)
            </Label>
            <Input
              id="registrationLink"
              {...register("registrationLink")}
              disabled={isSubmitting}
            />
            {errors.registrationLink && (
              <p className="text-sm text-red-500">
                {errors.registrationLink.message}
              </p>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <div className="flex justify-between w-full flex-wrap gap-4">
            <Button
              type="submit"
              variant="secondary"
              className="bg-indigo-600 text-white w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Event"}
            </Button>
            {/* Delete Event */}
            <Button
              variant="destructive"
              className="w-full md:w-auto"
              disabled={isSubmitting}
              onClick={onDelete}
            >
              Delete Event
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Toaster richColors />
    </form>
  );
}
