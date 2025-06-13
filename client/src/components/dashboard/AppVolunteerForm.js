'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '../ui/button'

export default function AppVolunteerForm() {
  return (
    <div className="space-y-4 max-w-5xl p-8">
      <h2 className='font-bold text-3xl'>Register for a Volunteer Account</h2>
      <p className='text-muted-foreground'>Please complete the information below to get started!</p>
      {/* Basic Info */}
      <Card className={"bg-transparent"}>
        <CardHeader>
          <CardTitle>Basic Info</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className='space-y-3'>
            <Label>Salutation</Label>
            <Select>
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
          <div className='space-y-3'>
            <Label>First Name <span className="text-red-500">*</span></Label>
            <Input placeholder="Enter first name" required />
          </div>
          <div className='space-y-3'>
            <Label>Last Name <span className="text-red-500">*</span></Label>
            <Input placeholder="Enter last name" required />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className='space-y-3'>
              <Label>Date of Birth - Day</Label>
              <Input placeholder="DD" />
            </div>
            <div className='space-y-3'>
              <Label>Month</Label>
              <Input placeholder="MM" />
            </div>
            <div className='space-y-3'>
              <Label>Year</Label>
              <Input placeholder="YYYY" />
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
          <div className='space-y-3'>
            <Label>Home Street</Label>
            <Input placeholder="Ex. F-2/2 Vasant Vihar" />
          </div>
          <div className='space-y-3'>
            <Label>Home City</Label>
            <Input placeholder="Ex. New Delhi" />
          </div>
          <div className='space-y-3'>
            <Label>Home State</Label>
            <Input placeholder="Ex. FL" />
          </div>
          <div className='space-y-3'>
            <Label>Postal Code Notification</Label>
            <Input placeholder="Ex. 110001" />
          </div>
          <div className='space-y-3'>
            <Label>Home Country</Label>
            <Input value="India" readOnly />
          </div>
          <div className='space-y-3'>
            <Label>Mobile Phone <span className="text-red-500">*</span></Label>
            <Input placeholder="081234 56789" required />
          </div>
          <div className="md:col-span-2 space-y-3">
            <Label>Employer</Label>
            <Input placeholder="Ex. HandsOn Connect" />
          </div>
        </CardContent>
      </Card>

      {/* Volunteer Profile */}
      <Card className={"bg-transparent"}>
        <CardHeader>
          <CardTitle>Volunteer Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className='space-y-3'>
            <Label>Gender</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select One" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-3'>
            <Label>Educational Level</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select One" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="highschool">High School</SelectItem>
                <SelectItem value="graduate">Graduate</SelectItem>
                <SelectItem value="postgraduate">Postgraduate</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-3'>
            <Label>Marital Status</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select One" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-3'>
            <Label>Employment Status</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select One" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="employed">Employed</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="unemployed">Unemployed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="md:col-span-2 space-y-3">
            <Label>Do you consider yourself a person with a disability?</Label>
            <RadioGroup defaultValue="no" className="flex gap-4 mt-2">
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
          <div className='space-y-3'>
            <Label>Distance Willing to Travel?</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select One" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="5km">5 km</SelectItem>
                <SelectItem value="10km">10 km</SelectItem>
                <SelectItem value="more">More</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='space-y-3'>
            <Label>Please check if you want to help in a disaster</Label>
            <RadioGroup defaultValue="no" className="flex gap-4 mt-2">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="disaster-yes" />
                <Label htmlFor="disaster-yes">Yes</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="disaster-no" />
                <Label htmlFor="disaster-no">No</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="md:col-span-2 space-y-3">
            <Label>How did you hear about us?</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Select One" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="friend">Friend</SelectItem>
                <SelectItem value="ad">Advertisement</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <small className='text-muted-foreground'>By clicking the button, you are indicating your acceptance with the <span className='text-indigo-600 cursor-pointer'>Terms and Conditions</span> for this site. </small>
        <Button>Save Now</Button>
      </div>
    </div>
  )
}
