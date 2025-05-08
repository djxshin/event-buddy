export async function getEvents(city: string) {
    const token = process.env.NEXT_PUBLIC_EVENTBRITE_TOKEN;
  
    if (!token) {
      throw new Error("Eventbrite API token is missing.");
    }
  
    const res = await fetch(
      `https://www.eventbriteapi.com/v3/events/search/?location.address=${encodeURIComponent(city)}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 60 } // Optional: for Next.js ISR
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
  
    const data = await res.json();
    return data.events; // This is an array of event objects
  }
  