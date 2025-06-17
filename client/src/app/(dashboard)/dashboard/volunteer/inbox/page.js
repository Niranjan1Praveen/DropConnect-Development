import { Button } from "@/components/ui/button";
import { PlusIcon, InboxIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Page(props) {
  const [volunteers, setVolunteers] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVolunteers() {
      try {
        const response = await fetch("/api/volunteer/get");
        const result = await response.json();
        if (result.data) {
          setVolunteers(result.data);
          setStatus(result.status);
        }
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVolunteers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Status: {status}</h2>
      </div>
      {volunteers.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
          <div className="bg-primary/15 flex items-center justify-center rounded-full size-20 border-4 border-indigo-600">
            <InboxIcon className="size-10 text-indigo-600" />
          </div>
          <h2 className="mt-6 font-semibold text-2xl">Your inbox is empty</h2>
          <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-xl">
            You haven’t received any volunteer data yet. Once you do, you’ll see them
            here. Meanwhile, start engaging or creating events to get updates!
          </p>
          <Button
            variant={"secondary"}
            size={"lg"}
            className={"bg-indigo-600 text-white"}
            asChild
          >
            <Link href="/events/new">
              <PlusIcon />
              Create Event
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="border p-4 rounded-md shadow-sm"
            >
              <h3 className="font-semibold">
                {volunteer.salutation || ""} {volunteer.firstName}{" "}
                {volunteer.lastName}
              </h3>
              <p>Mobile: {volunteer.mobilePhone}</p>
              {volunteer.homeCity && (
                <p>
                  Address: {volunteer.homeStreet}, {volunteer.homeCity},{" "}
                  {volunteer.homeState}, {volunteer.postalCode},{" "}
                  {volunteer.homeCountry}
                </p>
              )}
              {volunteer.dateOfBirth && (
                <p>
                  Date of Birth:{" "}
                  {new Date(volunteer.dateOfBirth).toLocaleDateString()}
                </p>
              )}
              {volunteer.gender && <p>Gender: {volunteer.gender}</p>}
              {volunteer.employer && <p>Employer: {volunteer.employer}</p>}
              {volunteer.educationalLevel && (
                <p>Education: {volunteer.educationalLevel}</p>
              )}
              {volunteer.maritalStatus && (
                <p>Marital Status: {volunteer.maritalStatus}</p>
              )}
              {volunteer.employmentStatus && (
                <p>Employment Status: {volunteer.employmentStatus}</p>
              )}
              {volunteer.willingTravelDistance && (
                <p>
                  Willing Travel Distance: {volunteer.willingTravelDistance}
                </p>
              )}
              <p>Help in Disaster: {volunteer.helpInDisaster ? "Yes" : "No"}</p>
              <p>Has Disability: {volunteer.hasDisability ? "Yes" : "No"}</p>
              <p>
                Created At: {new Date(volunteer.createdAt).toLocaleString()}
              </p>
              <p>
                Updated At: {new Date(volunteer.updatedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;