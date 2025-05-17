import { z } from "zod";

export const eventSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  eventDescription: z.string().optional(),
  organizerName: z.string().optional(),
});
