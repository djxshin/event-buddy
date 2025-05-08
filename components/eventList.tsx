// components/EventList.tsx

import React from "react";

type Event = {
  id: string;
  name: { text: string };
  start: { local: string };
  url: string;
};

type EventListProps = {
  events: Event[];
};

export const EventList: React.FC<EventListProps> = ({ events }) => {
  if (!events.length) return <p>No events found.</p>;

  return (
    <div className="grid gap-4">
      {events.map((event) => (
        <a
          key={event.id}
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold">{event.name.text}</h2>
          <p className="text-sm text-gray-500">{new Date(event.start.local).toLocaleString()}</p>
        </a>
      ))}
    </div>
  );
};
