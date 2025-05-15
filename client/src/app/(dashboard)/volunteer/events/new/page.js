"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function Page() {
  const availableSkills = [
    "Communication",
    "Teaching",
    "Medical Aid",
    "Logistics",
    "Fundraising",
    "Tech Support",
  ];
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };
  return (
    <div className="flex flex-col flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
          <CardDescription>
            Create your event. Click the button below once you are done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="eventName">Event Name</Label>
            <Input id="eventName" placeholder="Enter event name" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="eventDescription">Event Description</Label>
            <Textarea id="eventDescription" placeholder="Describe the event" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="organizerName">Organizer Name</Label>
            <Input id="organizerName" placeholder="NGO Name" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Contact Email</Label>
            <Input id="email" type="email" placeholder="example@ngo.org" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="phone">Contact Phone</Label>
            <Input id="phone" type="tel" placeholder="+1 234 567 890" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="location">Event Location</Label>
            <Input id="location" placeholder="123 Main St, City, Country" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="category">Event Category</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="environment">Environment</SelectItem>
                <SelectItem value="food">Food Distribution</SelectItem>
                <SelectItem value="fundraising">Fundraising</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="requirements">Volunteer Requirements</Label>
            <div className="space-y-10">
              <div className="flex flex-wrap gap-2">
                {availableSkills.map((skill) => (
                  <Button
                    key={skill}
                    variant={
                      selectedSkills.includes(skill) ? "default" : "outline"
                    }
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </Button>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 py-2">
                <Label htmlFor="registrationLink">Selected Sklls</Label>
                {selectedSkills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="capacity">Volunteer Capacity</Label>
            <Input
              id="capacity"
              type="number"
              placeholder="Number of volunteers needed"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Label htmlFor="registrationLink">
              External Registration Link (optional)
            </Label>
            <Input id="registrationLink" type="url" placeholder="https://..." />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant={"secondary"}
            size={"lg"}
            className={"bg-indigo-600 text-white"}
            asChild
          >
            <Link href={"events/new"}>
              Create
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
