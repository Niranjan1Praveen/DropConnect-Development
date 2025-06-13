"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";

export function AppSearchEvents({ locations = [] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const locationFilter = searchParams.get("location") || "";

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");
    const location = formData.get("location");
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (location) params.set("location", location);
    params.set("page", "1");

    router.push(`?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex gap-2 w-full items-center justify-center flex-wrap">
        <Input
          className="p-5 flex-1"
          placeholder="Search Events by name"
          name="search"
          defaultValue={searchQuery}
        />
        <Select name="location" defaultValue={locationFilter || undefined}>
          <SelectTrigger className="w-[180px] p-5">
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {locations
              .filter((loc) => loc)
              .map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Button type="submit" className="bg-indigo-600 text-white p-5">
          <SearchIcon />
          Search
        </Button>
      </div>
    </form>
  );
}
