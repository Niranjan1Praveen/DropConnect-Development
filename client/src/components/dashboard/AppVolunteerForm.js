"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";
import { Checkbox } from "../ui/checkbox";

export default function AppVolunteerForm() {
  const [formData, setFormData] = useState({
    salutation: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    homeStreet: "",
    homeCity: "",
    homeState: "",
    postalCode: "",
    homeCountry: "India",
    mobilePhone: "",
    employer: "",
    educationalLevel: "",
    maritalStatus: "",
    employmentStatus: "",
    willingTravelDistance: "",
    skills: [],
    helpInDisaster: false,
    hasDisability: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value === "yes" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dob = formData.dateOfBirth
        ? new Date(
            `${formData.dateOfBirth.year}-${formData.dateOfBirth.month}-${formData.dateOfBirth.day}`
          )
        : null;

      const response = await fetch("/api/volunteer/put", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          dateOfBirth: dob,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save volunteer data");
      }

      const result = await response.json();
      console.log("Volunteer data saved successfully:", result);
      toast.success("Your information has been saved successfully!");
    } catch (error) {
      console.error("Error saving volunteer data:", error);
      toast.error(
        "There was an error saving your information. Please try again."
      );
    }
  };

  return (
    <form className="space-y-4 max-w-5xl p-8" onSubmit={handleSubmit}>
      <h2 className="font-bold text-3xl">Register for a Volunteer Account</h2>
      <p className="text-muted-foreground">
        Please complete the information below to get started!
      </p>

      {/* Basic Info */}
      <Card className={"bg-transparent"}>
        <CardHeader>
          <CardTitle>Basic Info</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <Label>Salutation</Label>
            <Select
              value={formData.salutation}
              onValueChange={(value) => handleSelectChange("salutation", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mr">Mr.</SelectItem>
                <SelectItem value="ms">Ms.</SelectItem>
                <SelectItem value="mrs">Mrs.</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="space-y-3">
            <Label>
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-3">
              <Label>D.O.B - Day</Label>
              <Input
                name="dateOfBirth.day"
                value={formData.dateOfBirth?.day || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateOfBirth: { ...prev.dateOfBirth, day: e.target.value },
                  }))
                }
                placeholder="DD"
              />
            </div>
            <div className="space-y-3">
              <Label>Month</Label>
              <Input
                name="dateOfBirth.month"
                value={formData.dateOfBirth?.month || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateOfBirth: { ...prev.dateOfBirth, month: e.target.value },
                  }))
                }
                placeholder="MM"
              />
            </div>
            <div className="space-y-3">
              <Label>Year</Label>
              <Input
                name="dateOfBirth.year"
                value={formData.dateOfBirth?.year || ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dateOfBirth: { ...prev.dateOfBirth, year: e.target.value },
                  }))
                }
                placeholder="YYYY"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <Card className={"bg-transparent"}>
        <CardHeader>
          <CardTitle>Contact Info</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <Label>Home Street</Label>
            <Input
              name="homeStreet"
              value={formData.homeStreet}
              onChange={handleChange}
              placeholder="Ex. F-2/2 Vasant Vihar"
            />
          </div>
          <div className="space-y-3">
            <Label>Home City</Label>
            <Input
              name="homeCity"
              value={formData.homeCity}
              onChange={handleChange}
              placeholder="Ex. New Delhi"
            />
          </div>
          <div className="space-y-3">
            <Label>Home State</Label>
            <Input
              name="homeState"
              value={formData.homeState}
              onChange={handleChange}
              placeholder="Ex. FL"
            />
          </div>
          <div className="space-y-3">
            <Label>Postal Code</Label>
            <Input
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Ex. 110001"
            />
          </div>
          <div className="space-y-3">
            <Label>Home Country</Label>
            <Input
              name="homeCountry"
              value={formData.homeCountry}
              onChange={handleChange}
              readOnly
            />
          </div>
          <div className="space-y-3">
            <Label>
              Mobile Phone <span className="text-red-500">*</span>
            </Label>
            <Input
              name="mobilePhone"
              value={formData.mobilePhone}
              onChange={handleChange}
              placeholder="081234 56789"
              required
            />
          </div>
          <div className="md:col-span-2 space-y-3">
            <Label>Employer</Label>
            <Input
              name="employer"
              value={formData.employer}
              onChange={handleChange}
              placeholder="Ex. HandsOn Connect"
            />
          </div>
        </CardContent>
      </Card>

      {/* Volunteer Profile */}
      <Card className={"bg-transparent"}>
        <CardHeader>
          <CardTitle>Volunteer Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <Label>Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) => handleSelectChange("gender", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Educational Level</Label>
            <Select
              value={formData.educationalLevel}
              onValueChange={(value) =>
                handleSelectChange("educationalLevel", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="highschool">High School</SelectItem>
                <SelectItem value="graduate">Graduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Marital Status</Label>
            <Select
              value={formData.maritalStatus}
              onValueChange={(value) =>
                handleSelectChange("maritalStatus", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Employment Status</Label>
            <Select
              value={formData.employmentStatus}
              onValueChange={(value) =>
                handleSelectChange("employmentStatus", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Distance Willing to Travel?</Label>
            <Select
              value={formData.willingTravelDistance}
              onValueChange={(value) =>
                handleSelectChange("willingTravelDistance", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select One" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5km">5 km</SelectItem>
                <SelectItem value="10km">10 km</SelectItem>
                <SelectItem value="more">More</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-3">
            <Label>Please check if you want to help in a disaster</Label>
            <RadioGroup
              value={formData.helpInDisaster ? "yes" : "no"}
              onValueChange={(value) =>
                handleRadioChange("helpInDisaster", value)
              }
              className="flex gap-4 mt-2"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="disaster-yes" />
                <Label htmlFor="disaster-yes">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="disaster-no" />
                <Label htmlFor="disaster-no">No</Label>
              </div>
            </RadioGroup>
            <Label>Do you consider yourself a person with a disability?</Label>
            <RadioGroup
              value={formData.hasDisability ? "yes" : "no"}
              onValueChange={(value) =>
                handleRadioChange("hasDisability", value)
              }
              className="flex gap-4 mt-2"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="disability-yes" />
                <Label htmlFor="disability-yes">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="disability-no" />
                <Label htmlFor="disability-no">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-3 md:col-span-2">
            <Label>Skills You Can Contribute</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                "Teaching",
                "First Aid",
                "Counseling",
                "Construction",
                "Cooking",
                "Driving",
                "Language Translation",
                "IT Skills",
                "Medical",
                "Art/Drawing",
                "Music",
                "Sports Coaching",
                "Fundraising",
              ].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <Checkbox
                    id={`skill-${skill}`}
                    checked={formData.skills.includes(skill)}
                    onCheckedChange={(checked) => {
                      setFormData((prev) => ({
                        ...prev,
                        skills: checked
                          ? [...prev.skills, skill]
                          : prev.skills.filter((s) => s !== skill),
                      }));
                    }}
                  />
                  <label
                    htmlFor={`skill-${skill}`}
                    className="text-sm font-medium leading-none"
                  >
                    {skill}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4">
        <small className="text-muted-foreground">
          By clicking the button, you are indicating your acceptance with the{" "}
          <span className="text-indigo-600 cursor-pointer">
            Terms and Conditions
          </span>{" "}
          for this site.{" "}
        </small>
        <Button type="submit" className={"w-fit"}>
          Save Now
        </Button>
      </div>
      <Toaster richColor />
    </form>
  );
}
