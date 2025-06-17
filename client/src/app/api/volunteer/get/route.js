import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request) {
  try {
    const { data, error } = await supabase
      .from('Volunteer')
      .select(`
        id,
        userId,
        salutation,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        homeStreet,
        homeCity,
        homeState,
        postalCode,
        homeCountry,
        mobilePhone,
        employer,
        educationalLevel,
        maritalStatus,
        employmentStatus,
        willingTravelDistance,
        helpInDisaster,
        hasDisability,
        createdAt,
        updatedAt
      `);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ data, status: 'pending' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}