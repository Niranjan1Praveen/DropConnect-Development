'use client';

import { use } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { eventSchema } from '@/lib/validations/event';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Toaster, toast } from 'sonner';
import Loader from '@/components/ui/loader';

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
          toast.error('Failed to fetch event data');
        }
      } catch {
        toast.error('Something went wrong while fetching event data');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId, setValue]);

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`/api/events/${eventId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { error } = await res.json();
        toast.error(error || 'Failed to update event');
        return;
      }

      toast.success('Event updated successfully!');
      router.push('/volunteer/events');
    } catch {
      toast.error('Something went wrong');
    }
  };

  if (loading) return <div className='flex items-center justify-center min-h-screen'><Loader/></div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1">
      <Card>
        <CardHeader>
          <CardTitle>Update Event</CardTitle>
          <CardDescription>Edit the details of your event below.</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="eventName">Event Name</Label>
            <Input id="eventName" {...register('eventName')} disabled={isSubmitting} />
            {errors.eventName && <p className="text-sm text-red-500">{errors.eventName.message}</p>}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="eventDescription">Event Description</Label>
            <Textarea id="eventDescription" {...register('eventDescription')} disabled={isSubmitting} />
            {errors.eventDescription && <p className="text-sm text-red-500">{errors.eventDescription.message}</p>}
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="organizerName">Organizer Name</Label>
            <Input id="organizerName" {...register('organizerName')} disabled={isSubmitting} />
            {errors.organizerName && <p className="text-sm text-red-500">{errors.organizerName.message}</p>}
          </div>
        </CardContent>

        <CardFooter>
          <Button
            type="submit"
            variant="secondary"
            className="bg-indigo-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Updating...' : 'Update Event'}
          </Button>
        </CardFooter>
      </Card>
      <Toaster richColors />
    </form>
  );
}
