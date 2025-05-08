// components/event-card.tsx

type Event = {
  id: string
  title: string
  startDate: string
  venue: string
  image: string
  url: string
}

type Props = {
  event: Event
}

export default function EventCard({ event }: Props) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 border rounded-lg shadow-sm hover:shadow-md transition"
    >
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-600">{new Date(event.startDate).toLocaleString()}</p>
      <p className="text-sm text-gray-500">{event.venue}</p>
    </a>
  )
}
