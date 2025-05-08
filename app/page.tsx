"use client"

import { useState } from "react"
import EventCard from "@/components/event-card"
import SearchForm from "@/components/search-form"

// Dummy event data
const dummyEvents = [
  {
    id: 1,
    title: "Summer Music Festival",
    startDate: "2025-07-15T18:00:00",
    venue: "Central Park Amphitheater",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Tech Conference 2025",
    startDate: "2025-08-22T09:00:00",
    venue: "Downtown Convention Center",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Food & Wine Festival",
    startDate: "2025-06-10T12:00:00",
    venue: "Riverfront Plaza",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Indie Film Showcase",
    startDate: "2025-07-05T19:30:00",
    venue: "Arts District Cinema",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Craft Beer Tasting",
    startDate: "2025-06-18T16:00:00",
    venue: "Brewery District Hall",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function Home() {
  const [city, setCity] = useState("")
  const [events, setEvents] = useState(dummyEvents)

  const handleSearch = (searchCity: string) => {
    setCity(searchCity)
    // In the future, this would fetch from an API based on the city
    console.log(`Searching for events in ${searchCity}`)
    // For now, we'll just use our dummy data
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center my-6">Event Buddy</h1>

      <SearchForm onSearch={handleSearch} />

      <div className="w-full max-w-3xl mt-8">
        <h2 className="text-xl font-semibold mb-4">{city ? `Events in ${city}` : "Upcoming Events"}</h2>

        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </main>
  )
}
