import { z } from "zod";

export const eventSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  eventDescription: z.string().min(1, "Event Description is required"),
  organizerName: z.string().min(1, "Organizer name is required"),
});
